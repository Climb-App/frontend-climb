import React from 'react';
import MainLayoutComponent from '../../components/MainLayout/index'
import Cards from '../../components/commons/cards'
import Title from '../../components/commons/title'

export default function Dashboard() {

  return (
    <>
      <MainLayoutComponent>
        <div>
          <div>
            <Title classStyle= "headTitle">Productividad</Title>
            <Cards></Cards>
          </div>
          <div>
            <Title classStyle= "headTitle">Tareas</Title>
            <Cards></Cards>
          </div>
          <div>
            <Title classStyle= "headTitle">Motivacion</Title>
            <Cards></Cards>
          </div>
        </div>
        <Cards classStyle="table-rewards">
          <table className="table ">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Nombre</th>
                <th scope="col">Descripcion</th>
                <th scope="col">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
            </tbody>
          </table>
        </Cards>
      </MainLayoutComponent>
    </>
  )
}