import React from "react";
import MainLayoutComponent from "../../../components/MainLayout";
import { Form, Button } from "react-bootstrap";
import { toast } from "react-toastify";
import axios from "axios";

const baseUrlConnect = "http://127.0.0.1:8000/api/v1/";

const Usuarios = () => {
  //   //   // Conexion
  const [post, setPost] = React.useState(null);
  //   // const router=useRouter()
  async function PostUser(e) {
    const form = e.target;
    e.preventDefault();
    //     //Set Values inputs
    console.log(form.elements);
    const { nameValue, emailValue, Password, Apellido, ConfirmPassword, Role } =
      form.elements;
    console.log(
      nameValue,
      emailValue,
      Password,
      Apellido,
      ConfirmPassword,
      Role
    );
    if (Password !== ConfirmPassword) {
      toast.error("Error en la confirmacion de Password");
      return;
    }
    //Connection
    try {
      const response = await axios.post(baseUrlConnect, {
        name: nameValue.value,
        email: emailValue.value,
        password: Password.value,
        last_name: Apellido.value,
        role: Role.value,
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
                placeholder="Password"
              />
              <label htmlFor="floatingPasswordCustom">Password</label>
            </Form.Floating>
          </div>
          <div className="select justify justify-content-center mt-3 w-100">
            <Form.Select className="mb-3 input" id="Role " size="sm">
              <option selected>Elige el role que tendra el usuario...</option>
              <option>Administrador</option>
              <option>Lider</option>
              <option>Miembro</option>
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
