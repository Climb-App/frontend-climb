import React, { useState, useEffect } from "react";
import MainLayoutComponent from "../../../components/MainLayout/index";
import Title from "../../../components/commons/title";
import { useRouter } from "next/router";
import useWorkspacesDetail from "../../../hooks/useWorkspaceDetail";
import { Card, Table, ProgressBar, Button } from "react-bootstrap";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import useUser from "../../../hooks/useUser";
import Loading from "../../../components/commons/loading";
import { BASE_URL } from "../../../services/api";
import { getToken } from "../../../services/operationsTokens";
import axios from "axios";

export default function Workspace() {
  const now = 80;
  const router = useRouter();
  const { id_workspace } = router.query;
  // console.log(id_workspace)
  // const UsersWorkspace = useWorkspaceUser(id_workspace);
  const data = useWorkspacesDetail(id_workspace);

  const [loading, setLoading] = useState(true);
  const User = useUser();
  // console.log(User[0]?.role)

  async function deletedGoal(id){
    console.log( "Objetivo eliminado")
    await axios.delete(`${BASE_URL}api/v1/goals/${id}/`, {
      headers: {
        Authorization: getToken(),
      },
    }).then( response => {
      console.log( response.data );
    }).catch(error => {
      console.log( error )
      router.push(`/workspaces/${id_workspace}`)
    })
  }


  useEffect(() => {
    if (!User | User | data) {
      setTimeout(() => {
        setLoading(false);
      }, 1500);
    }
  }, [User, data]);

  const RenderMember = ({ user }) => {
    const {
      accumulated_points,
      available_points,
      avatar,
      company,
      email,
      first_name,
      id,
      last_name,
      role,
    } = user;
    if (role != 3) {
      return null;
    }
    return (
      <>
        <div className="IntegranteX d-flex flex-column align-items-center">
          {console.log(user)}
          <img
            alt=""
            className=" mb-2 rounded-circle"
            src={avatar != "" ? avatar : "/user.svg"}
            width="60px"
            height="60px"
          />
          <label className="texto">{email}</label>
          <label className="texto">
            {user.role === 1
              ? "Administrador"
              : user.role === 2
              ? "Lider"
              : user.role == 3
              ? "Miembro"
              : null}
          </label>
        </div>
      </>
    );
  };
  const RenderLider = ({ user }) => {
    const {
      accumulated_points,
      available_points,
      avatar,
      company,
      email,
      first_name,
      id,
      last_name,
      role,
    } = user;
    if (role != 2) {
      return null;
    }
    return (
      <>
        <div className="Lider d-flex flex-column align-items-center">
          <img
            className=" mb-2 rounded-circle"
            src={avatar != "" ? avatar : "/user.svg"}
            width="60px"
            height="60px"
          />
          <label className="texto">{email}</label>
          <label className="texto">
            {user.role === 1
              ? "Administrador"
              : user.role === 2
              ? "Lider"
              : user.role == 3
              ? "Miembro"
              : null}
          </label>
        </div>
      </>
    );
  };

  if (loading) {
    return <Loading />;
  } else {
    return (
      <>
        <MainLayoutComponent page="Workspace">
          <div className="context-workspace texto ">
            <Title classStyle="headTitle">{data ? data.name : null}</Title>
            <div className="header-workspace">
              <div>
                <h4 className="headSubtitle">Objetivos</h4>
              </div>
              <div>
                {(User?.[0]?.role === 1) | (User?.[0]?.role === 2) ? (
                  <>
                    <Link href={`/workspace/${id_workspace}/goals/crear`}>
                      <a className="btn btn-primary me-3">Crear Objetivo</a>
                    </Link>
                    <button className="btn btn-info">Detalle</button>
                  </>
                ) : null}
              </div>
            </div>
            <Card bsPrefix="card-workspace">
              <Card.Body>
                <Table className="table-workspace text-center texto " size="sm">
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
                    {data
                      ? data.goals.map((goal) => (
                          <tr key={goal.id}>
                            <td>{goal.name}</td>
                            <td>{goal.description}</td>
                            <td>{goal.deadline}</td>
                            <td>
                              <ProgressBar
                                animated
                                bsPrefix="progress"
                                variant="success"
                                now={now}
                                label={`${now}%`}
                              />
                            </td>
                            <td>
                              <div className="buttonCrud ">
                                <Link
                                  href={`/workspace/${id_workspace}/goals/${goal.id}`}
                                >
                                  <a>
                                    <FontAwesomeIcon
                                      icon={faEye}
                                      style={{
                                        width: "30px",
                                        height: "30px",
                                        color: "green",
                                      }}
                                    />
                                  </a>
                                </Link>
                                <Link
                                  href={`/workspace/${id_workspace}/goals/crear/?id=${goal.id}`}
                                >
                                  <a>
                                    <FontAwesomeIcon
                                      icon={faEdit}
                                      style={{
                                        width: "25px",
                                        height: "25px",
                                        color: "blue",
                                      }}
                                    />
                                  </a>
                                </Link>
                                <button 
                              className="button-delete"
                              onClick={() => deletedGoal(goal.id)}
                              >
                                <a>
                                  <FontAwesomeIcon
                                    icon={faTrash}
                                    style={{
                                      width: "20px",
                                      height: "20px",
                                      color: "red",
                                    }}
                                  />
                                </a>
                              </button>
                              </div>
                            </td>
                          </tr>
                        ))
                      : null}
                  </tbody>
                </Table>
              </Card.Body>
            </Card>

            {/* Carlos */}
            <Card className="card-usersWorkspace" border="light">
              <div className="TituloCard d-flex justify-content-between">
                <label className="headSubtitle text-center">
                  Equipo de Trabajo
                </label>
              </div>
              <Card.Body className="card-bodyUsers">
                <div className="DivPadreLiderEquipo">
                  <div className="SeparadorPadres ">
                    {data?.user.map((user) => (
                      <RenderLider key={user.id} user={user}></RenderLider>
                    ))}
                  </div>
                </div>
                <div className="DivPadreIntegrantesEquipo ms-5">
                  <div className="SeparadorIntegrantes  ">
                    {data?.user.map((user) => (
                      <RenderMember key={user.id} user={user}></RenderMember>
                    ))}
                  </div>
                </div>
              </Card.Body>
            </Card>
            {/* Carlos */}
          </div>
        </MainLayoutComponent>
      </>
    );
  }
}
