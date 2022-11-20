import './style.css';
import React from 'react';
import * as Yup from 'yup';
import { Form, Link } from 'react-router-dom';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { createUser } from '../../services/api';

const validationSchema = Yup.object({
  name: Yup.string().required("Valor é requerido"),
  email: Yup.string().email("E-mail não válido").required("Valor é requerido"),
  password: Yup.string().required("Valor é requerido"),
});

function CadastroFormComponent() {
  // const dispatch = useDispatch();
  // const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
        name: "",
        email: "",
        password: "",
        userType: "u"
    },
    validationSchema,
    onSubmit: async values => {
        try {
          const { name, email, password, userType } = values;
          await createUser(email, password, name, userType);
          toast("Cadastro realizado com sucesso!");
        } catch (error) {
            toast.warn("Erro ao cadastrar cliente: "+ error.response.data);
        }
    }
  })

  return (
    <section className='cadastroContainer'>
      <form className='formContainer' onSubmit={formik.handleSubmit}>
        <h1 className='titleForm'>Cadastro</h1>

        {
          formik.errors.name
          ? <div className="floatContainer">
              <label htmlFor="input1">Nome</label>
              <input 
              type="text" 
              className="formInput input1"
              placeholder="Preencha este campo"
              id="name"
              value={formik.values.name}
              onChange={formik.handleChange}
              style={{ border: "1px solid #C2255C" }}
              />
          </div>
          : <div className="floatContainer">
              <label htmlFor="input1">Nome</label>
              <input 
              placeholder="Ex: João da Silva"
              type="text" 
              className="formInput input1"
              id="name"
              value={formik.values.name}
              onChange={formik.handleChange}
              />
          </div>
        }
        
        {
          formik.errors.email
          ? <div className="floatContainer">
              <label htmlFor="inputinput2">Email</label>
              <input 
              type="email" 
              className="formInput input2"
              placeholder="Insira um email válido"
              id="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              style={{ border: "1px solid #C2255C" }}
              />
          </div>
          : <div className="floatContainer">
              <label htmlFor="input2">Email</label>
              <input 
              placeholder="email@email.com"
              type="email" 
              className="formInput input2"
              id="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              />
          </div>
        }

        {
          formik.errors.password
          ? <div className="floatContainer">
              <label htmlFor="input3">Senha</label>
              <input 
              type="password"
              className="formInput input3"
              placeholder="Senha obrigatória"
              id="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              style={{ border: "1px solid #C2255C" }}/>
          </div>
          : <div className="floatContainer">
              <label htmlFor="input3">Senha</label>
              <input 
              type="password" 
              className="formInput input3"
              placeholder="**********"
              id="password"
              value={formik.values.password}
              onChange={formik.handleChange}/>
          </div>
          }
          <button className='formButton' type='submit'>Cadastrar</button>
          <span>Já possui conta? <Link to='/' className='cadastroLink'>Entre</Link></span>
      </form>
    </section>
  )
}

export default CadastroFormComponent;