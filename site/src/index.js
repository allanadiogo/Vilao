import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Cadastrar from './pages/cadastrar';
import Consultar from './pages/consultar';
import Home from './pages/home';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/cadastrar' element={<Cadastrar/>} />
    <Route path='/consultar' element={<Consultar/>} />
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

