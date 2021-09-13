import React from "react";
import useRewards from "../../hooks/useRewards";
import useBadges from "../../hooks/useBadges";
import MainLayoutComponent from "../../components/MainLayout/index";
import Badge from '../../components/RenderDinamic/badge'
import Reward from '../../components/RenderDinamic/reward'
import { Title, Cards } from '../../components/commons'
import Link from 'next/link';

export default function Recompensas() {
  
  const rewards = useRewards();
  const badges = useBadges();

  return (
    <>
      <MainLayoutComponent page="Recompensas">
        <div>
          <Title>Recompensas</Title>
          <Link href="/recompensas/createReward">Crear Recompensa</Link> 
        </div>
        <Cards>
          <table>
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Descripcion</th>
                <th>Puntos <br/> Necesarios</th>
              </tr>
            </thead>
            <tbody>
            {rewards ?
                rewards.map(reward=>(<Reward key={reward.id} rewards={reward}/>)) :
                null
            }
            </tbody>
          </table>
        </Cards>
        <div>
          <Title>Insignias</Title>
          <Link href="/recompensas/createBadge">Crear Insignia</Link> 
        </div>
        <Cards>
          <table >
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Descripcion</th>
                <th>Rango</th>
              </tr>
            </thead>
            <tbody>
              {badges ?
                badges.map(badge=>(<Badge key={badge.id} badges={badge}/>)) :
                null
              }
            </tbody>
          </table>
        </Cards>
      </MainLayoutComponent>
    </>
  );
}
