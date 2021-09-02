import React from 'react';
import MainLayoutComponent from '../../components/MainLayout/index'
import Cards from '../../components/commons/cards'
import Title from '../../components/commons/title'
import { getToken } from '../../services/operationsTokens' 
import { useRouter } from 'next/router'


export default function Dashboard() {

  const {usuario, setUsuario} = useState(null)
  


  const token = getToken()
  const router= useRouter()

  if (token){ 
  console.log(token)

    return (
      <>
        <MainLayoutComponent>
          <div className="contents-cards">
            <div>
              <Title classStyle= "headTitle">Productividad</Title>
              <Cards classStyle="size"></Cards>
            </div>
          </div>
        </MainLayoutComponent>
      </>
    )
  }else{
    router.push('/login/')
  }
}