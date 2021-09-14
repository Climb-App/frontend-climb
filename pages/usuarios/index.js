import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import MainLayoutComponent from '../../components/MainLayout/index';
import useUsersMembers from '../../hooks/useUsersMembers';
import { Card, Table } from "react-bootstrap";
import Title from "../../components/commons/title";
import Link from "next/link"
import useUser from "../../hooks/useUser";
import Loading from '../../components/commons/loading'



export default function Users() {

  const users = useUsersMembers()

  const [loading, setLoading] = useState(true);
  const User = useUser();

  useEffect(() => {
    if (!User | User){
      setTimeout(() => {
        setLoading(false)
      }, 1500)
    }
  }, [User])

  if(loading){
    return (
      <Loading/>
    )
  }else{

  return (
    <>
      <MainLayoutComponent page="Usuarios">
        <div className="context-usuarios">
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
          <Card bsPrefix="card-workspace">
            <Card.Body>
              <Table className="table-workspace" size="sm">
                <thead>
                  <tr>
                    <th>Nombre</th>
                    <th>Apellido</th>
                    <th>Email</th>
                    <th>Role</th>
                    <th>Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  {users
                    ? users.map((users) => (
                        <tr key={users.id}>
                          <td>{users.first_name}</td>
                          <td>{users.last_name}</td>
                          <td>{users.email}</td>
                          <td>{users.role == 2 ? "Lider" : "Miembro"}</td>
                          <td>
                            <div className="buttonCrud">
                              <Link href="/">
                                <a><FontAwesomeIcon icon={faEye} style={{width:'30px', height: '30px', color: 'green'}}/></a>
                              </Link>
                              <Link href="/">
                                <a><FontAwesomeIcon icon={faEdit} style={{width:'25px', height: '25px', color: 'blue'}}/></a>
                              </Link>
                              <Link href="/">
                                <a><FontAwesomeIcon icon={faTrash} style={{width:'20px', height: '20px', color: 'red'}}/></a>
                              </Link>
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