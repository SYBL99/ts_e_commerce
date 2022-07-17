import React, { useState, useEffect, FC } from 'react';
import CardList from '../components/cardList/CardList';
import getCards from '../API/PostService';
import { ICardItem } from "../components/interfaces/ICardItem";
import { ShopTypes } from '../components/interfaces/ComponetsProps';

const Shop: FC<ShopTypes> = ({chosen, setChosen, sortValue, setSortValue}) => {

    async function load() {
        const data = await getCards()
        setCards(data)
        setSortCards(data)
    }

    function cardByCategory () {
        const data: ICardItem[] = cards.filter(element => element.category === sortValue || sortValue === 0)
        setSortCards(data)
    }

    useEffect(() => {load()}, [])
    useEffect(() => {cardByCategory()}, [sortValue])

    const [cards, setCards] = useState<ICardItem[]>([])
    const [sortCards, setSortCards] = useState<ICardItem[]>([])

    function checkUniq(item: ICardItem ):void {
        let flag = true;
        chosen.forEach(element => {if (element.id === item.id) {flag = false}})
        if (flag === true) {
            setChosen([...chosen, item])
        }
    }
    return (
        <>
            <div className="cards__wrapper">
                <CardList arr={sortCards} add={checkUniq}/>
            </div>
        </>
    )
}

export default Shop;
