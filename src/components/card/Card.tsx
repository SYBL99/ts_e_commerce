import { FC } from "react";
import { ICardItemClick } from "../interfaces/ICardItem";

const Card: FC<ICardItemClick> = ({title, url, category, id, price, clickHandler}) => {
    return (
        <div className='card'>
            <img src={`${url}`} alt='goods' />
            <p>{title}</p>
            <div className="card__add">
                <div className="card__price">{price}$</div>
                <button className='card__btn' onClick={() => clickHandler({ category, id, url, title, price })}>Купить</button>
            </div>
        </div>
    )
}

export default Card;