import React, { useState, useEffect } from 'react';
import MainLayoutComponent from '../../components/MainLayout/index';
import { Line, Doughnut, Bar } from 'react-chartjs-2';
import useUser from "../../hooks/useUser";
import Title from '../../components/commons/title';
import { Table, Card } from "react-bootstrap";
import Loading from '../../components/commons/loading'



export default function Dashboard() {

  const [loading, setLoading] = useState(true);
  const User = useUser();
  console.log(User);

  const data = {
    labels: ['1', '2', '3', '4', '5', '6'],
    datasets: [{
        label: '2021',
        data: [12, 19, 3, 5, 2, 3],
        fill: false,
        backgroundColor: 'rgb(54, 162, 235)',
        borderColor: 'rgba(54, 162, 235, 0.2)',
      },
    ],
  };

  const data2 = {
    labels: ['Terminadas'],
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
        text: 'Total',
      },
    },
  };

  const data1 = {
    labels: ['Molesto', 'Alegre'],
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


  useEffect(() => {

    if (User){
      setTimeout(() => {
        setLoading(false)
      }, 1000)
    }

  }, [User])

  if(loading){
    return (
      <Loading/>
    )
  }else{

  return (
    <>
      <MainLayoutComponent page="Dashboard">
        <div className="divPadre">
          <div className="cards-container">
           <Card className="card-dashboard">
             <Card.Body>
               <Title>Productividad</Title>
               <Line data={data} options={options} />
             </Card.Body>
           </Card>
            <Card className="card-dashboard ms-2 me-2">
             <Card.Body>
               <Title>Tareas</Title>
               <Bar data={data2} options={options2} />
             </Card.Body>
           </Card>
           <Card className="card-dashboard">
             <Card.Body>
               <Title>Motivación</Title>
               <Doughnut data={data1} />
             </Card.Body>
           </Card>
          </div>

          <div className="mt-5">
            <Table className="table-rewards" style={{ borderRadius: '10px' }} responsive>
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
        </div>
      </MainLayoutComponent>
    </>
  )
  }
}