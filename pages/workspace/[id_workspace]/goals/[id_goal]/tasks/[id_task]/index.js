import React, { useState, useEffect } from 'react';
import { useRouter } from "next/router";
import axios from "axios";
import { toast } from "react-toastify";
import { Card, Form, FloatingLabel } from "react-bootstrap";
import MainLayoutComponent from '../../../../../../../components/MainLayout/index';
import { BASE_URL } from "../../../../../../../services/api";
import { getToken } from "../../../../../../../services/operationsTokens";
import Loading from '../../../../../../../components/commons/loading';
import Title from '../../../../../../../components/commons/title';
import useUser from "../../../../../../../hooks/useUser";

const TaskDetail = () => {

    const [loading, setLoading] = useState(true);
    const [taskDetail, setTaskDetail] = useState(null);

    const router = useRouter();
    const { id_workspace, id_goal, id_task }= router.query
    const User = useUser();


    useEffect(() => {
        const getTaskDetail = async () => {
          try {
            const response = await axios.get(`${BASE_URL}api/v1/tasks/${id_task}/`, {
              headers: {
                Authorization: getToken(),
              },
            });
            setTaskDetail(response.data);
            // console.log(response.data);
          } catch (error) {
            console.log(error);
            if (error.response.status >= 402 && error.response.status <= 500) {
              toast.error("Error de Autentificacion");
            }
            if (error.response.status == 401) toast.error("Unauthorized");
          }
        };
        getTaskDetail();
      }, [id_task]);

      console.log(taskDetail)


      async function sendCheck(){
        try{
          const respTask = await axios.patch(`${BASE_URL}api/v1/tasks/${id_task}/`, 
          {
            message: messageValue.value,
          },
          {
            headers: {
              Authorization: getToken(),
            },
          }
          );
          console.log(respTask.data);
          router.push(`/workspace/${id_workspace}/goals/${id_goal}/`)

        }catch (error) {
          console.log(error);
        }
      }

      async function approved(){
        try{
          const respTask = await axios.patch(`${BASE_URL}api/v1/tasks/${id_task}/`, 
          {
            message_refused: messageRefusedValue.value,
            status: "Done"
          },
          {
            headers: {
              Authorization: getToken(),
            },
          }
          );
          console.log(respTask.data);

          const respUser = await axios.patch(`${BASE_URL}api/v1/user/member/${taskDetail?.user}`, 
          {
            available_points: taskDetail?.points_value,
            accumulated_points: taskDetail?.points_value
          },
          {
            headers: {
              Authorization: getToken(),
            },
          }
          );
 
          console.log(respUser.data);
          router.push(`/workspace/${id_workspace}/goals/${id_goal}/`)

        }catch (error) {
          console.log(error);
        }
      }

      async function refused(){
        try{
          const respTask = await axios.patch(`${BASE_URL}api/v1/tasks/${id_task}/`, 
          {
            message_refused: messageRefusedValue.value,
            status: "Refused"
          },
          {
            headers: {
              Authorization: getToken(),
            },
          }
          );

          console.log(respTask.data);
          router.push(`/workspace/${id_workspace}/goals/${id_goal}/`)

        }catch (error) {
          console.log(error);
        }
      }


      const RenderMember = () => (
        <>
          <div>
            <Form.Group
              className="mb-3 input texto"
              controlId="descriptionValue"
            >
              <Form.Label>Descripcion de la Tarea</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="..."
                value={taskDetail?.description}
                disabled
              />
            </Form.Group>
            {taskDetail?.message ? (
              <Form.Group
                className="mb-3 input texto"
                controlId="messageValueLoad"
              >
                <Form.Label>Mensaje del Miembro</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="Terminaste la tarea?, enviala a tu lider de equipo para aprobacion, recuerda detallar tus acciones, de eso dependera que obtengas los puntos de la tarea... Exito!"
                  value={taskDetail ? taskDetail?.message : null}
                  disabled
                />
              </Form.Group>
            ) : null}
            {taskDetail?.message_refused ? (
              <Form.Group
                className="mb-3 input texto"
                controlId="messageRefusedValueLoad"
              >
                <Form.Label>Retroalimentacion del Leader</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="Terminaste la tarea?, enviala a tu lider de equipo para aprobacion, recuerda detallar tus acciones, de eso dependera que obtengas los puntos de la tarea... Exito!"
                  value={taskDetail ? taskDetail?.message_refused : null}
                  disabled
                />
              </Form.Group>
            ) : null}

            {taskDetail?.status != "Done" ? (
              <Form.Group className="mb-3 input texto" controlId="messageValue">
                <Form.Label>
                  {taskDetail?.message ? "Actualizar Mensaje" : "Mensaje"}
                </Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="Terminaste la tarea?, enviala a tu lider de equipo para aprobacion, recuerda detallar tus acciones, de eso dependera que obtengas los puntos de la tarea... Exito!"
                />
              </Form.Group>
            ) : null}
          </div>
          {taskDetail?.status != "Done" ? (
            <div className="footer-button">
              <button className="btn btn-primary" onClick={sendCheck}>
                Enviar a Revision
              </button>
            </div>
          ) : null}
        </>
      );

      const RenderLeader = () => (
        <>
          <div>
            <Form.Group
              className="mb-3 input texto"
              controlId="descriptionValue"
            >
              <Form.Label>Descripcion de la Tarea</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="..."
                value={taskDetail?.description}
                disabled
              />
            </Form.Group>
            {taskDetail?.message ? (
              <Form.Group
                className="mb-3 input texto"
                controlId="messageValueLoad"
              >
                <Form.Label>Mensaje del Miembro</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="Terminaste la tarea?, enviala a tu lider de equipo para aprobacion, recuerda detallar tus acciones, de eso dependera que obtengas los puntos de la tarea... Exito!"
                  value={taskDetail ? taskDetail?.message : null}
                  disabled
                />
              </Form.Group>
            ) : null}
            {/* Retroalimentacion del Leadear */}
            {taskDetail?.message_refused ? (
              <Form.Group
                className="mb-3 input texto"
                controlId="messageRefusedValueLoad"
              >
                <Form.Label>Retroalimentacion del Leader</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="Terminaste la tarea?, enviala a tu lider de equipo para aprobacion, recuerda detallar tus acciones, de eso dependera que obtengas los puntos de la tarea... Exito!"
                  value={taskDetail ? taskDetail?.message_refused : null}
                  disabled
                />
              </Form.Group>
            ) : null}
            {taskDetail?.status != "Done" ? (
              <Form.Group
                className="mb-3 input texto"
                controlId="messageRefusedValue"
              >
                <Form.Label>
                  {taskDetail?.message_refused
                    ? "Actualizar Retroalimentacion"
                    : "Retroalimentacion"}
                </Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="Terminaste la tarea?, enviala a tu lider de equipo para aprobacion, recuerda detallar tus acciones, de eso dependera que obtengas los puntos de la tarea... Exito!"
                />
              </Form.Group>
            ) : null}
          </div>

          {taskDetail?.status != "Done" ? (
            <div className="footer-button">
              <button className="btn btn-success" onClick={approved}>
                Aprobar Revision
              </button>
              <button className="btn btn-danger" onClick={refused}>
                Rechazar
              </button>
            </div>
          ) : null}
        </>
      );

      const RenderAdmin = () => (
        <>
          <div>
            <FloatingLabel
              controlId="floatingInput"
              label=""
              className="m-3"
            >
              <div
                className={
                  taskDetail.status == "To Do"
                    ? "green"
                    : taskDetail.status == "Delay"
                    ? "orange"
                    : taskDetail.status == "Refused"
                    ? "red"
                    : taskDetail.status == "Done"
                    ? "blue"
                    : null
                }
              >
                {
                  
                    taskDetail.status == "To Do"
                      ? "En proceso"
                      : taskDetail.status == "Delay"
                      ? "Retrasada"
                      : taskDetail.status == "Refused"
                      ? "Rechazada"
                      : taskDetail.status == "Done"
                      ? "Terminada"
                      : null
                  
                }
              </div>
              {/* <Form.Control type="email" placeholder="name@example.com" /> */}
            </FloatingLabel>
            <Form.Group
              className="mb-3 input texto"
              controlId="descriptionValue"
            >
              <Form.Label>Descripcion de la Tarea</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="..."
                value={taskDetail?.description}
                disabled
              />
            </Form.Group>
            <Form.Group
              className="mb-3 input texto"
              controlId="messageValueLoad"
            >
              <Form.Label>Mensaje del Miembro</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Detalles de la Tarea realizada por el Miembro"
                value={taskDetail ? taskDetail?.message : null}
                disabled
              />
            </Form.Group>
            <Form.Group className="mb-3 input texto" controlId="messageValue">
              <Form.Label>Mensaje del Lider</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Retroalimentacion del Lider de Equipo"
                value={taskDetail ? taskDetail?.message_refused : ""}
                disabled
              />
            </Form.Group>
          </div>
        </>
      );

    useEffect(() => {
        if (!User | User){
          setTimeout(() => {
            setLoading(false)
          }, 1500)
        }
    }, [User])

    console.log(taskDetail)
    
    if(loading){
        return (
          <Loading/>
        )
    }else{

        return (
          <MainLayoutComponent page="Workspace">
            <div className="context-workspace">
              <div>
                <Title classStyle="headTitle">{taskDetail?.name}</Title>
              </div>
              <Card>
                <Card.Body>
                  <div className="header-father">
                    <div>
                      <Title classStyle="title-font">Valor en Puntos</Title>
                      <Title classStyle="subtitle-font">{taskDetail?.points_value}</Title>
                    </div>
                    <div>
                      <Title classStyle="title-font">Fecha de Vencimiento</Title>
                      <Title classStyle="subtitle-font">{taskDetail?.deadline}</Title>
                    </div>
                  </div>
                  {
                    User[0]?.role===2
                    ? <RenderLeader/>
                    : User[0]?.role==3
                      ?<RenderMember/>
                      :<RenderAdmin/>
                  }
                </Card.Body>
              </Card>
            </div>
          </MainLayoutComponent>
        );
    }
}
 
export default TaskDetail;