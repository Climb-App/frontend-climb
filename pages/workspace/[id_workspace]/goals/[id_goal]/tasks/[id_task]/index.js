import React, { useState, useEffect } from 'react';
import { useRouter } from "next/router";
import axios from "axios";
import { toast } from "react-toastify";
import { Card, Table } from "react-bootstrap";
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
                  <div className="">
                    <div>
                      <h3>Valor en Puntos</h3>
                      <p>{taskDetail.points_value}</p>
                    </div>
                    <div>
                      <h3>Fecha de Vencimiento</h3>
                      <p>{taskDetail.deadline}</p>
                    </div>
                  </div>
                  <div>
                    <div>
                      <label htmlFor="description">Descripcion</label>
                      <input type="text" id="description" name="description" value={taskDetail.description} disabled />
                    </div>
                    <div>
                    <label htmlFor="message">Mensaje</label>
                      <input type="text" id="message" name="message" value={taskDetail.message}/>
                    </div>
                  </div>
                  <div>
                    <button>Enviar a Revision</button>
                    <button>Aprobar a Revision</button>
                    <button>Rechazar</button>
                  </div>
                </Card.Body>
              </Card>
            </div>
          </MainLayoutComponent>
        );
    }
}
 
export default TaskDetail;