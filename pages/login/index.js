import React from 'react';
import Buttons from '../../components/commons/buttons'
import Input from '../../components/commons/input'
import Form from '../../components/commons/form'
import Cards from '../../components/commons/cards'
import Aside from '../../components/commons/aside'
import Links from '../../components/commons/links'
import axios from 'axios'
import {useRouter} from 'next/router'
import {setToken,getToken,deleteToken} from '../../services/operationsTokens' 

export default function Login() {

  const baseUrlConnect="https://api.climbapp.tech/api/v1/login/";

  // const client = axios.create({
  //   baseURL: `${baseUrlConnect}login/` 
  // });
  

const SetValues = ()=>{
   let userValue=document.getElementById("user").value 
   let passValue=document.getElementById("pass").value

   return {userValue,passValue}
}


   const [post, setPost] = React.useState(null);
    const router=useRouter()
    async function  Login(e) {
      e.preventDefault()
      //Jalar Valores
     const {userValue,passValue} = SetValues()
      //Conexion con Post
      try{
      const response = await axios.post(baseUrlConnect,{email:userValue,
      password:passValue});
      setPost(response.data);
      // console.log(response.data)
      // console.log(response.data.token)
      setToken(response.data.token)
      router.push('/dashboard')
      }catch(error){
          console.error(error)
          if(error.response.status >= 402 && error.response.status <= 500 )
          {
              console.log("Error")
          }
        if(error.response.status == 401) 
          alert("Valores de Autenficacion email o password incorrectos")
      }  

    }

    
   



  return (
    <>
      <div className="body">
        <div className="aside-lef">
          <Cards classStyle="card-color">
            <Form action="" method="POST" onSubmit={Login}>
                <Input id="user" type="email" label="Email" place="Email"/>
                <Input id="pass" type="password" label="Password" place="Password"/>
                <Links/>
                <Buttons classStyle="" type="submit" >LOGIN</Buttons>
            </Form>
          </Cards>
        </div>
        <Aside/>
      </div>
    </>
  )
}