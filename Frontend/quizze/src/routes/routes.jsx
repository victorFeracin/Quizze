import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Login from '../pages/login';
import Cadastro from '../pages/cadastro';


const AppRoutes = () => {
  return (
      <BrowserRouter>
                  <Routes>
                      <Route path='/' element={<Login />} />
                      <Route path='/cadastro' element={<Cadastro />} />
                  </Routes>
      </BrowserRouter>
  )
}

export default AppRoutes;