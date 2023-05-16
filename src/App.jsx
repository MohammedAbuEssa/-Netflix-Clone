import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header';
import Home from './Components/Home';
import { Route,Routes } from 'react-router-dom';
import MovieList from './Components/MovieList';

export default function App() {
  return (
<>
<Header/>
<Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/movielist' element={<MovieList/>}/>
  {/* <Route path='' element={}/> */}
</Routes>
</>
  )}

