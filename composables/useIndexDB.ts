import { openDB, type IDBPDatabase } from "idb";
import type { Order } from "~/src/gql/graphql";

const DB_NAME = "ordersDB";
const STORE_NAME = "ordersCache";

let dbPromise: Promise<IDBPDatabase> | null = null;

function getDB() {
    if (!dbPromise) {
        dbPromise = openDB(DB_NAME, 1, {
            upgrade(db) {
                if (!db.objectStoreNames.contains(STORE_NAME)) {
                    db.createObjectStore(STORE_NAME);
                }
            },
        });
    }

    return dbPromise;
}

// Save orders to IndexDB
export async function saveOrdersToCache(dateKey: string, orders: Order[]) {
    // console.log("saveOrdersToCache: ", dateKey, orders);
    console.log(`saveOrdersToCache: ${dateKey}, ${orders.length} orders`);
    try {
        const db = await getDB();
        await db.put(STORE_NAME, orders, dateKey);
    } catch (error) {
        console.error("Failed to save orders:", error);
        throw error;
    }
}

// Retrieve orders from IndexDB
export async function getOrdersFromCache(dateKey: string) {
    try {
        const db = await getDB();
        return (await db.get(STORE_NAME, dateKey)) as Order[] | undefined;
    } catch (error) {
        console.error("Failed to fetch orders:", error);
        throw error;
    }
}

// Clear old orders (optional)
export async function clearOldOrders() {
    try {
        const db = await getDB();
        await db.clear(STORE_NAME);
    } catch (error) {
        console.error("Failed to clear orders:", error);
        throw error;
    }
}
