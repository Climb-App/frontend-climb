import React, { useState } from 'react';
import Buttons from '../../components/commons/buttons'
import Input from '../../components/commons/input'
import Form from '../../components/commons/form'
import Cards from '../../components/commons/cards'
import Aside from '../../components/commons/aside'
import Links from '../../components/commons/links'
import axios from 'axios'
import { useRouter } from 'next/router'
import { toast } from "react-toastify";


export default function SignUp() {

  const {post, setPost} = useState(null)
  const baseUrlConnect = "http://127.0.0.1:8000/api/v1/register/admin";
  const router=useRouter()

  const usuario = {
    name: '',
    rfc: '',
    email: '',
    address: '',
    password: '',
    role: 1
  }

  function handleInputChange (e){
    usuario[e.target.name] = e.target.value
    console.log(usuario)
  }

  async function register(){
    try{
      const response = await axios.post(baseUrlConnect, usuario);
      if (response)
      toast.success("Datos enviados", {
        theme: "colored",
      });
      console.log(response.data)
      router.push('/login/')
    }catch(error){
      toast.error("Error al enviar los Datos");
      console.error(error);
      if (error.response.status >= 402 && error.response.status <= 500) {
        console.log("Error");
      }
    }
  }

  function cancel(){
    router.push('/')
  }

  return (
    <>
      <div className="body">
        <div className="aside-lef">
          <Cards classStyle="card-color-size">
            <Form action="" method="POST">
              <label className="title label" htmlFor='company' >Company</label>
              <input 
                id='name' 
                placeholder='Company'
                className = "input"
                type="text"
                required
                onChange={handleInputChange}
                name='name'
              />
              <label className="title label" htmlFor='rfc' >RFC</label>
              <input 
                id='rfc' 
                placeholder='XAXX010101000'
                className = "input"
                type="text"
                required
                onChange={handleInputChange}
                name='rfc'
              />
              <label className="title label" htmlFor='user' >Usuario</label>
              <input 
                id='user' 
                placeholder='example@dominio.com'
                className = "input"
                type="email"
                required
                onChange={handleInputChange}
                name='email'
              />
              <label className="title label" htmlFor='address' >Direccion</label>
              <input 
                id='address' 
                placeholder='street'
                className = "input"
                type="text"
                required
                onChange={handleInputChange}
                name='address'
              />
              <label className="title label" htmlFor='pass' >Password</label>
              <input 
                id='pass' 
                placeholder='*********'
                className = "input"
                type="password"
                required
                onChange={handleInputChange}
                name='password'
              />
              <label className="title label" htmlFor='passConfirm' >Confirm Password</label>
              <input 
                id='passConfirm' 
                placeholder='*********'
                className = "input"
                type="password"
                required
                name='passConfirm'
              />
              <div>
                <Buttons classStyle="mt-3" onClick={register}>Enviar</Buttons>
                <Buttons classStyle="mt-3 ms-3" onClick={cancel}>Cancelar</Buttons>
              </div>
            </Form>
          </Cards>
        </div>
        <Aside/>
      </div>
    </>
  )
}