import { Chat, INodeElement, ShoppingItemType } from "../models/InternalData";
import { ExtChat, ExtShoppingItemType, IExtNodeElement, Timestamp } from "../models/ExternalData";

/**
 * Convert a date string in ISO 8601 format, for e.g. (2024-09-28T10:30:00Z)
 * to seconds and nanos of Timestamp.
 * @param dateString - Date string in YYYY-MM-DDTHH:MM:SSZ format.
 */
const convertToTimestamp = (dateString: string): Timestamp => {
    const date = new Date(dateString);

    const seconds = Math.floor(date.getTime() / 1000); // Convert milliseconds to seconds
    const nanos = date.getMilliseconds() * 1e6; // Nano has 9 zeroes, so millisecond (3 zeroes) * by 10 to the power of 6

    return {
        seconds,
        nanos,
    }
};

/**
 * Convert internal data of ShoppingItemType to external data of ExtShoppingItemType.
 * @param data - Data of ShoppingItemType.
 */
export const convertIntShoppingItem = (data: ShoppingItemType): ExtShoppingItemType => {
    return {
        Title: data.title,
        Price: data.price,
        Currency: data.currency,
        Date: convertToTimestamp(data?.date)
    }
};

/**
 * Convert internal data of INodeElement to external data of ExtShoppingItemType.
 * @param data - Data of INodeElement.
 * @param convertedShoppingItems - Already converted external data of ExtShoppingItemType.
 */
export const convertINodeElement = (data: INodeElement, convertedShoppingItems: ExtShoppingItemType[]): IExtNodeElement => {
    return {
        FirstName: data.firstName,
        LastName: data.lastName,
        Age: data.age,
        BirthDate: convertToTimestamp(data.birthDate),
        ShoppingItems: convertedShoppingItems,
    }
};

/**
 * Convert internal data of Chat to external data of ExtChat.
 * @param data - Data of Chat.
 * @param convertedINodeElements - Already converted external data of IExtNodeElement.
 */
export const convertChat = (data: Chat, convertedINodeElements: IExtNodeElement[]): ExtChat => {
  return {
      Title: data.title,
      ChatItems: convertedINodeElements,
  }
};