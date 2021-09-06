import React from "react";
import MainLayoutComponent from "../../../components/MainLayout";
import { Form, Button } from "react-bootstrap";
import { toast } from "react-toastify";
import axios from "axios";

const baseUrlConnect = "https://api.climbapp.tech/api/v1/register/member";

const Usuarios = () => {
  //   //   // Conexion
  const [post, setPost] = React.useState(null);
  //   // const router=useRouter()
  async function PostUser(e) {
    const form = e.target;
    e.preventDefault();
    //     //Set Values inputs
    console.log(form.elements);
    const {
      nameValue,
      LastNameValue,
      emailValue,
      Password,
      ConfirmPassword,
      RoleEmpleado,
    } = form.elements;
    console.log(
      nameValue,
      LastNameValue,
      emailValue,
      Password,
      ConfirmPassword,
      RoleEmpleado
    );
    console.log(
      nameValue.value,
      LastNameValue.value,
      emailValue.value,
      Password.value,
      ConfirmPassword.value,
      RoleEmpleado.value
    );
    if (Password.value !== ConfirmPassword.value) {
      toast.error("Error en la confirmacion de Password");
      return;
    }
    //Connection
    try {
      const response = await axios.post(baseUrlConnect, {
        name: nameValue.value,
        last_name: LastNameValue.value,
        email: emailValue.value,
        password: Password.value,
        company: 1,
        role: RoleEmpleado.value,
      });
      if (response)
        toast.success("Datos enviados", {
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

  return (
    <MainLayoutComponent>
      <Form action="" method="POST" onSubmit={PostUser}>
        <h2>Nuevo Usuario</h2>
        {/* Inputs */}
        <div className="Formulario d-flex justify-content-between flex-wrap mt-4 ">
          <div className="First Column " style={{ width: "40%" }}>
            <Form.Floating className="mb-3 input">
              <Form.Control id="nameValue" type="text" placeholder="Pablito" />
              <label htmlFor="floatingInputCustom">Nombre</label>
            </Form.Floating>
            <Form.Floating className="mb-3 input">
              <Form.Control
                id="emailValue"
                type="email"
                placeholder="nombre@ejemplo.com"
              />
              <label htmlFor="floatingInputCustom">Email address</label>
            </Form.Floating>
            <Form.Floating className="mb-3 input">
              <Form.Control
                id="Password"
                type="password"
                placeholder="Password"
              />
              <label htmlFor="floatingPasswordCustom">Password</label>
            </Form.Floating>
          </div>
          <div className="Second Column " style={{ width: "40%" }}>
            <Form.Floating className="mb-3 input">
              <Form.Control
                id="LastNameValue"
                type="text"
                placeholder="Lopez"
              />
              <label htmlFor="floatingInputCustom">Apellido</label>
            </Form.Floating>

            <Form.Floating className="mb-3 input">
              <Form.Control
                id="ConfirmPassword"
                type="password"
                placeholder="****"
              />
              <label htmlFor="floatingPasswordCustom"> Confirm Password</label>
            </Form.Floating>
          </div>
          <div className="select justify justify-content-center mt-3 w-100">
            <Form.Select className="mb-3 input" id="RoleEmpleado" size="sm">
              <option selected>Elige el role que tendra el usuario...</option>
              <option value="2">Lider</option>
              <option value="3">Miembro</option>
            </Form.Select>
          </div>
          <div className="Botones d-flex  justify-content-center mr-4 mt-3 w-100">
            <Button
              variant="success"
              type="submit"
              style={{ marginRight: "50px" }}
            >
              Crear
            </Button>
            <Button
              className=""
              variant="danger"
              style={{ marginLeft: "50px" }}
            >
              Cancelar
            </Button>
          </div>
        </div>
      </Form>
    </MainLayoutComponent>
  );
};

export default Usuarios;
