import { Chat, INodeElement, ShoppingItemType } from "../models/InternalData";
import { ExtChat, ExtShoppingItemType, IExtNodeElement, Timestamp } from "../models/ExternalData";


const convertToTimestamp = (dateString: string): Timestamp => {
    const date = new Date(dateString);

    const seconds = Math.floor(date.getTime() / 1000);
    const nanos = date.getMilliseconds() * 1e6;

    return {
        seconds,
        nanos,
    }
}

export const convertIntShoppingItem = (data: ShoppingItemType): ExtShoppingItemType => {
    return {
        Title: data.title,
        Price: data.price,
        Currency: data.currency,
        Date: convertToTimestamp(data?.date)
    }
}

export const convertINodeElement = (data: INodeElement, convertedShoppingItems: ExtShoppingItemType[]): IExtNodeElement => {
    return {
        FirstName: data.firstName,
        LastName: data.lastName,
        Age: data.age,
        BirthDate: convertToTimestamp(data.birthDate),
        ShoppingItems: convertedShoppingItems,
    }
}

export const convertChat = (data: Chat, convertedINodeElements: IExtNodeElement[]): ExtChat => {
  return {
      Title: data.title,
      ChatItems: convertedINodeElements,
  }
};