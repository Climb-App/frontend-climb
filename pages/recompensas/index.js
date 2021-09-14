import React, { useState, useEffect } from "react";
import useRewards from "../../hooks/useRewards";
import useBadges from "../../hooks/useBadges";
import MainLayoutComponent from "../../components/MainLayout/index";
import Badge from '../../components/RenderDinamic/badge'
import Reward from '../../components/RenderDinamic/reward'
import { Title, Cards } from '../../components/commons'
import Link from 'next/link';
import { Card, Table } from "react-bootstrap";
import useUser from "../../hooks/useUser";
import Loading from '../../components/commons/loading'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

export default function Recompensas() {
  
  const rewards = useRewards();
  const badges = useBadges();

  const [loading, setLoading] = useState(true);
  const User = useUser();


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
    <>
      <MainLayoutComponent page="Recompensas">
        <div className="context-recompensas">
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
                          <td>
                            <div className="buttonCrud">
                              <Link href={`/recompensas/createReward/?id=${reward.id}`}>
                                <a><FontAwesomeIcon icon={faEdit} style={{width:'25px', height: '25px', color: 'blue'}}/></a>
                              </Link>
                              <Link href="/">
                                <a><FontAwesomeIcon icon={faTrash} style={{width:'20px', height: '20px', color: 'red'}}/></a>
                              </Link>
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
                              <Link href={`/recompensas/editReward/?id=${badge.id}`}>
                                <a><FontAwesomeIcon icon={faEdit} style={{width:'25px', height: '25px', color: 'blue'}}/></a>
                              </Link>
                              <Link href="/">
                                <a><FontAwesomeIcon icon={faTrash} style={{width:'20px', height: '20px', color: 'red'}}/></a>
                              </Link>
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
      </MainLayoutComponent>
    </>
  );
  }
}
