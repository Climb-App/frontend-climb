import React from 'react';
import { Navbar, Nav, NavDropdown, Container, Button } from  "react-bootstrap";
import Link from 'next/link';
import { toast } from "react-toastify";
import axios from "axios";
import useUserLanding from '../../hooks/useUserLanding'
import useUserDataLanding from '../../hooks/useUserDataLanding'
// import library fortawesome
import '@fortawesome/fontawesome-svg-core/styles.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import your icons
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';


export default function NavbarTop({classStyle }) {

  const User = useUserLanding()
  // const UserData = useUserDataLanding(User)
  console.log(User)

  return (
    <>
      <Navbar collapseOnSelect bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="/"><img className="me-5" src="/logo.png" alt="logo" width="50px" height="60px"/></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav d-flex justify-content-between">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/">Planes</Nav.Link>
              <Nav.Link href="/">Conocenos</Nav.Link>
              <Nav.Link href="/">Soporte</Nav.Link> 
            </Nav>
            <div className="d-flex">
              <FontAwesomeIcon icon={faUserCircle} style={{width:'40px', height: '40px', color: '#7FB0F6'}}/>
              {/* <img className="me-5" src="https://rciminternet.com/wp-content/uploads/2019/04/usuario.png" alt="logo" width="30px" height="40px" /> */}
              <NavDropdown title="Mi Cuenta" id="basic-nav-dropdown">
                <NavDropdown.Item>
                  <p>Victor</p>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link href="/profile"><a className="">Perfil de Usuario</a></Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link href="/dashboard"><a className="">Entrar en la App</a></Link>
                </NavDropdown.Item>
                <div>
                  <Link href="/login"><a className="btn btn-outline-success me-2" >Login</a></Link>
                  <Link href="/signup"><a className="btn btn-outline-primary me-2" >SigUp</a></Link>
                </div>
                <NavDropdown.Divider/>
                <Button variant="outline-danger">LogOut</Button>
              </NavDropdown>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}