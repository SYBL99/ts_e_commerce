import React, { useContext, FC } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ICardItemArray } from "../interfaces/ICardItem";

interface HeaderTypes {
    numOfChosen: ICardItemArray
    setSortValue: React.Dispatch<React.SetStateAction<number>>
}

const Header: FC<HeaderTypes> = ({numOfChosen, setSortValue}) => {
    const nav = useNavigate()

    return (
        <header>
                <nav className="nav__wrap">
                    <div onClick={() => nav('/')} className='nav__naming'>Магазин</div>
                    <div onClick={() => nav('/cart')}>
                        <img className='cart__image' alt='cart' src="img/shopping-cart.png" width='40px' height='40px' />
                        <span className='num'>{numOfChosen.arr.length}</span>
                        <p className='cart__text'>корзина</p>
                    </div>
                </nav>
            <div className="header__sort">
                <div className="sort__child" onClick={()=> setSortValue(0)}>Все товары</div>
                <div className="sort__child" onClick={() => setSortValue(1)}>Категория 1</div>
                <div className="sort__child" onClick={() => setSortValue(2)}>Категория 2</div>
            </div>
        </header>
    )
}

export default Header;
