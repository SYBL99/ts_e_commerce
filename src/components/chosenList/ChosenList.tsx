import { FC, useEffect, useState } from "react";
import ChosenItem from "../chosenItem/ChosenItem";
import { ICardItem } from '../../components/interfaces/ICardItem';
import { ChosenListTypes } from "../interfaces/ComponetsProps";

const ChosenList: FC<ChosenListTypes> = ({ chosen, setChosen }) => {
    const [summary, setSummary] = useState (chosen.reduce((acc, item) => (acc + item.price), 0))

    function deleteItem(item: ICardItem): void {
        setChosen(chosen.filter(arrElem => arrElem.id !== item.id ))
    }
    useEffect(() => setSummary(chosen.reduce((acc, item) => (acc + item.price), 0)),[chosen])

    return (
        <>
            {chosen.map(item => <ChosenItem key={item.id} category={item.category}
                id={item.id} title={item.title} url={item.url} price={item.price}
                clickHandler={deleteItem} />)}
            {chosen.length === 0|| <div className="cart__price">Итоговая цена: {summary}$</div>}
        </>
    )
}

export default ChosenList;