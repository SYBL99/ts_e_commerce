import { ICardItem } from "./ICardItem"

export interface ShopTypes {
    chosen: ICardItem[]
    setChosen: React.Dispatch<React.SetStateAction<ICardItem[]>>
    sortValue: number
    setSortValue: React.Dispatch<React.SetStateAction<number>>
    clickHandler?: (item: ICardItem) => void
}