import React from "react";
import Cards from "../../components/commons/cards";
import Aside from "../../components/commons/aside";
import Links from "../../components/commons/links";
import { toast } from "react-toastify";
import { Form, Button } from "react-bootstrap";
import { useRouter } from "next/router";
import axios from "axios";

export default function RecoveryPass() {
  const router = useRouter();
  console.log(router.query);
  const { token } = router.query;
  const baseUrlConnect = "http://127.0.0.1:8000/api/password_reset/";

  async function ChangePass(e) {
    const form = e.target;
    e.preventDefault();
    //Set Values inputs
    console.log(form.elements);
    const { Password } = form.elements;
    console.log(Password);
    try {
      const response = await axios.post(baseUrlConnect, {
        password: Password.value,
      });
      if (response)
        toast.success("Contraseña cambiada exitosamente", {
          theme: "colored",
        });
      setPost(response.data);
      console.log(response.data);
      //router.push('/')
      //Handling Errors
    } catch (error) {
      toast.error("Error al enviar los datos");
      console.error(error);
      if (error.response.status >= 402 && error.response.status <= 500) {
        console.log("Error");
      }
    }
  }

  const RenderConfirmado = () => (
    <>
      <Form
        className="d-flex flex-column justify-content-center align-items-center flex-wrap mt-4 "
        action=""
        //onSubmit={ChangePass}
        style={{ height: "80%" }}
        method="POST"
      >
        <Form.Floating className="mb-3 input">
          <Form.Control id="Password" type="password" placeholder="Password" />
          <label htmlFor="floatingPasswordCustom">Password nuevo</label>
        </Form.Floating>
        <Button className="w-50" variant="success" type="submit">
          Cambiar contraseña
        </Button>
      </Form>
    </>
  );

  async function PostResetPass(e) {
    const form = e.target;
    e.preventDefault();
    //     //Set Values inputs
    console.log(form.elements);
    const { ConfirmUser, user } = form.elements;
    console.log(ConfirmUser, user);
    if (user.value !== ConfirmUser.value) {
      toast.error("Emails diferentes favor de verificar");
      return;
    } else {
      toast.success("Email confirmado");
      try {
        const response = await axios.post(baseUrlConnect, {
          email: user.value,
        });
        if (response)
          toast.info(
            "Verifica tu correo, en breves te llegara un email de nosotros"
          );
        setPost(response.data);
        console.log(response.data);
        //router.push('/')
        //Handling Errors
      } catch (error) {
        toast.error("Error al enviar los datos");
        console.error(error);
        if (error.response.status >= 402 && error.response.status <= 500) {
          console.log("Error");
        }
      }
    }
  }

  return (
    <>
      <div className="body">
        <div className="aside-lef">
          <Cards classStyle="card-color">
            {token ? (
              <RenderConfirmado />
            ) : (
              <Form
                action=""
                className="d-flex flex-column justify-content-center align-items-center flex-wrap mt-4 "
                method="POST"
                onSubmit={PostResetPass}
              >
                <Form.Floating className="mb-3 input">
                  <Form.Control id="user" type="email" placeholder="Email" />
                  <label htmlFor="floatingInputCustom">Email</label>
                </Form.Floating>
                <Form.Floating className="mb-3 input">
                  <Form.Control
                    id="ConfirmUser"
                    type="email"
                    placeholder="Email"
                  />
                  <label htmlFor="floatingInputCustom">Confirmar Email</label>
                </Form.Floating>

                <Button className="w-50" variant="success" type="submit">
                  Crear
                </Button>
              </Form>
            )}
          </Cards>
        </div>
        <Aside />
      </div>
    </>
  );
}
