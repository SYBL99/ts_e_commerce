import React, { FC } from "react";
import Card from '../card/Card';
import { CardListTypes } from "../interfaces/ComponetsProps";

const CardList: FC<CardListTypes> = ({arr, add}) => {
    return (
        <>
            {arr.map(element => <Card clickHandler={add} 
                title={`${element.title}`} url={`${element.url}`} 
                category={element.category} id={element.id} key={element.id}/>)}
        </>
    )
}

export default CardList;