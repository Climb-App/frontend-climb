import React, { useState, useEffect } from 'react';
import { useRouter } from "next/router";
import axios from "axios";
import { toast } from "react-toastify";
import MainLayoutComponent from '../../../../../../../components/MainLayout/index';
import { BASE_URL } from "../../../../../../../services/api";
import { getToken } from "../../../../../../../services/operationsTokens";
import Loading from '../../../../../../../components/commons/loading';
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
    
    if(loading){
        return (
          <Loading/>
        )
    }else{

        return ( 
            <MainLayoutComponent page="Workspace">

            </MainLayoutComponent>
        );
    }
}
 
export default TaskDetail;