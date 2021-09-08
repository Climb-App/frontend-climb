import React from "react";
import Title from "../components/commons/title";
import Navbar from "../components/commons/navbar";
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function LandingPage() {
  // const alert = () =>{
  //   return Swal.fire({
  //     title: 'Error!',
  //     text: 'Soy un error de inicio de sesion',
  //     icon: 'error',
  //     confirmButtonText: 'Cerrar'
  //   })
  // }

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
