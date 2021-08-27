import React from 'react';
import MainLayoutComponent from '../../components/MainLayout/index'
import Cards from '../../components/commons/cards'
import Title from '../../components/commons/title'

export default function Dashboard() {
  
  return (
    <>
      <MainLayoutComponent>
        <div className="contents-cards">
          <div>
            <Title classStyle= "headTitle">Productividad</Title>
            <Cards classStyle="size"></Cards>
          </div>
          {/* <div>
            <Title classStyle= "headTitle">Tareas</Title>
            <Cards classStyle="size"></Cards>
          </div>
          <div>
            <Title classStyle= "headTitle">Motivacion</Title>
            <Cards classStyle="size"></Cards>
          </div> */}
        </div>
      </MainLayoutComponent>
    </>
  )
}