import React, { useState, useEffect } from "react";
import Link from "next/link";
import { getToken } from "../../services/operationsTokens";
import { BASE_URL } from "../../services/api";
import { useRouter } from "next/router";
import axios from "axios";
import { Accordion, Card, CustomToggle } from 'react-bootstrap';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';

export default function Lateral({ role }) {
  
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
              <button className="button-workspace">uno</button>
              <button className="button-workspace">uno</button>
              <button className="button-workspace">uno</button>
              <button className="button-workspace">Crear</button>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>

      {role != 1 ? null : (
        <div className="lateral">
          <img className="icon" src="/assets/users.svg" alt="workspace" />
          <Link href="/usuarios">
            <a>Usuarios</a>
          </Link>
        </div>
      )}

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
