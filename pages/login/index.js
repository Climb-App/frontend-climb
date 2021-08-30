import React from 'react';
import Buttons from '../../components/commons/buttons'
import Input from '../../components/commons/input'
import Form from '../../components/commons/form'
import Cards from '../../components/commons/cards'
import Aside from '../../components/commons/aside'
import Links from '../../components/commons/links'
import axios from 'axios'

export default function Login() {

  const baseUrlConnect="https://api.climbapp.tech/api/v1/";

  const client = axios.create({
    baseURL: `${baseUrlConnect}login/` 
  });
  

  // let userValue=document.getElementById("user").value 
  // let PassValue=document.getElementById("pass").value

    // const [post, setPost] = React.useState(null);
  
    // React.useEffect(() => {
    //   async function setPost() {
    //     const response = await client.post(userValue,PassValue);
    //     setPost(response.data);
    //     console.log(response.data)
    //   }
    //   setPost();
    // }, []);

    // function Login() {
    //   alert('Se ha dado clic al botón!');
    // }


  return (
    <>
      <div className="body">
        <div className="aside-lef">
          <Cards classStyle="card-color">
            <Form action="" method="POST">
                <Input id="user" type="email" label="Email" place="Email"/>
                <Input id="pass" type="password" label="Password" place="Password"/>
                <Links/>
                <Buttons classStyle="" onclick={Login()}>LOGIN</Buttons>
            </Form>
          </Cards>
        </div>
        <Aside/>
      </div>
    </>
  )
}