import React from "react";
import MainLayoutComponent from "../../../components/MainLayout/index";
import Title from "../../../components/commons/title";
import { useRouter } from "next/router";
import useWorkspacesDetail from "../../../hooks/useWorkspaceDetail";
import { Card, Table } from "react-bootstrap";
import Link from 'next/link';
// import library fortawesome
import '@fortawesome/fontawesome-svg-core/styles.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import your icons
import { faEye, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

export default function Workspace() {
  
  const router = useRouter();
  const { id_workspace }= router.query

  const data = useWorkspacesDetail(id_workspace)
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
              <Link href={`/workspace/${id_workspace}/goals/crear`}>
                <a className="btn btn-primary me-3">Crear Objetivo</a>
              </Link>
              <button className="btn btn-info">Detalle</button>
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
                    <td>Barra de Progreso</td>
                    <td>
                      <div className="buttonCrud">
                      <Link href={`/workspace/${id_workspace}/goals/${goal.id}`}>
                        <a><FontAwesomeIcon icon={faEye} style={{width:'30px', height: '30px', color: 'green'}}/></a>
                      </Link>
                      <Link href={`/workspace/${id_workspace}/goals/crear/?id=${goal.id}`}>
                        <a><FontAwesomeIcon icon={faEdit} style={{width:'25px', height: '25px', color: 'blue'}}/></a>
                      </Link>
                      <Link href="/">
                        <a><FontAwesomeIcon icon={faTrash} style={{width:'20px', height: '20px', color: 'red'}}/></a>
                      </Link>
                      </div>
                    </td>
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
