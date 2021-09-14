import React from "react";
import { Form, Button } from "react-bootstrap";
import MainLayoutComponent from "../../../../components/MainLayout";
import { toast } from "react-toastify";
import axios from "axios";
import { useRouter } from "next/router";
import useWorkspaces from "../../../../hooks/useWorkspaces";
import { BASE_URL } from "../../../../services/api";
import { getToken } from "../../../../services/operationsTokens";

const Url = "api/v1/goals/";

const CrearGoals = () => {
  const cancel = () => {
    router.push("/recompensas");
  };

  const Workspace = useWorkspaces();
  //   console.log("El id del workspace es: + ${Workspace?.[0]?.id}"");
  const [post, setPost] = React.useState(null);

  async function PostGoals(e) {
    const form = e.target;
    e.preventDefault();
    //     //Set Values inputs
    console.log(form.elements);
    const { nameValue, descripcion, Fecha } = form.elements;
    console.log(nameValue, descripcion, Fecha);
    console.log(nameValue.value, descripcion.value, Fecha.value);
    //Connection
    try {
      console.log(`${Workspace?.[0]?.id}`);
      const response = await axios.post(
        `${BASE_URL}${Url}`,
        {
          name: nameValue.value,
          description: descripcion.value,
          deadline: Fecha.value,
          workspace: `${Workspace?.[0]?.id}`,
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
      setPost(response.data);
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
    <MainLayoutComponent>
      <Form action="" method="POST" onSubmit={PostGoals}>
        <h2>Crear Objetivo</h2>
        {/* Inputs */}
        <div className="Formulario d-flex justify-content-between flex-wrap ">
          <div
            className="First Column "
            style={{ width: "40%", display: "contents" }}
          >
            <Form.Floating className="mb-3 input">
              <Form.Control
                id="nameValue"
                type="text"
                placeholder="Crecimiento Kodeado"
              />
              <label htmlFor="floatingInputCustom">Nombre de Objetivo</label>
            </Form.Floating>
            <Form.Group className="mb-3 mt-3 input" controlId="descripcion">
              <Form.Label>Descripcion</Form.Label>
              <Form.Control
                as="textarea"
                rows={5}
                placeholder="Elaboracion de FrontEnd"
              />
            </Form.Group>
          </div>
          <div className="select d-flex flex-column me-4 mt-3 w-100">
            <label
              className="text-center w-80"
              for="start"
              style={{ width: "80%" }}
            >
              <h3>Fecha de Vencimiento: </h3>
            </label>
            <input
              className="input"
              type="date"
              id="Fecha"
              name="trip-start"
              value="2021-07-22"
              min="2021-01-01"
              max="2025-12-31"
            ></input>
          </div>
          <div className="Botones d-flex  justify-content-center mt-3 w-100">
            <Button
              variant="success"
              type="submit"
              style={{ marginRight: "50px" }}
            >
              Crear
            </Button>
            <Button
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
};

export default CrearGoals;
