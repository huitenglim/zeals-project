export type Timestamp = {
    seconds: number
    nanos: number
}

export type ExtShoppingItemType = {
    Title: string
    Price: number
    Currency: string
    Date: Timestamp
}

export interface IExtNodeElement {
    FirstName: string
    LastName: string
    Age: number
    BirthDate: Timestamp
    ShoppingItems: ExtShoppingItemType[]
}

export type ExtChat = {
    Title: string
    ChatItems: IExtNodeElement[]
}