import React, { FC, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/header/header';
import {ICardItem } from "../components/interfaces/ICardItem";

interface LayoutTypes {
    chosen: ICardItem[]
    setSortValue: React.Dispatch<React.SetStateAction<number>>
}
const Layout: FC <LayoutTypes> = ({chosen, setSortValue}) => {
    return (
        <>
            <Header numOfChosen={chosen} setSortValue={setSortValue} />
            
            <main>
                <Outlet/>
            </main>

            <footer>
                2022
            </footer>
        </>
    )
}

export default Layout;
