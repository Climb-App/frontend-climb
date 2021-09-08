import React, {useState, useEffect} from "react";
import MainLayoutComponent from "../../components/MainLayout/index";
import Badge from '../../components/RenderDinamic/badge'
import Reward from '../../components/RenderDinamic/reward'
import { Title, Cards, Buttons } from '../../components/commons'
import axios from "axios";
import Link from 'next/link';


export default function Recompensas() {
  const baseUrlConnect = "http://127.0.0.1:8000/api/v1/";

  const [reward, setReward] = useState(null);
  const [badge, setBadge] = useState([]);
  
  useEffect(()=>{
    const badge = axios.create({
        baseURL: `${baseUrlConnect}badges_test/`,
    });
    const reward = axios.create({
      baseURL: `${baseUrlConnect}rewards_test/`,
    });

    async function getData (){
        try{
            const response = await badge.get();
            const { data } = await reward.get();
            setBadge( response.data );
            setReward( data );
        }catch(error){
            console.error(error)
        }
    }
    getData()
  }, [])

  console.log(badge)

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
            {reward ?
                reward.map(reward=>(<Reward key={reward.id} rewards={reward}/>)) :
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
              {badge ?
                badge.map(badge=>(<Badge key={badge.id} badges={badge}/>)) :
                null
              }
            </tbody>
          </table>
        </Cards>
      </MainLayoutComponent>
    </>
  );
}
