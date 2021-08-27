import React from 'react';
import MainLayoutComponent from '../../components/MainLayout/index';
import Cards from '../../components/commons/cards'
import Title from '../../components/commons/title'



export default function Workspace() {
  return (
    <>
      <MainLayoutComponent>

        <Title>Aqui va el contenido de workspace</Title>
        <Cards/>

      </MainLayoutComponent>
    </>
  )
}