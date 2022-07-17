import React, { FC } from 'react';
import ChosenItem from '../components/chosenItem/ChosenItem';
import { ICardItem } from '../components/interfaces/ICardItem';

interface CartTypes {
    chosen: ICardItem[]
    setChosen: React.Dispatch<React.SetStateAction<ICardItem[]>>
    clickHandler?: (item: ICardItem) => void
}

const Cart: FC <CartTypes> = ({ chosen, setChosen }) => {

    function deleteItem(item: ICardItem): void {
        setChosen(chosen.filter(arrElem => {
            return arrElem.id !== item.id}))
    }

    return (
        <>
            {chosen.map(item => <ChosenItem key={item.id} category={item.category} 
            id={item.id} title={item.title} url={item.url} 
            clickHandler={deleteItem}/>)}
            {chosen.length === 0 ? <h2 className='subtitle'>Корзина пуста</h2> : <button className='card__btn'>Оформить</button>}
        </>
    )
}

export default Cart;
