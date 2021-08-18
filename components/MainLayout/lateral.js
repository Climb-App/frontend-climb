import React from 'react';


export default function Lateral({role }) {


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
        {
            role === "team_user" ? null : (
            <div className="lateral">
                <img className="icon" src="/assets/users.svg" alt="workspace"/>
            <a href="./usuarios/">Usuarios</a>
            </div>
            )
        }
        
        <div className="lateral">
            <img className="icon" src="/assets/Rewards.svg" alt="rewards"/>
            <a href="./recompensas/">Recompensas</a>
        </div>
        <div className="lateral">
            <img className="icon" src="/assets/Productivity.svg" alt="productivity"/>
            <a href="./productividad/">Productividad</a>
        </div>
        <div className="lateral">
            <img className="icon" src="/assets/Motivation.svg" alt="motivation"/>
            <a href="./motivacion/">Motivacion</a>
        </div>
      </div>
    )

  }