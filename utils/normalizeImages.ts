import {
    imagesCategory,
    imagesDefault,
    imagesItem,
} from "~/server/utils/mappings";

const imageMappings = Object.entries(imagesItem);

export const normalizeItemImage = (rawImage: string) => {
    return (
        imageMappings.find(([key]) => rawImage.includes(key))?.[1] ?? rawImage
    );
};

export const normalizeCategoryImage = (category: string) => {
    return imagesCategory[category] ?? imagesDefault;
};
