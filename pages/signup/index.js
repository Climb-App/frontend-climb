import React, { useState } from 'react';
// import Buttons from '../../components/commons/buttons'
// import Input from '../../components/commons/input'
// import Form from '../../components/commons/form'
import Cards from '../../components/commons/cards'
import Aside from '../../components/commons/aside'
import Links from '../../components/commons/links'
import axios from 'axios'
import { useRouter } from 'next/router'
import { Form, Button } from "react-bootstrap";
import { toast } from "react-toastify";



export default function SignUp() {

  const {post, setPost} = useState(null)
  const baseUrlConnect = "https://api.climbapp.tech/api/v1/register/admin";
  const router=useRouter()

  async function register(e){
    const form = e.target;
    e.preventDefault();
    //     //Set Values inputs
    // console.log(form.elements);
    const { nameValue, emailValue, password, address, rfc, confirmPassword } = form.elements;

    if (password.value !== confirmPassword.value ) {
      toast.error("Error en la confirmacion de Password");
      return;
    }
    const data = {
      name: nameValue.value,
      email: emailValue.value,
      password: password.value,
      address: address.value,
      rfc: rfc.value,
      role: 1,
    }
    console.log(data)
    //Connection
    try {
      const response = await axios.post(baseUrlConnect, {
        name: nameValue.value,
        email: emailValue.value,
        password: password.value,
        address: address.value,
        rfc: rfc.value,
        role: 1,
      } );
      if (response)
        toast.success("Datos enviados", {
          theme: "colored",
        });
      setPost(response.data);
      console.log(response.data);
      router.push('/login')
      //Handling Errors
    } catch (error) {
      toast.error("Error al enviar los datos");
      console.error(error);
      if (error.response.status >= 402 && error.response.status <= 500) {
        console.log(error);
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
            <Form action="" method="POST" onSubmit={register}>
              <Form.Floating className="m-3 input">
                <Form.Control
                  id="nameValue"
                  type="text"
                  placeholder="Crecimiento Kodeado"
                  required
                />
                <label htmlFor="floatingInputCustom">Company</label>
              </Form.Floating>
              <Form.Floating className="m-3 input">
                <Form.Control
                  id="rfc"
                  type="text"
                  placeholder="XAXX010101000"
                  required
                />
                <label htmlFor="floatingInputCustom">RFC</label>
              </Form.Floating>
              <Form.Floating className="m-3 input">
                <Form.Control
                  id="emailValue"
                  type="email"
                  placeholder="example@dominio.com"
                  required
                />
                <label htmlFor="floatingInputCustom">Email</label>
              </Form.Floating>
              <Form.Floating className="m-3 input">
                <Form.Control
                  id="address"
                  type="text"
                  placeholder="street"
                  required
                />
                <label htmlFor="floatingInputCustom">Direccion</label>
              </Form.Floating>
              <Form.Floating className="m-3 input">
                <Form.Control
                  id="password"
                  type="password"
                  placeholder="********"
                  required
                />
                <label htmlFor="floatingInputCustom">Password</label>
              </Form.Floating>
              <Form.Floating className="m-3 input">
                <Form.Control
                  id="confirmPassword"
                  type="password"
                  placeholder="********"
                  required
                />
                <label htmlFor="floatingInputCustom">Confirmar Password</label>
              </Form.Floating>
              <div>
                <Button
                  variant="success"
                  type="submit"
                  style={{ marginRight: "50px" }}
                  >
                  Crear
                </Button>
                <Button variant="danger" style={{ marginLeft: "50px" }} onClick={cancel}>
                  Cancelar
                </Button>
              </div>
            </Form>
          </Cards>
        </div>
        <Aside/>
      </div>
    </>
  )
}