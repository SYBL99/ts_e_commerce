import React, { useContext, FC } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ICardItemArray } from "../../components/interface/ICardItem";

interface PropTypes {
    numOfChosen: ICardItemArray
    sortValue: number
    setSortValue: React.Dispatch<React.SetStateAction<number>>
}

const Header: FC<PropTypes> = ({numOfChosen, sortValue, setSortValue}) => {
    const nav = useNavigate()

    const changeValue = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSortValue(Number(event.target.value))
    }

    return (
        <header>
            <div className="nav__wrap">
                <div onClick={()=>nav('/')} className='nav__naming'>Магазин</div>
                <div>
                    <img className='cart__image' onClick={() => nav('/cart')} src="img/shopping-cart.png" width='40px' height='40px' />
                    <span className='num' onClick={() => nav('/cart')}>{numOfChosen.arr.length}</span>
                </div>
            </div>
            <div className="header__sort">
                <select onChange={changeValue}>
                    <option value={0}>Все категории</option>
                    <option value={1}>Категория 1</option>
                    <option value={2}>Категория 2</option>
                </select>
            </div>
        </header>
    )
}

export default Header;
