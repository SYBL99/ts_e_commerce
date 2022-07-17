import React, { FC, useState } from "react";
import { ICardItemClick } from "../interfaces/ICardItem";

const Card: FC<ICardItemClick> = ({title, url, category, id, clickHandler}) => {
    return (
        <div className='card'>
            <img src={`${url}`} alt='goods' />
                <p>{title}</p>
                <button className='card__btn' onClick={() => clickHandler({ category, id, url, title })}>Добавить в корзину</button>
        </div>
    )
}

export default Card;