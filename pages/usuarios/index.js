import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import MainLayoutComponent from "../../components/MainLayout/index";
import { Card, Table } from "react-bootstrap";
import Title from "../../components/commons/title";
import Link from "next/link";
import Loading from "../../components/commons/loading";
import axios from "axios";
import { useRouter } from "next/router";
import { BASE_URL } from "../../services/api";
import { getToken } from "../../services/operationsTokens";

export default function Users() {

  const [usersCollection, setUsersCollection ] = useState([]);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState([])
  const router = useRouter();
  let count = 0;

    async function deleted(id){
      console.log( "Usuario eliminado")
      await axios.delete(`${BASE_URL}api/v1/user/member/${id}`, {
        headers: {
          Authorization: getToken(),
        },
      }).then( response => {
        console.log( response.data );
      }).catch(error => {
        console.log( error )
        router.push("/usuarios/")
      })
    }
    

  useEffect(() => {

    async function getUser(){
      console.log( "Verificacion de Usuario Logueado")
      await axios.get(`${BASE_URL}api/v1/user/`, {
        headers: {
          Authorization: getToken(),
        },
      }).then( response => {
        setUser( response.data );
      }).catch(error => {
        console.log( error )
        router.push("/")
      })
    }
    getUser()
    
  }, [router]);


  useEffect(() => {

    async function getUsers(){
      console.log( "Peticion de Usuarios")
      await axios.get(`${BASE_URL}api/v1/users/`, {
        headers: {
          Authorization: getToken(),
        },
      }).then( response => {
        setUsersCollection( response.data );
        // console.log( response.data )
      }).catch(error => {
        console.log( error )
      })
    }
    getUsers()
  }, [])

  // console.log(usersCollection)
  console.log( usersCollection.sort( function( a, b ) {
    return a.accumulated_points + b.accumulated_points
  }))

  if (user) {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }

  if (loading) {
    return <Loading />;
  } else {
    return (
      <>
        <MainLayoutComponent page="Usuarios">
          <div className="context-usuarios textoUsuarios">
            <div className="header-usuarios">
              <div>
                <Title classStyle="headTitle">Administracion de Usuarios</Title>
              </div>
              <div>
                <Link href="/usuarios/crear">
                  <a className="btn btn-primary me-3">Crear Usuario</a>
                </Link>
              </div>
            </div>
            <Card bsPrefix="card-users">
              <Card.Body className="text-center ">
                <Table className="table-workspace" size="sm">
                  <thead>
                    <tr>
                      <th>Ranking</th>
                      <th>Puntos</th>
                      <th>Nombre</th>
                      <th>Apellido</th>
                      <th>Email</th>
                      <th>Role</th>
                      <th>Acciones</th>
                    </tr>
                  </thead>
                  <tbody>
                    {usersCollection
                      ? usersCollection.sort( function( a, b ) {
                        return a.accumulated_points + b.accumulated_points
                      }).map((users) => (
                          <tr key={users.id}>
                            <td>{count += 1}</td>
                            <td>{users.accumulated_points}</td>
                            <td>{users.first_name}</td>
                            <td>{users.last_name}</td>
                            <td>{users.email}</td>
                            <td>{users.role == 2 ? "Lider" : "Miembro"}</td>
                            <td>
                            <div className="buttonCrud ">
                              <button 
                              className="button-delete"
                              onClick={() => deleted(users.id)}
                              >
                                <a>
                                  <FontAwesomeIcon
                                    icon={faTrash}
                                    style={{
                                      width: "20px",
                                      height: "20px",
                                      color: "red",
                                    }}
                                  />
                                </a>
                              </button>
                              </div>
                            </td>
                          </tr>
                        ))
                      : null}
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </div>
        </MainLayoutComponent>
      </>
    );
  }
}
