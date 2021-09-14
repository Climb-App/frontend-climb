import React from 'react';
import MainLayoutComponent from '../../../../../components/MainLayout/index';
import { useRouter } from "next/router";

const GoalDetail = () => {

    const router = useRouter();
    const { id_workspace, id_goal }= router.query
    console.log(id_workspace);
    console.log(id_goal);

    return ( 
        <MainLayoutComponent page="Workspace">

        </MainLayoutComponent>
     );
}
 
export default GoalDetail;