import React from 'react';


export default function Lateral() {
    return (
      <div className="nav flex-column filled">
        <div className="lateral">
            <img className="icon" src="/assets/dashboard.svg" alt="dashboard"/>
            <a>Dashboard</a>
        </div>
        <div className="lateral">
            <img className="icon" src="/assets/Workspace.svg" alt="workspace"/>
            <a>Workspace</a>
        </div>
        <div className="lateral">
            <img className="icon" src="/assets/Rewards.svg" alt="rewards"/>
            <a>Recompensas</a>
        </div>
        <div className="lateral">
            <img className="icon" src="/assets/Productivity.svg" alt="productivity"/>
            <a>Productividad</a>
        </div>
        <div className="lateral">
            <img className="icon" src="/assets/Motivation.svg" alt="motivation"/>
            <a>Motivacion</a>
        </div>
      </div>
    )
  }