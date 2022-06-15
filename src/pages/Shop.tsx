import React, { useState, useEffect, FC } from 'react';
import CardList from '../components/cardList/CardList';
import getCards from '../API/PostService';
import { ICardItem, ICardItemArray } from "../components/interface/ICardItem";

interface IShop {
    chosen: ICardItemArray
    setChosen: React.Dispatch<React.SetStateAction<ICardItemArray>>
    sortValue: number
    setSortValue: React.Dispatch<React.SetStateAction<number>>
    clickHandler?: (item: ICardItem) => void
}
function Shop({chosen, setChosen, sortValue, setSortValue}:IShop) {

    async function load() {
        const data = await getCards()
        setCards(data)
        setSortCards(data)
    }

    function cardByCategory () {
        const data: ICardItemArray = 
        {arr: cards.arr.filter(element => element.category === sortValue || sortValue === 0) }
        setSortCards(data)
    }

    useEffect(() => {load()}, [])
    useEffect(() => {cardByCategory()}, [sortValue])

    const [cards, setCards] = useState<ICardItemArray>({arr:[]})
    const [sortCards, setSortCards] = useState<ICardItemArray>({arr:[]})

    function show(item: ICardItem ):void {
        setChosen({arr: [...chosen.arr, item] })
    }
    return (
        <>
            <div className="cards__wrapper">
                <CardList arr={sortCards.arr} add={show}/>
            </div>
        </>
    )
}

export default Shop;
