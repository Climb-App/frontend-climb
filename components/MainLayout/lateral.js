import React from 'react';
import Link from 'next/link';


export default function Lateral({role }) {


    return (
      <div className="nav filled">
        <div className="lateral">
            <img className="icon" src="/assets/dashboard.svg" alt="dashboard"/>
            <Link href="/dashboard">
                <a>Dashboard</a>
            </Link>
        </div>
        <div className="lateral">
            <img className="icon" src="/assets/Workspace.svg" alt="workspace"/>
            <Link href="/workspace">
                <a>Workspace</a>
            </Link>
        </div>
        {
            role === "team_user" ? null : (
            <div className="lateral">
                <img className="icon" src="/assets/users.svg" alt="workspace"/>
            <Link href="./usuarios">
                <a>Usuarios</a>
            </Link>
            </div>
            )
        }
        
        <div className="lateral">
            <img className="icon" src="/assets/Rewards.svg" alt="rewards"/>
            <Link href="/recompensas">
                <a>Recompensas</a>
            </Link>
        </div>
        <div className="lateral">
            <img className="icon" src="/assets/Productivity.svg" alt="productivity"/>
            <Link href="/productividad">
                <a>Productividad</a>
            </Link>
        </div>
        <div className="lateral">
            <img className="icon" src="/assets/Motivation.svg" alt="motivation"/>
            <Link href="s/motivacion">
                <a>Motivacion</a>
            </Link>
        </div>
      </div>
    )

  }