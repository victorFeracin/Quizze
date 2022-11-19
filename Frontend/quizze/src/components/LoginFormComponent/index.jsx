import React from 'react';
import './style.css';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import jwt_decode from 'jwt-decode';

const validationSchema = Yup.object({
  email: Yup.string().email("E-mail não válido").required("Valor é requerido"),
  password: Yup.string().required("Valor é requerido"),
});

function LoginCadastroComponent() {

  return (
    <section className='loginContainer'>
      <h1>Login</h1>

    </section>
  )
}

export default LoginCadastroComponent;
