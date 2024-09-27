import { ShoppingItemType } from "../models/InternalData";
import { randomDate, randomItemName, randomPrice } from "../utils/randomHelper";

export const createSampleShoppingItem = (): ShoppingItemType => {
    return {
        title: randomItemName(),
        price: randomPrice(),
        currency: "USD",
        date: randomDate(new Date("2024-06-01T00:00:00Z"), new Date("2024-09-30T23:59:59Z")),
    };
};

export const createRandomShoppingItem = (amountToGenerate: number): ShoppingItemType[] => {
    return Array.from({length: amountToGenerate}, () => createSampleShoppingItem());
}

export const mockShoppingItems: ShoppingItemType[] = createRandomShoppingItem(10);