import React from 'react';
import MainLayoutComponent from '../../../../../../../components/MainLayout/index';
import { useRouter } from "next/router";


const TaskDetail = () => {


    const router = useRouter();
    const { id_workspace, id_goal, id_task }= router.query
    console.log(id_workspace);
    console.log(id_goal);
    console.log(id_task);


    return ( 
        <MainLayoutComponent page="Workspace">

        </MainLayoutComponent>
     );
}
 
export default TaskDetail;