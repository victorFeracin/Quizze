import React from 'react';
import './style.css';
import { loginUser, baseUrl } from "../../services/api";
import * as Yup from 'yup';
import { Form, Link } from 'react-router-dom';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useDispatch } from "react-redux";
import { signIn } from "../../redux/feature/userSlice";
import jwt_decode from 'jwt-decode';

const validationSchema = Yup.object({
  email: Yup.string().email("E-mail não válido").required("Valor é requerido"),
  password: Yup.string().required("Valor é requerido"),
});

function LoginFormComponent() {
    const dispatch = useDispatch();
    // const navigate = useNavigate();
    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        validationSchema,
        onSubmit: async values => {
            const { email, password } = values;
            const accessToken = await loginUser(email, password);
            console.log("TOKEN: ", accessToken);
            const decoded = jwt_decode(accessToken);
            // localStorage.setItem('clientToken', accessToken);
            // localStorage.setItem('clientInfo', JSON.stringify(decoded));
            dispatch(signIn({id: decoded.id, email: decoded.email, name: decoded.name, isLogged: true, accessToken}));
            baseUrl.defaults.headers["Authorization"] = `Bearer ${accessToken}`
            // navigate('/');
            toast("Seja bem-vindo(a)!")
        }
    })

  return (
    <section className='loginContainer'>
      <form className='formContainer' onSubmit={formik.handleSubmit}>
        <h1 className='titleForm'>Login</h1>
        {
          formik.errors.email
          ? <div className="floatContainer">
              <label htmlFor="input1">Email</label>
              <input 
              type="email" 
              className="formInput input1"
              placeholder="Insira um email válido"
              id="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              style={{ border: "1px solid #C2255C" }}
              />
          </div>
          : <div className="floatContainer">
              <label htmlFor="input1">Email</label>
              <input 
              placeholder="email@email.com"
              type="email" 
              className="formInput input1"
              id="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              />
          </div>
        }

        {
          formik.errors.password
          ? <div className="floatContainer">
              <label htmlFor="input2">Senha</label>
              <input 
              type="password"
              className="formInput input2"
              placeholder="Senha obrigatória"
              id="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              style={{ border: "1px solid #C2255C" }}/>
          </div>
          : <div className="floatContainer">
              <label htmlFor="input2">Senha</label>
              <input 
              type="password" 
              className="formInput input2"
              placeholder="**********"
              id="password"
              value={formik.values.password}
              onChange={formik.handleChange}/>
          </div>
          }
          <button className='formButton' type='submit'>Entrar</button>
          <span>Não possui conta? <Link to='/cadastro' className='cadastroLink'>Cadastre-se</Link></span>
      </form>
    </section>
  )
}

export default LoginFormComponent;
