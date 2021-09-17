import React, { useState, useEffect } from "react";
import useRewards from "../../hooks/useRewards";
import useBadges from "../../hooks/useBadges";
import MainLayoutComponent from "../../components/MainLayout/index";
import Badge from "../../components/RenderDinamic/badge";
import Reward from "../../components/RenderDinamic/reward";
import { Title, Cards } from "../../components/commons";
import Link from "next/link";
import { Card, Table } from "react-bootstrap";
import useUser from "../../hooks/useUser";
import Loading from "../../components/commons/loading";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { BASE_URL } from "../../services/api";
import { getToken } from "../../services/operationsTokens";

export default function Recompensas() {
  const rewards = useRewards();
  const badges = useBadges();
  const [loading, setLoading] = useState(true);
  const User = useUser();

  async function deletedReward(id){
    console.log( "Recompensa eliminado")
    await axios.delete(`${BASE_URL}api/v1/reward/${id}/`, {
      headers: {
        Authorization: getToken(),
      },
    }).then( response => {
      console.log( response.data );
    }).catch(error => {
      console.log( error )
    })
  }

  async function deletedBadge(id){
    console.log( "Recompensa eliminado")
    await axios.delete(`${BASE_URL}api/v1/badges/${id}/`, {
      headers: {
        Authorization: getToken(),
      },
    }).then( response => {
      console.log( response.data );
    }).catch(error => {
      console.log( error )
    })
  }


  const RenderMember = () => (
    <>
      <div className="context-recompensas texto ">
        <div className="header-recompensas">
          <div>
            <Title classStyle="headTitle">Recompensas</Title>
          </div>
        </div>
        <Card>
          <Card.Body>
            <Table className="table-workspace" size="sm">
              <thead>
                <tr>
                  <th>Nombre</th>
                  <th>Descripcion</th>
                  <th>Puntos Necesarios</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                {rewards
                  ? rewards.map((reward) => (
                      <tr key={reward.id}>
                        <td>{reward.name}</td>
                        <td>{reward.description}</td>
                        <td>{reward.points_needed}</td>
                        <td></td>
                      </tr>
                    ))
                  : null}
              </tbody>
            </Table>
          </Card.Body>
        </Card>

        <div className="header-recompensas">
          <div>
            <Title classStyle="headTitle">Insignias</Title>
          </div>
          <div></div>
        </div>
        <Card>
          <Card.Body>
            <Table className="table-workspace" size="sm">
              <thead>
                <tr>
                  <th>Nombre</th>
                  <th>Descripcion</th>
                  <th>Rango</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                {badges
                  ? badges.map((badge) => (
                      <tr key={badge.id}>
                        <td>{badge.name}</td>
                        <td>{badge.description}</td>
                        <td>{`${badge.points_needed_min} - ${badge.points_needed_max}`}</td>
                        <td></td>
                      </tr>
                    ))
                  : null}
              </tbody>
            </Table>
          </Card.Body>
        </Card>
      </div>
    </>
  );



  const RenderAdmin = () => (
    <>
      <div className="context-recompensas texto">
        <div className="header-recompensas">
          <div>
            <Title classStyle="headTitle">Recompensas</Title>
          </div>
          <div>
            <Link href="/recompensas/createReward">
              <a className="btn btn-primary">Crear Recompensa</a>
            </Link>
          </div>
        </div>
        <Card>
          <Card.Body>
            <Table className="table-workspace " size="sm">
              <thead>
                <tr>
                  <th>Nombre</th>
                  <th>Descripcion</th>
                  <th>Puntos Necesarios</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                {rewards
                  ? rewards.map((reward) => (
                      <tr key={reward.id}>
                        <td>{reward.name}</td>
                        <td>{reward.description}</td>
                        <td>{reward.points_needed}</td>
                        <td>
                          <div className="buttonCrud">
                            <Link
                              href={`/recompensas/createReward/?id=${reward.id}`}
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
                              onClick={() => deletedReward(reward.id)}
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

        <div className="header-recompensas">
          <div>
            <Title classStyle="headTitle">Insignias</Title>
          </div>
          <div>
            <Link href="/recompensas/createBadge">
              <a className="btn btn-primary">Crear Insignia</a>
            </Link>
          </div>
        </div>
        <Card>
          <Card.Body>
            <Table className="table-workspace" size="sm">
              <thead>
                <tr>
                  <th>Nombre</th>
                  <th>Descripcion</th>
                  <th>Rango</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                {badges
                  ? badges.map((badge) => (
                      <tr key={badge.id}>
                        <td>{badge.name}</td>
                        <td>{badge.description}</td>
                        <td>{`${badge.points_needed_min} - ${badge.points_needed_max}`}</td>
                        <td>
                          <div className="buttonCrud">
                            <Link
                              href={`/recompensas/editReward/?id=${badge.id}`}
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
                              onClick={() => deletedBadge(badge.id)}
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
      </div>
    </>
  );

  useEffect(() => {
    if (!User | User) {
      setTimeout(() => {
        setLoading(false);
      }, 1500);
    }
  }, [User]);

  if (loading) {
    return <Loading />;
  } else {
    return (
      <>
        <MainLayoutComponent page="Recompensas">
          {/* Ternario que renderiza segun tipo de role*/}
          {User?.[0]?.role === 1 ? (
            <RenderAdmin></RenderAdmin>
          ) : User?.[0]?.role === 3 || User?.[0]?.role === 2 ? (
            <RenderMember></RenderMember>
          ) : null}
        </MainLayoutComponent>
      </>
    );
  }
}
