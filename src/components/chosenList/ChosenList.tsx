import React from "react";
import ChosenItem from "../chosenItem/ChosenItem";
import { ICardItem } from "../interfaces/ICardItem";
interface ChosenListTypes {
    arr: ICardItem[]
    add: (item: ICardItem) => void
}

const ChosenList: React.FC<ChosenListTypes> = ({ arr, add }) => {
    return (
        <>
            {arr.map(element => <ChosenItem clickHandler={add}
                title={`${element.title}`} url={`${element.url}`}
                category={element.category} id={element.id} key={element.id} />)}
        </>
    )
}

export default ChosenList;