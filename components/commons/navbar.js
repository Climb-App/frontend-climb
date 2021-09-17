import React from 'react';
import { Navbar, Nav, NavDropdown, Container, Button } from  "react-bootstrap";
import Link from 'next/link';
import useUserLanding from '../../hooks/useUserLanding'
import useUserDataLanding from '../../hooks/useUserDataLanding'
import Title from '../../components/commons/title'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog, faSignInAlt} from "@fortawesome/free-solid-svg-icons";
import { deleteToken, getToken } from "../../services/operationsTokens";
import { toast } from "react-toastify";
import { useRouter } from "next/router";


export default function NavbarTop({classStyle }) {

  const User = useUserLanding()
  const UserData = useUserDataLanding(User)
  const router = useRouter();


  const Logout = () => {
    deleteToken();
    if (getToken() == null) {
      toast.success("Sesion Finalizada", {
        theme: "colored",
      });
      router.push("/");
    }
  };



  return (
    <>
      <Navbar collapseOnSelect bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="/">
            <img
              className="me-5"
              src="/logo.png"
              alt="logo"
              width="50px"
              height="60px"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav d-flex justify-content-between">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/">Planes</Nav.Link>
              <Nav.Link href="/">Conocenos</Nav.Link>
              <Nav.Link href="/">Soporte</Nav.Link>
            </Nav>
            <div className="d-flex">
              {UserData ? (
                <NavDropdown title="Mi Cuenta" id="basic-nav-dropdown">
                  <NavDropdown.Item>
                    <div className="header-landing">
                      <img
                        className="avatar-landing"
                        src={UserData?.avatar ? UserData.avatar : "https://rciminternet.com/wp-content/uploads/2019/04/usuario.png"}
                        alt="logo"
                      />
                      <p className="title">{UserData?.email}</p>
                    </div>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link href="/profile">
                    <a className="title title-landing">
                        <div className="container-flex">
                          <div className="me-2">
                            <FontAwesomeIcon
                              icon={faCog}
                              style={{
                                width: "20px",
                                height: "20px",
                                color: "black",
                              }}
                            />
                          </div>
                          <div>
                            <p>Perfil de Usuario</p> 
                          </div>
                        </div>
                      </a>
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link href="/dashboard">
                      <a className="title title-landing">
                        <div className="container-flex">
                          <div className="me-2">
                            <FontAwesomeIcon
                              icon={faSignInAlt}
                              style={{
                                width: "20px",
                                height: "20px",
                                color: "black",
                              }}
                            />
                          </div>
                          <div>
                            <p>Entrar en la App</p> 
                          </div>
                        </div>
                      </a>
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <div className="button-landing">
                    <Button 
                    variant="outline-danger"
                    onClick={Logout}
                    >
                    LogOut
                    </Button>
                  </div>
                </NavDropdown>
              ) : (
                <NavDropdown title="Mi Cuenta" id="basic-nav-dropdown">
                  <NavDropdown.Item>
                    <Title classStyle="title-landing">Bienvenido</Title>
                  </NavDropdown.Item>

                  <NavDropdown.Divider />

                  <div className="button-landing">
                    <Link href="/login">
                      <a className="btn btn-outline-success">Login</a>
                    </Link>
                    <Link href="/signup">
                      <a className="btn btn-outline-primary ">SigUp</a>
                    </Link>
                  </div>
                </NavDropdown>
              )}
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}