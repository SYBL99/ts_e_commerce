import React, { FC } from "react";
import ChosenItem from "../chosenItem/ChosenItem";
import { ICardItem } from '../../components/interfaces/ICardItem';
import { ChosenListTypes } from "../interfaces/ComponetsProps";

const ChosenList: FC<ChosenListTypes> = ({ chosen, setChosen }) => {

    function deleteItem(item: ICardItem): void {
        setChosen(chosen.filter(arrElem => {
            return arrElem.id !== item.id
        }))
    }
    return (
        <>
            {chosen.map(item => <ChosenItem key={item.id} category={item.category}
                id={item.id} title={item.title} url={item.url}
                clickHandler={deleteItem} />)}
        </>
    )
}

export default ChosenList;