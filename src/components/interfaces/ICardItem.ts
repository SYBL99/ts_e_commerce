export interface ICardItem {
    category: number;
    id: number;
    title: string;
    url: string;
    price: number;
}

export interface ICardItemClick extends ICardItem{
    clickHandler: (item: ICardItem) => void
}
