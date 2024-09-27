import { INodeElement } from "../models/InternalData";
import { randomDate, randomNumber } from "../utils/randomHelper";
import { mockShoppingItems } from "./mockShoppingItems";

export const createSampleINodeElement = (): INodeElement => {
    return {
        firstName: `John${randomNumber(1, 9)}`,
        lastName: `Doe${randomNumber(1, 9)}`,
        age: randomNumber(1,100),
        birthDate: randomDate(new Date("1950-01-01T00:00:00Z"), new Date("2024-12-31T23:59:59Z")),
        shoppingItemsList: mockShoppingItems ?? [],
    };
};

export const createINodeElement = (amountToGenerate: number): INodeElement[] => {
    return Array.from({length: amountToGenerate}, () => createSampleINodeElement());
}

export const mockINodeElements = createINodeElement(5);
