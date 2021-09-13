import React, { useState } from 'react';
import MainLayoutComponent from '../../components/MainLayout/index'
import Title from '../../components/commons/title'
import { Card } from "react-bootstrap";
import { getToken } from '../../services/operationsTokens' 
import { useRouter } from 'next/router'


export default function Dashboard() {

  const {usuario, setUsuario} = useState(null)
  

    return (
      <>
        <MainLayoutComponent page="Dashboard">
          <div className="contents-cards">
            <div>
              <Title classStyle= "headTitle">Productividad</Title>
              <Card>
                <Card.Body>This is some text within a card body.</Card.Body>
              </Card>
            </div>
          </div>
        </MainLayoutComponent>
      </>
    )
}