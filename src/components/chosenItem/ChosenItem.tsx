import { FC } from "react";
import { ICardItemClick } from "../interfaces/ICardItem";

const ChosenItem: FC <ICardItemClick> = ({ category, id, title, url, price, clickHandler}) => {
    return (
        <div className='card__chosen'>
            <img src={`${url}`} width='150px' height='150px' />
            <div className="side__block">
                <h2>{title} - {price}$</h2>
                <button className='chs__btn' onClick={() => clickHandler({ category, id, url, title, price })}>Удалить</button>
            </div>
        </div>
    )
}

export default ChosenItem;