import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import MainLayoutComponent from "../../../components/MainLayout";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import { toast } from "react-toastify";
import axios from "axios";
import { useRouter } from "next/router";
import { BASE_URL } from "../../../services/api";
import { getToken } from "../../../services/operationsTokens";
import useUser from "../../../hooks/useUser";
import UseMembers from "../../../hooks/useMembers";

const Url = "api/v1/workspaces/";
const animatedComponents = makeAnimated();

export default function CreateWorkspace() {
  const router = useRouter();
  const Users = UseMembers();
  const UserAdmin = useUser();
  const [UsuariosMember, setUsuariosMember] = useState(null);

  const cancel = () => {
    router.push("/dashboard");
  };
  //Conexion Task Post
  async function PostWorkspace(e) {
    const form = e.target;
    e.preventDefault();
    //     //Set Values inputs
    console.log(form.elements);
    const { nameValue, descriptionValue } = form.elements;
    console.log(nameValue, descriptionValue);
    console.log(nameValue.value, descriptionValue.value);
    //Connection
    const user = [
      ...UsuariosMember?.map((usuario) => usuario.value),
      UserAdmin[0].id,
    ];
    try {
      const response = await axios.post(
        `${BASE_URL}${Url}`,
        {
          name: nameValue.value,
          description: descriptionValue.value,
          user,
        },
        {
          headers: {
            Authorization: getToken(),
          },
        }
      );
      if (response)
        toast.success("Datos enviados", {
          theme: "colored",
        });
      router.push("/dashboard/");
      console.log(response.data);
      //   router.push("/dashboard");
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
    <MainLayoutComponent page="Workspace">
      <Form action="" method="POST" onSubmit={PostWorkspace}>
        <h2 className="headTitle">Crear Workspace</h2>
        {/* Inputs */}
        <div className="Formulario mt-4 d-flex justify-content-between flex-wrap ">
          <div className="First Column ">
            <Form.Floating className="mb-3 input texto">
              <Form.Control
                id="nameValue"
                type="text"
                placeholder="Crecimiento Kodeado"
              />
              <label htmlFor="floatingInputCustom">Nombre de Workspace</label>
            </Form.Floating>
            <Form.Group
              className="mb-3 input texto"
              controlId="descriptionValue"
            >
              <Form.Label>Descripcion de Workspace</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Realizar peticion get a la base de datos... Usando Axios"
              />
            </Form.Group>
            {/* Select de los Usuarios */}
            <label className="mb-2 texto">Usuarios asignados</label>
            <Select
              instanceId="Usuarios"
              onChange={(e) => setUsuariosMember(e)}
              className="input texto "
              isMulti
              closeMenuOnSelect={false}
              components={animatedComponents}
              options={Users?.map((User) => ({
                value: User?.id,
                label: User?.email,
              }))}
            />
          </div>

          <div className="Botones d-flex  justify-content-end mt-5 w-100">
            <Button
              className="texto"
              variant="success"
              type="submit"
              style={{ marginRight: "50px" }}
            >
              Crear
            </Button>
            <Button
              className="texto"
              variant="danger"
              style={{ marginLeft: "50px" }}
              onClick={cancel}
            >
              Cancelar
            </Button>
          </div>
        </div>
      </Form>
    </MainLayoutComponent>
  );
}
