import { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { HeaderTypes } from '../interfaces/ComponetsProps';
import categories from "../../utils/categories"

const Header: FC<HeaderTypes> = ({numOfChosen, setSortValue}) => {
    const nav = useNavigate()

    const [categoryState, setCategoryState] = useState([{ name: "all", sortValue: 0, active: true}
        , ...categories.map((item, index) => (
            { name: item, sortValue: index + 1, active: false }))
        ])
    console.log(categoryState)
    function setActiveCategory (indexForChange: number) {
        const buff = categoryState.map((element, index) => { if (index === indexForChange) 
            element.active = true;
            else element.active = false;
            return element})
        setCategoryState(buff)
    }
    return (
        <header>
            <div className="nav__wrap">
                <nav className='header__nav'>
                    <div onClick={() => nav('/')} className='nav__naming'>Магазин</div>
                    <div className='cart__outlet' onClick={() => nav('/cart')}>
                        <div className="cart__group">
                            <img className='cart__image' alt='cart' src="img/cart1.png" width='35px' height='35px' />
                            <span className='num'>{numOfChosen.length}</span>
                        </div>
                        <p className='cart__text'>корзина</p>
                    </div>
                </nav>
            </div>
            <div className="sort__wrap">
                <div className="header__sort no-scrollbar">
                    {categoryState.map((element, index) => <div className={element.active ? "sort__child active" : "sort__child"} 
                    onClick={() => {setActiveCategory(index); setSortValue(index)}} key={index}>{element.name}</div>)}
                </div>
            </div>
        </header>
    )
}

export default Header;
