import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/header/header';
import {ICardItemArray } from "../components/interface/ICardItem";

interface PropTypes {
    chosen: ICardItemArray
    sortValue: number
    setSortValue: React.Dispatch<React.SetStateAction<number>>
}
function Layout({chosen, sortValue, setSortValue}: PropTypes) {
    return (
        <>
            <Header numOfChosen={chosen} sortValue={sortValue} setSortValue={setSortValue} />
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
