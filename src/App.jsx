import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbarr from './Components/Navbarr';
import Home from './Components/Home';
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import FavList from './Components/FavList';

export default function App() {
  return (
<>
<BrowserRouter>
<Navbarr/>
<Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/favlist' element={<FavList/>}/>
</Routes>
</BrowserRouter>
</>
  )}

