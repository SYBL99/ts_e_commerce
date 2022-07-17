import React, { useState} from 'react';
import './App.css';
import { type } from '@testing-library/user-event/dist/type';
import getCards from './API/PostService';
import { Route, Routes } from 'react-router-dom';
import Shop from './pages/Shop';
import Layout from './pages/Layout';
import Cart from './pages/Cart';
import { ICardItem } from './components/interfaces/ICardItem';

function App() {
  const [sortValue, setSortValue] = useState(0)
  const [chosen, setChosen] = useState<ICardItem[]>([])
  
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout chosen={chosen} setSortValue={setSortValue}/>}>
          <Route index element={<Shop chosen={chosen} setChosen={setChosen} sortValue={sortValue} setSortValue={setSortValue} />}/>
          <Route path='/cart' element={<Cart chosen={chosen} setChosen ={setChosen}/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App;
