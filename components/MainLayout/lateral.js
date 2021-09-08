import React, { useState, useEffect } from "react";
import Link from "next/link";
import { getToken } from "../../services/operationsTokens";
import { BASE_URL } from "../../services/api";
import { useRouter } from "next/router";
import axios from "axios";

export default function Lateral({ role }) {

  // const [post, setPost] = useState(null);
  // const router = useRouter();

  // useEffect(() => {
  //   getWorkspace();
  // }, []);



  return (
    <div className="nav filled">
      <div className="lateral">
        <img className="icon" src="/assets/dashboard.svg" alt="dashboard" />
        <Link href="/dashboard">
          <a>Dashboard</a>
        </Link>
      </div>
      <div className="lateral">
        <Link href="/workspace">
          <a><img className="icon" src="/assets/Workspace.svg" alt="workspace" /><br/>Workspace</a>
        </Link>
      </div>
      {role === "team_user" ? null : (
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
