import React from "react";
import useRewards from "../../hooks/useRewards";
import useBadges from "../../hooks/useBadges";
import MainLayoutComponent from "../../components/MainLayout/index";
import Badge from '../../components/RenderDinamic/badge'
import Reward from '../../components/RenderDinamic/reward'
import { Title, Cards } from '../../components/commons'
import Link from 'next/link';
import { Card, Table } from "react-bootstrap";

export default function Recompensas() {
  
  const rewards = useRewards();
  const badges = useBadges();

  return (
    <>
      <MainLayoutComponent page="Recompensas">

      <div className="">
          <Title>
            Recompensas
          </Title>
          <Link href="/recompensas/createReward" className="btn btn-primary">Crear Recompensa</Link> 
          <Card>
            <Card.Body>
    
            <Table striped bordered hover size="sm">
              <thead>
                <tr>
                  <th>Nombre</th>
                  <th>Descripcion</th>
                  <th>Puntos Necesarios</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
    
              {
              rewards? 
              rewards.map(reward=>(
                  <tr key={reward.id}>
                    <td>{reward.name}</td>
                    <td>{reward.description}</td>
                    <td>{reward.points_needed}</td>
                    <td></td>
                  </tr>
                )) : null 
              } 

              </tbody>
            </Table>
            
            </Card.Body>
          </Card>
        </div>


        <div className="">
          <Title>
          Insignias
          </Title>
          <Link href="/recompensas/createBadge">Crear Insignia</Link>
          <Card>
            <Card.Body>
    
            <Table striped bordered hover size="sm">
              <thead>
                <tr>
                  <th>Nombre</th>
                  <th>Descripcion</th>
                  <th>Rango</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
    
              {
              badges? 
              badges.map(badge=>(
                  <tr key={badge.id}>
                    <td>{badge.name}</td>
                    <td>{badge.description}</td>
                    <td>{`${badge.points_needed_min} - ${badge.points_needed_max}`}</td> 
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
