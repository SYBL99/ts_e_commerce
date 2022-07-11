import React, { FC, useState } from "react";
import { ICardItemClick } from "../interfaces/ICardItem";

const Card: FC<ICardItemClick> = ({title, url, category, id, clickHandler}) => {
    return (
        <div className='card'>
            <img src={`${url}`} width='150px' height='150px' />
                <h2>{title}</h2>
                <button className='card__btn' onClick={() => clickHandler({ category, id, url, title })}>Добавить в корзину</button>
        </div>
    )
}

export default Card;