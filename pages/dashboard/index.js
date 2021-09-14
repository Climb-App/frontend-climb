import React, { useState, useEffect } from 'react';
import MainLayoutComponent from '../../components/MainLayout/index'
import { Line, Doughnut, Bar } from 'react-chartjs-2'
import Title from '../../components/commons/title'
import { Row, Col, Table, Card } from "react-bootstrap";
import { getToken } from '../../services/operationsTokens' 
import { useRouter } from 'next/router'


export default function Dashboard() {
  const {usuario, setUsuario} = useState(null)

  const data = {
    labels: ['1', '2', '3', '4', '5', '6'],
    datasets: [{
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        fill: false,
        backgroundColor: 'rgb(54, 162, 235)',
        borderColor: 'rgba(54, 162, 235, 0.2)',
      },
    ],
  };

  const data2 = {
    labels: ['Blue'],
    datasets: [
      {
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          'rgba(54, 162, 235, 0.2)',
        ],
        borderColor: [
          'rgba(54, 162, 235, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const options2 = {
    indexAxis: 'y',
    // Elements options apply to all of the options unless overridden in a dataset
    // In this case, we are setting the border of each horizontal bar to be 2px wide
    elements: {
      bar: {
        borderWidth: 2,
      },
    },
    responsive: true,
    plugins: {
      legend: {
        position: 'right',
      },
      title: {
        display: true,
        text: 'Chart.js Horizontal Bar Chart',
      },
    },
  };

  const data1 = {
    labels: ['Red', 'Blue'],
    datasets: [
      {
        label: '# of Votes',
        data: [12, 19],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)'
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive : true,
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };

  return (
    <>
      <MainLayoutComponent page="Dashboard">
        <div className="contents-cards">
          <Row xs={1} className="g-4">
            <Col md={ 4 }>
              <div style={{ position: "relative", width: "350px", height: "350px" }}>
                <Card className="card-dashboard">
                  <Card.Body>
                    <Card.Title>Productividad</Card.Title>
                    <Line data={data} options={options} />
                  </Card.Body>
                </Card>
              </div>
            </Col>

            <Col md={ 4 }>
              <div style={{ position: "relative", width: "350px", height: "350px" }}>
                <Card className="card-dashboard">
                  <Card.Body>
                    <Card.Title>Tareas</Card.Title>
                    <Bar data={data2} options={options2} />
                  </Card.Body>
                </Card>
              </div>
            </Col>

            <Col md={ 4 }>
              <div style={{ position: "relative", width: "350px", height: "350px" }}>
                <Card className="card-dashboard">
                  <Card.Body>
                    <Card.Title>Motivación</Card.Title>
                    <Doughnut data={data1} />
                  </Card.Body>
                </Card>
              </div>
            </Col>
          </Row>

          <Table className="table-rewards" style={{ borderRadius: '5px' }} responsive>
            <thead>
              <tr>
                <th></th>
                <th>Nombre</th>
                <th>Descripción</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Basic</td>
                <td>Contiene Audifonos inalambricos</td>
              </tr>
            </tbody>
          </Table>
        </div>
      </MainLayoutComponent>
    </>
  )
}