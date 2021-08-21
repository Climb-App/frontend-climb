import React from 'react';


export default function Navbar({classStyle }) {

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <img className="me-5" src="/logo.png" alt="logo" width="50px" height="60px"/>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Planes</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Conocenos</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Soporte</a>
              </li>
            </ul>
            <a href="./login/" className="btn btn-outline-success me-2" >Login</a>
            <a href="./login/" className="btn btn-outline-primary" >Cuenta Empresarial</a>
          </div>
        </div>
      </nav>
    </>
  )
}