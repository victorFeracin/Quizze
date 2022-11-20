import axios from 'axios';
import { toast } from 'react-toastify'

export const baseUrl = axios.create({
  baseURL: "http://localhost:3000",
})

//Usuario
export const createUser = async (email, password, name) => {
  try {
    const response = await baseUrl.post('/users', { email, password, name, userType: 'u'});
    return response.data;
  } catch (error) {
    toast.warn("Error: "+ error.response.data);
  }
}