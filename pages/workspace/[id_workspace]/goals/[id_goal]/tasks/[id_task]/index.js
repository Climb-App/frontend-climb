import React, { useState, useEffect } from 'react';
import { useRouter } from "next/router";
import axios from "axios";
import { toast } from "react-toastify";
import { Card, Form } from "react-bootstrap";
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
    const { id_task }= router.query
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
                <Title classStyle="headTitle">{taskDetail.name}</Title>
              </div>
              <Card>
                <Card.Body>
                  <div className="header-father">
                    <div>
                      <Title classStyle="title-font">Valor en Puntos</Title>
                      <Title classStyle="subtitle-font">{taskDetail.points_value}</Title>
                    </div>
                    <div>
                      <Title classStyle="title-font">Fecha de Vencimiento</Title>
                      <Title classStyle="subtitle-font">{taskDetail.deadline}</Title>
                    </div>
                  </div>
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
                        value={taskDetail.description}
                        disabled
                      />
                    </Form.Group>
                    <Form.Group
                      className="mb-3 input texto"
                      controlId="messageValue"
                    >
                      <Form.Label>Mensaje</Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={3}
                        placeholder="Terminaste la tarea?, enviala a tu lider de equipo para aprobacion, recuerda detallar tus acciones, de eso dependera que obtengas los puntos de la tarea... Exito!"
                      />
                    </Form.Group>
                  </div>
                  <div className="footer-button">
                    <button className="btn btn-primary">Enviar a Revision</button>
                    <button className="btn btn-success">Aprobar Revision</button>
                    <button className="btn btn-danger">Rechazar</button>
                  </div>
                </Card.Body>
              </Card>
            </div>
          </MainLayoutComponent>
        );
    }
}
 
export default TaskDetail;