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
        <div className="context-workspace">
          <Title classStyle="headTitle">{data?data.name:null}</Title>
          <div className="header-workspace">
            <div>
              <h4 className="headSubtitle">Objetivos</h4>
            </div>
            <div>
              <button className="btn btn-primary me-3">Crear Obj</button>
              <button className="btn btn-danger">Eliminar</button>
            </div>
          </div>
            <Card bsPrefix="card-workspace">
            <Card.Body>
    
            <Table className="table-workspace" size="sm">
              <thead>
                <tr>
                  <th>Nombre</th>
                  <th>Descripcion</th>
                  <th>Fecha Limite</th>
                  <th>Progreso</th>
                  <th>Acciones</th>
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
