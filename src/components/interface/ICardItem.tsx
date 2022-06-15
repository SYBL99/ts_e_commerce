export interface ICardItem {
    category: number,
    id: number,
    title: string,
    url: string
}

export interface ICardItemArray {
    arr: Array<ICardItem>
}

export interface ICardItemClick extends ICardItem{
    clickHandler: (item: ICardItem) => void
}
