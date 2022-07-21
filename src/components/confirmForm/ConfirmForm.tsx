import { FC } from 'react';
import cl from './ConfirmForm.module.css'
import { ConfirmFormTypes } from '../interfaces/ComponetsProps'
const ConfirmForm: FC<ConfirmFormTypes> = ({setVisible}) => {


    return (
        <form>
            <div>
                <label className={cl.label} >ФИО</label>
                <input className={cl.input} id="name" type="text" ></input>
                <label className={cl.label} >Номер телефона</label>
                <input className={cl.input} type="tel"></input>
                <label className={cl.label} >Дата доставки</label>
                <input className={cl.input} type="date"></input>
                <label className={cl.label} >Адрес доставки</label>
                <input className={cl.input} type="adress"></input>
                <button className={cl.button} onClick={(e)=> {e.preventDefault() ; setVisible(false)}}>Подтвердить</button>
            </div>
        </form>
    )
}

export default ConfirmForm;