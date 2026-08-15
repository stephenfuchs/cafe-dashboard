import type { OrdersQuery } from "~/src/gql/graphql";
import type { NormalizedModifier } from "~/types/analytics";
import {
    modifierCategoryAssignment,
    modifierCategoryMap,
    modifierGlobalNameMap,
    modifierItemNameMap,
    modifierSkipped,
} from "~/server/utils/mappings";

type Order = NonNullable<OrdersQuery["orders"]>["nodes"][number];
type LineItem = NonNullable<NonNullable<Order["lineItems"]>[number]>;
type LineItemModifier = NonNullable<LineItem["modifiers"]>[number];

export const buildModifierCategoryMap = (item: LineItem) => {
    const modifierCategoryMapBySelection = new Map<string, string>();

    const modifierListInfos = item.itemVariation?.item?.modifierListInfos ?? [];

    for (const info of modifierListInfos) {
        const rawCategory =
            info?.modifierList?.name?.trim().toLowerCase() ?? "";

        for (const modifier of info?.modifierList?.modifiers ?? []) {
            const selection = modifier?.name?.trim().toLowerCase() ?? "";

            if (!selection || modifierCategoryMapBySelection.has(selection)) {
                continue;
            }

            // Preserve Square's existing first-match behavior when the same
            // modifier appears in more than one modifier list.
            modifierCategoryMapBySelection.set(selection, rawCategory);
        }
    }

    return modifierCategoryMapBySelection;
};

export const normalizeModifier = (
    modifier: LineItemModifier,
    itemName: string,
    itemQuantity: number,
    modifierCategoryMapBySelection: Map<string, string>,
): NormalizedModifier | null => {
    const originalSelection = modifier?.name?.trim().toLowerCase() ?? "";

    if (!originalSelection || modifierSkipped.includes(originalSelection)) {
        return null;
    }

    const globalNormalizedSelection =
        modifierGlobalNameMap[originalSelection] ?? originalSelection;

    const itemSpecificSelection =
        modifierItemNameMap[itemName]?.[globalNormalizedSelection] ??
        globalNormalizedSelection;

    const rawCategory =
        modifierCategoryMapBySelection.get(originalSelection) ?? "";

    const mappedCategory = modifierCategoryMap[rawCategory] ?? rawCategory;

    const normalizedCategory =
        mappedCategory ||
        modifierCategoryAssignment[itemSpecificSelection] ||
        "other";

    return {
        id: String(modifier?.uid ?? ""),
        name: itemSpecificSelection,
        category: normalizedCategory,
        selection: itemSpecificSelection,
        ordinal: 0,
        count: itemQuantity,
    };
};
