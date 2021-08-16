import React from 'react';


export default function Lateral() {
    return (
      <div className="nav filled">
        <div className="lateral">
            <img className="icon" src="/assets/dashboard.svg" alt="dashboard"/>
            <a href="./" >Dashboard</a>
        </div>
        <div className="lateral">
            <img className="icon" src="/assets/Workspace.svg" alt="workspace"/>
            <a href="./workspace/">Workspace</a>
        </div>
        <div className="lateral">
            <img className="icon" src="/assets/Rewards.svg" alt="rewards"/>
            <a href="./rewards/">Recompensas</a>
        </div>
        <div className="lateral">
            <img className="icon" src="/assets/Productivity.svg" alt="productivity"/>
            <a href="./productivity/">Productividad</a>
        </div>
        <div className="lateral">
            <img className="icon" src="/assets/Motivation.svg" alt="motivation"/>
            <a href="./motivation/">Motivacion</a>
        </div>
      </div>
    )
  }