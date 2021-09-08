import axios from 'axios'
import BASE_URL from '../services/api'
import { getToken } from '../services/operationsTokens'

const getWorkspace = async () =>{
  try{
    const response = await axios.get(`${BASE_URL}api/v1/workspaces/`, {
      headers: {
        Authorization:
        getToken()
      }
    })
    return response.data
  }catch (error) {
    console.log(error)
    setError(error)
    if (error.response.status >= 402 && error.response.status <= 500) {
      toast.error("Error de Autentificacion");
      console.log("Error");
      router.push('/')
    }
    if (error.response.status == 401)
      toast.error("Unauthorized");
  }
}

export {
    getWorkspace,
}