import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import { toast } from "react-toastify";
<<<<<<< HEAD
import { Card, Table, ProgressBar } from "react-bootstrap";
=======
import { Card, Table, Button } from "react-bootstrap";
>>>>>>> Featured-UsuariosTabla
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import MainLayoutComponent from "../../../../../components/MainLayout/index";
import { BASE_URL } from "../../../../../services/api";
import { getToken } from "../../../../../services/operationsTokens";
import Loading from "../../../../../components/commons/loading";
import Title from "../../../../../components/commons/title";
import useUser from "../../../../../hooks/useUser";

const GoalDetail = () => {

  const now = 90;
  const [loading, setLoading] = useState(true);
  const [goalDetail, setGoalDetail] = useState(null);

  const router = useRouter();
  const { id_workspace, id_goal } = router.query;
  const User = useUser();
  // console.log(goalDetail[0].tasks_goal[0].name)
  // console.log(goalDetail);

  useEffect(() => {
    const getGoalDetail = async () => {
      try {
        const response = await axios.get(
          `${BASE_URL}api/v1/goals/${id_goal}/`,
          {
            headers: {
              Authorization: getToken(),
            },
          }
        );
        setGoalDetail(response.data);
        // console.log(response.data);
      } catch (error) {
        console.log(error);
        if (error.response.status >= 402 && error.response.status <= 500) {
          toast.error("Error de Autentificacion");
        }
        if (error.response.status == 401) toast.error("Unauthorized");
      }
    };
    getGoalDetail();
  }, [id_goal]);

  console.log(goalDetail);

  useEffect(() => {
    if (goalDetail!=null) {
      setTimeout(() => {
        setLoading(false);
      }, 1500);
    }
  }, [goalDetail]);

  if (loading) {
    return <Loading />;
  } else {
    return (
      <MainLayoutComponent page="Workspace">
        <div className="ContextGoals">
          <div>
            <Title classStyle="headTitle">
              {goalDetail ? goalDetail[0]?.name : null}
            </Title>
          </div>
          <div className="ContextGoals">
            <div>
              <div>
                <ProgressBar
                  animated
                  bsPrefix="progress"
                  variant="success"
                  now={now}
                  label={`${now}%`}
                />
              </div>
              <Card className="card-headerGoal">
                <Card.Body>
                  <Table className="table-goals" size="sm">
                    <thead>
                      <tr>
                        <th>Descripcion</th>
                      </tr>
                    </thead>
                    <tbody>
                      {goalDetail
                        ? goalDetail.map((goal) => (
                            <tr key={goal.id}>
                              <td>{goal.description}</td>
                            </tr>
                          ))
                        : null}
                    </tbody>
                  </Table>
                </Card.Body>
              </Card>

              <div className="header-task">
                <div>
                  <h3 className="headSubtitle">Tareas</h3>
                </div>
                <div>
                  <Link
                    href={`/workspace/${id_workspace}/goals/${id_goal}/tasks/crear`}
                  >
                    <a className="btn btn-primary">Crear Tarea</a>
                  </Link>
                </div>
              </div>
              <Card className="card-goal">
                <Card.Body>
                  <Table className="table-goals" size="sm">
                    <thead>
                      <tr>
                        <th>Nombre</th>
                        <th>Descripcion</th>
                        <th>Fecha Limite</th>
                        <th>Miembro Asignado</th>
                        <th>Puntos</th>
                        <th>Estado</th>
                        <th>Acciones</th>
                      </tr>
                    </thead>
                    <tbody>
                      {goalDetail
                        ? goalDetail.map((goal) =>
                            goal.tasks_goal.map((task) => (
                              <tr key={task.id}>
                                <td>{task.name}</td>
                                <td>{task.description}</td>
                                <td>{task.deadline}</td>
                                <td>{task.user}</td>
                                <td>{task.points_value}</td>
                                <td>
                                  <div
                                    className={
                                      task.status == "To Do"
                                        ? "green"
                                        : task.status == "Delay"
                                        ? "orange"
                                        : task.status == "Refused"
                                        ? "red"
                                        : task.status == "Done"
                                        ? "blue"
                                        : null
                                    }
                                  >
                                    {
                                        task.status == "To Do"
                                        ? "En Proceso"
                                        : task.status == "Delay"
                                        ? "Retrasada"
                                        : task.status == "Refused"
                                        ? "Rechazada"
                                        : task.status == "Done"
                                        ? "Terminada"
                                        : null
                                    }
                                  </div>
                                </td>
                                <td>
                                  <div className="buttonCrud">
                                    <Link
                                      href={`/workspace/${id_workspace}/goals/${goal.id}/tasks/${task.id}`}
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
                                    <Link href="/">
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
                                    </Link>
                                  </div>
                                </td>
                              </tr>
                            ))
                          )
                        : null}
                    </tbody>
                  </Table>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      </MainLayoutComponent>
    );
  }
};

export default GoalDetail;
