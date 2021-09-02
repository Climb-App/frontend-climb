import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { getToken } from '../../services/operationsTokens'
import { readWorkspace } from '../../services/request'
import axios from 'axios';

export default function Lateral({ role }) {

    // const {usuario, setUsuario} = useState(null)
    // const {cargandoUsuario, SetCargandoUsuario} = useState(true)

    // useEffect(() => {

    //     async function cargarUsuario(){
    //         const token = getToken()
    //         if (!token){
    //             setCargandoUsuario(false)
    //             return
    //         }
    //         try{
    //             const {data : usuario } = await axios.get('https://api.climbapp.tech/api/v1/user/', token)
    //             setUsuario(usuario)
    //             setCargandoUsuario(false)
    //         }catch(error){
    //             console.error(error)
    //         }
    //     }
    //     cargarUsuario()
        
    // }, [])
    

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
            <Link href="/usuarios">
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
            <Link href="/motivacion">
                <a>Motivacion</a>
            </Link>
        </div>
      </div>
    )

  }