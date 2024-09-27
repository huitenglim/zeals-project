export type ShoppingItemType = {
    title: string
    price: number
    currency: string
    date: string
}

export interface INodeElement {
    firstName: string
    lastName: string
    age: number
    birthDate: string
    shoppingItemsList?: ShoppingItemType[]
}

export type Chat = {
    title: string
    nodesList: INodeElement[]
}