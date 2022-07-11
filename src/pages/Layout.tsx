import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/header/header';
import {ICardItemArray } from "../components/interfaces/ICardItem";

interface LayoutTypes {
    chosen: ICardItemArray
    setSortValue: React.Dispatch<React.SetStateAction<number>>
}
function Layout({chosen, setSortValue}: LayoutTypes) {
    return (
        <>
            <Header numOfChosen={chosen} setSortValue={setSortValue} />
            <main>
                <Outlet/>
            </main>

            <footer>
                Подвал
            </footer>
        </>
    )
}

export default Layout;
