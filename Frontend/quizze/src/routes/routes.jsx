import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import RequireAuth from "./RequiredAuth";

import Login from '../pages/login';
import Cadastro from '../pages/cadastro';
import Home from '../pages/home';


const AppRoutes = () => {
  return (
      <BrowserRouter>
                  <Routes>
                      <Route path='/' element={<Login />} />
                      <Route path='/cadastro' element={<Cadastro />} />
                      <Route path='/home' element={<RequireAuth><Home /></RequireAuth>} />
                  </Routes>
      </BrowserRouter>
  )
}

export default AppRoutes;