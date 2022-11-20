import axios from 'axios';
import { toast } from 'react-toastify'

export const baseUrl = axios.create({
  baseURL: "http://localhost:3000",
})

//Login Usuario
export const loginUser = async (email, password) => {
  try{
    const response = await baseUrl.post("/login", { email, password })
    return response.data;
  } catch(error) {
    toast.warn("Erro: email ou senha inválidos")
  }
}

//Usuario
export const createUser = async (email, password, name, userType) => {
  try {
    const response = await baseUrl.post('/usuario', { email, password, name, userType });
    return response.data;
  } catch (error) {
    toast.warn("Error: "+ error.response.data);
  }
}