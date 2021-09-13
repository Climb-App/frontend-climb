import React from "react";
import MainLayoutComponent from "../../components/MainLayout/index";
import Title from "../../components/commons/title";
import { useRouter } from "next/router";
import useWorkspacesDetail from "../../hooks/useWorkspaceDetail";
import { Card, Table } from "react-bootstrap";

export default function Workspace() {
  
  const router = useRouter();
  const { id }= router.query

  const data = useWorkspacesDetail(id)
  console.log(data)
  // console.log(data.goals[0].name)

  return (
    <>
      <MainLayoutComponent page="Workspace">
        <div className="">
          <Title>
            Objetivos {data?data.name:null}
          </Title>
          <Card>
            <Card.Body>
    
            <Table striped bordered hover size="sm">
              <thead>
                <tr>
                  <th>Nombre</th>
                  <th>Descripcion</th>
                  <th>Fecha Limite</th>
                  <th>Progreso</th>
                </tr>
              </thead>
              <tbody>
    
              {
              data? 
                data.goals.map(goal=>(
                  <tr key={goal.id}>
                    <td>{goal.name}</td>
                    <td>{goal.description}</td>
                    <td>{goal.deadline}</td>
                    <td></td>
                  </tr>
                )) : null 
              } 

              </tbody>
            </Table>
            
            </Card.Body>
          </Card>
        </div>
      </MainLayoutComponent>
    </>
  );
}
