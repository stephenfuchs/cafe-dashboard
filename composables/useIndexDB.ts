import { openDB } from "idb";

const DB_NAME = "ordersDB";
const STORE_NAME = "ordersCache";

export async function getDB() {
    return openDB(DB_NAME, 1, {
        upgrade(db) {
            if (!db.objectStoreNames.contains(STORE_NAME)) {
                db.createObjectStore(STORE_NAME);
            }
        },
    });
}

// Save orders to IndexDB
export async function saveOrdersToCache(dateKey: string, orders: object) {
    try {
        const db = await getDB();
        await db.put(STORE_NAME, orders, dateKey);
    } catch (error) {
        console.error("Failed to save orders:", error);
    }
}

// Retrieve orders from IndexDB
export async function getOrdersFromCache(dateKey: string) {
    try {
        const db = await getDB();
        return await db.get(STORE_NAME, dateKey);
    } catch (error) {
        console.error("Failed to fetch orders:", error);
        return null;
    }
}

// Clear old orders (optional)
export async function clearOldOrders() {
    try {
        const db = await getDB();
        await db.clear(STORE_NAME);
    } catch (error) {
        console.error("Failed to clear orders:", error);
    }
}
