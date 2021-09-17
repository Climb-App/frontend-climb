import React, { useState } from "react";
import Navbar from "../components/commons/navbar";
import Link from "next/link";
import Loading from '../components/commons/loading.js'



export default function LandingPage() {

  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false)
  }, 1500)

  if(loading){
    return (
      <Loading/>
    )
  }else{
    return (
      <>
        <Navbar />
        <div className="box">
          <img
            className="image-principal"
            src="/logo.png"
            alt="logo"
            width="250px"
            height="300px"
          />
          <h1 className="title">
            Aumenta la Productividad de tus Equipos de Trabajo
          </h1>
          <Link href="/signup/">
            <a className="btn btn-outline-primary">
              Obtener <br /> Cuenta Empresarial
            </a>
          </Link>
        </div>
      </>
    );
  }
}
