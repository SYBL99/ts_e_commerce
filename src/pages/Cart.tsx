import React from 'react';
import ChosenItem from '../components/chosenItem/ChosenItem';
import { ICardItemArray, ICardItem } from '../components/interface/ICardItem';
interface IShop {
    chosen: ICardItemArray
    setChosen: React.Dispatch<React.SetStateAction<ICardItemArray>>
    clickHandler?: (item: ICardItem) => void
}

function Cart({ chosen, setChosen }: IShop) {
    function deleteItem(item: ICardItem): void {
        setChosen({ arr: chosen.arr.filter(arrElem => {
            return arrElem.id !== item.id})})
    }
    return (
        <>
            {chosen.arr.map(item => <ChosenItem key={item.id} category={item.category} 
            id={item.id} title={item.title} url={item.url} 
            clickHandler={deleteItem}/>)}
            {chosen.arr.length === 0 ? <h2>Корзина пуста</h2> : <button className='card__btn'>Оформить</button>}
        </>
    )
}

export default Cart;
