import React from "react";
import MainLayoutComponent from "../../components/MainLayout/index";
import Title from "../../components/commons/title";
import { useRouter } from "next/router";
import useWorkspacesDetail from "../../hooks/useWorkspaceDetail";
import { Card } from "react-bootstrap";

export default function Workspace() {
  
  const router = useRouter();
  const { id }= router.query

  const data = useWorkspacesDetail(id)
  console.log(data)
  // console.log(data.goals[0].name)

  return (
    <>
      <MainLayoutComponent page="Workspace">
        <Title>
          {data?data.name:null}
        </Title>
        <Card>
          <Card.Body>
            <Card.Title>Goals</Card.Title>
            <Card.Text>
            {data? 
              data.goals.map(goal=>(<h1 key={goal.id}>{goal.name}</h1>)) : null 
            } 
            </Card.Text>
          </Card.Body>
        </Card>
      </MainLayoutComponent>
    </>
  );
}
