import React, { FC, useState } from 'react';
import { CartTypes } from '../components/interfaces/ComponetsProps';
import ChosenList from '../components/chosenList/ChosenList';
import MyModal from '../components/modal/MyModal';
import ConfirmForm from '../components/confirmForm/ConfirmForm';

const Cart: FC <CartTypes> = ({ chosen, setChosen }) => {
    const [modal, setModal] = useState(false)
    return (
        <>
            <ChosenList chosen={chosen} setChosen={setChosen}/>
            <MyModal children={<ConfirmForm/>} visible={modal} setVisible={setModal}/>
            {chosen.length === 0 ? <h2 className='subtitle'>Корзина пуста</h2> : <button className='buy__btn' onClick={() => setModal(!modal)}>Оформить</button>}
        </>
    )
}

export default Cart;
