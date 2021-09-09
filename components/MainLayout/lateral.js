import React, { useState, useEffect } from "react";
import Link from "next/link";
import { getToken } from "../../services/operationsTokens";
import { BASE_URL } from "../../services/api";
import { useRouter } from "next/router";
import axios from "axios";
import { Accordion, Card, CustomToggle } from 'react-bootstrap';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import useWorkspaces from '../../hooks/useWorkspaces'
import useUser from '../../hooks/useUser'

export default function Lateral() {
  
  const UserWorkspaces = useWorkspaces();
  const User = useUser();

  function CustomToggle({ children, eventKey }) {
    const decoratedOnClick = useAccordionButton(eventKey, () =>
      console.log('totally custom!')
    );
  
    return (
      <button
        type="button"
        className="custom"
        onClick={decoratedOnClick}
      >
        {children}
      </button>
    );
  }

  return (
    <div className="nav filled">
      <div className="lateral">
        <img className="icon" src="/assets/dashboard.svg" alt="dashboard" />
        <Link href="/dashboard">
          <a>Dashboard</a>
        </Link>
      </div>
      {/* Boton para los workspace de Usuarios */}
      <Accordion bsPrefix="lateral" defaultActiveKey="0">
        <Card>
          <Card.Header bsPrefix="lateral">
            <CustomToggle eventKey="1"><img className="icon" src="/assets/Workspace.svg" alt="workspace" /><br/>Workspace</CustomToggle>
          </Card.Header>
          <Accordion.Collapse eventKey="1">
            <Card.Body bsPrefix="body-workspace">
            {UserWorkspaces ?
                UserWorkspaces.map(workspaces=>(<div className="button-workspace" key={workspaces.id}><Link href= {`/workspace/?id=${workspaces.id}`} key={workspaces.id} id="{workspaces.id}" className="button-workspace">{workspaces.name}</Link></div> )) :
                null
            }
            {User? User[0].role === 1?(
              <div className="button-workspace">
                <Link href="/workspace/crear" className="button-workspace">Crear</Link>
              </div>)
              : <div className="button-workspace"></div>
            : null
            }
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>

      {User? User[0].role === 1 ?  (
        <div className="lateral">
          <img className="icon" src="/assets/users.svg" alt="workspace" />
          <Link href="/usuarios">
            <a>Usuarios</a>
          </Link>
        </div>
      ): null : null}

      <div className="lateral">
        <img className="icon" src="/assets/Rewards.svg" alt="rewards" />
        <Link href="/recompensas">
          <a>Recompensas</a>
        </Link>
      </div>
      <div className="lateral">
        <img
          className="icon"
          src="/assets/Productivity.svg"
          alt="productivity"
        />
        <Link href="/productividad">
          <a>Productividad</a>
        </Link>
      </div>
      <div className="lateral">
        <img className="icon" src="/assets/Motivation.svg" alt="motivation" />
        <Link href="/motivacion">
          <a>Motivacion</a>
        </Link>
      </div>
    </div>
  );
}