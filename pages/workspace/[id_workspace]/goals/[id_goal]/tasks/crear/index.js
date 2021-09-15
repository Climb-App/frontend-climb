import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import MainLayoutComponent from "../../../../../../../components/MainLayout";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import UserMembers from "../../../../../../../hooks/useUsersMembers";
import { toast } from "react-toastify";
import axios from "axios";
import { useRouter } from "next/router";
import { BASE_URL } from "../../../../../../../services/api";
import { getToken } from "../../../../../../../services/operationsTokens";

const Url = "api/v1/tasks/";
const animatedComponents = makeAnimated();

export default function CrearTasks() {
  const router = useRouter();
  const { id_goal } = router.query;
  const Users = UserMembers();
  const [UsuariosTarea, setUsuariosTarea] = useState(null);

  const cancel = () => {
    router.push("/tasks");
  };
  //Conexion Task Post
  async function PostGoals(e) {
    const form = e.target;
    e.preventDefault();
    //     //Set Values inputs
    console.log(form.elements);
    const {
      nameValue,
      descriptionValue,
      Fecha,
      PuntosAsignados,
      EstadoTarea,
      IntegrantesTarea,
    } = form.elements;
    console.log(
      nameValue,
      descriptionValue,
      Fecha,
      PuntosAsignados,
      EstadoTarea
    );
    console.log(
      nameValue.value,
      descriptionValue.value,
      Fecha.value,
      PuntosAsignados.value,
      EstadoTarea.value,
      id_goal,
      UsuariosTarea
    );
    //Connection
    try {
      const response = await axios.post(
        `${BASE_URL}${Url}`,
        {
          name: nameValue.value,
          description: descriptionValue.value,
          deadline: Fecha.value,
          points_value: PuntosAsignados.value,
          status: EstadoTarea.value,
          goal: id_goal,
          user: UsuariosTarea,
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
      <Form action="" method="POST" onSubmit={PostGoals}>
        <h2>Nueva Tarea</h2>
        {/* Inputs */}
        <div className="Formulario mt-4 d-flex justify-content-between flex-wrap ">
          <div className="First Column ">
            <Form.Floating className="mb-3 input">
              <Form.Control
                id="nameValue"
                type="text"
                placeholder="Crecimiento Kodeado"
              />
              <label htmlFor="floatingInputCustom">Nombre de Tarea</label>
            </Form.Floating>
            <Form.Group className="mb-3 input" controlId="descriptionValue">
              <Form.Label>Descripcion de Tarea</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Realizar peticion get a la base de datos... Usando Axios"
              />
            </Form.Group>
            <div className="select justify justify-content-center mt-3 w-100">
              <label htmlFor="">
                <p className="text-center">Estado de progreso </p>
              </label>
              <Form.Select
                defaultValue={0}
                className="mb-3 input"
                id="EstadoTarea"
                size="sm"
              >
                <option>Estado de tarea...</option>
                <option value="To Do">To Do</option>
                <option value="Done">Done</option>
                <option value="Delay">Delay</option>
                <option value="Refused">Refused</option>
              </Form.Select>
              <div className="select d-flex flex-column me-4 mt-3 w-100">
                <label
                  className="text-center w-80"
                  htmlFor="start"
                  style={{ width: "40%" }}
                >
                  <p>Fecha de Vencimiento: </p>
                </label>
                <input
                  className="input"
                  type="date"
                  id="Fecha"
                  name="trip-start"
                  min="2021-01-01"
                  max="2025-12-31"
                ></input>
              </div>
            </div>
          </div>
          <div className="Second Column ">
            <Form.Floating className="mb-3 input">
              <Form.Control
                id="PuntosAsignados"
                type="text"
                placeholder="1000"
              />
              <label htmlFor="floatingInputCustom">Puntos asignados</label>
            </Form.Floating>

            {/* Select de los Usuarios */}
            <label className="mb-2">Integrantes de esta Tarea</label>
            <Select
              instanceId="Usuarios"
              onChange={(e) => setUsuariosTarea(e.value)}
              className="input "
              closeMenuOnSelect={false}
              components={animatedComponents}
              options={Users?.map((User) => ({
                value: User?.id,
                label: User?.email,
              }))}
            />
          </div>

          <div className="Botones d-flex  justify-content-end mt-3 w-100">
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
}
