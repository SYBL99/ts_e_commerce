import React, { FC} from "react";
import { ICardItemClick } from "../interface/ICardItem";

const ChosenItem: FC <ICardItemClick> = ({ category, id, title, url, clickHandler}) => {
    return (
        <div className='card__chosen'>
            <img src={`${url}`} width='150px' height='150px' />
            <div className="side__block">
                <h2>{title}</h2>
                <button className='chs__btn' onClick={() => clickHandler({ category, id, url, title })}>Удалить</button>
            </div>
        </div>
    )
}

export default ChosenItem;