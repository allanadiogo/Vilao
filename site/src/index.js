import React from 'react';
import ReactDOM from 'react-dom/client';


import { Routes, Route, BrowserRouter} from 'react-router-dom';

import Cadastrar from './pages/cadastrar/index.js'
import Consultar from './pages/consultar/index.js'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/cadastrar' element={<Cadastrar/>}/>
      <Route path='/consultar' element={<Consultar/>}/>
      </Routes>
      </BrowserRouter>
  </React.StrictMode>
);


