import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Login from './pages/login'
import Cadastro from './pages/Cadastro'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/*<Login />*/}
    <Cadastro />
  </React.StrictMode>
)
