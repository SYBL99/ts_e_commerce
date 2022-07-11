import React, { FC, ReactNode, ReactPropTypes, useState } from "react";
import Card from '../card/Card';
import { ICardItem, ICardItemArray } from "../interfaces/ICardItem";
interface PropTypes {
    arr: ICardItem[]
    add: (item: ICardItem)=>void
}

const CardList: React.FC<PropTypes> = ({arr, add}) => {
    return (
        <>
            {arr.map(element => <Card clickHandler={add} 
                title={`${element.title}`} url={`${element.url}`} 
                category={element.category} id={element.id} key={element.id}/>)}
        </>
    )
}

export default CardList;