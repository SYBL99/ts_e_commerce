import { ReactNode } from "react"
import { ICardItem } from "./ICardItem"

export interface ShopTypes {
    chosen: ICardItem[]
    setChosen: React.Dispatch<React.SetStateAction<ICardItem[]>>
    sortValue: number
    setSortValue: React.Dispatch<React.SetStateAction<number>>
    clickHandler?: (item: ICardItem) => void
}

export interface CardListTypes {
    arr: ICardItem[]
    add: (item: ICardItem) => void
}

export interface HeaderTypes {
    numOfChosen: ICardItem[]
    setSortValue: React.Dispatch<React.SetStateAction<number>>
}

export interface CartTypes {
    chosen: ICardItem[]
    setChosen: React.Dispatch<React.SetStateAction<ICardItem[]>>
    clickHandler?: (item: ICardItem) => void
}

export interface LayoutTypes {
    chosen: ICardItem[]
    setSortValue: React.Dispatch<React.SetStateAction<number>>
}

export interface ChosenListTypes {
    chosen: ICardItem[]
    setChosen: React.Dispatch<React.SetStateAction<ICardItem[]>>
}

export interface MyModalTypes {
    children: ReactNode
    visible: boolean
    setVisible: React.Dispatch<React.SetStateAction<boolean>>
}

export interface ConfirmFormTypes {
    setVisible: React.Dispatch<React.SetStateAction<boolean>>
}
