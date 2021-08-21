import React from 'react';
import Title from '../components/commons/title'
import Navbar from '../components/commons/navbar'

export default function LandingPage() {

  return (
    <>
      <Navbar/>
        <div className="box">
          <img className="image-principal" src="/logo.png" alt="logo" width="250px" height="300px"/>
          <h1 className="title">Aumenta la Productividad de tus Equipos de Trabajo</h1>
          <a href="./login/" className="btn btn-outline-primary" >Obtener <br/> Cuenta Empresarial</a>    
      </div>
    </>
  )
}