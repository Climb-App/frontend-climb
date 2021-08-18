import React from 'react';
import Buttons from '../../components/commons/buttons'

export default function Login() {

  return (
    <>
      <div className="body">
        <div className="box-card">
            <form action="">
                <label htmlFor="user" >Email</label>
                <input type="email" id="user"/>
                <label htmlFor="pass" >Password</label>
                <input type="password" id="pass"/>
                <a href="./recovery-pass/">Recuperar Contrasena</a>
                <a href="./signup/">Obtener Cuenta Empresarial Gratis</a>
                <Buttons>Enviar</Buttons>
            </form>
        </div>
        <div className="aside">
          <img src="/logo.png" alt="logo" width="120px" height="150px"/>
        </div>
      </div>
    </>
  )
}