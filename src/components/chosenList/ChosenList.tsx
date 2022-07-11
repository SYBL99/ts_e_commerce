import React, { FC, ReactNode, ReactPropTypes, useState } from "react";
import ChosenItem from "../chosenItem/ChosenItem";
import { ICardItem, ICardItemArray } from "../interfaces/ICardItem";
interface PropTypes {
    arr: ICardItem[]
    add: (item: ICardItem) => void
}

const ChosenList: React.FC<PropTypes> = ({ arr, add }) => {
    return (
        <>
            {arr.map(element => <ChosenItem clickHandler={add}
                title={`${element.title}`} url={`${element.url}`}
                category={element.category} id={element.id} key={element.id} />)}
        </>
    )
}

export default ChosenList;