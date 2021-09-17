import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import MainLayoutComponent from "../../components/MainLayout/index";
import { Card, Table } from "react-bootstrap";
import Title from "../../components/commons/title";
import Link from "next/link";
import useUser from "../../hooks/useUser";
import Loading from "../../components/commons/loading";
import UseMembers from "../../hooks/useMembers";

export default function Users() {

  const [loading, setLoading] = useState(true);
  const User = useUser();
  const Users = UseMembers();

  useEffect(() => {
    if (!User | User) {
      setTimeout(() => {
        setLoading(false);
      }, 1500);
    }
  }, [User]);

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
            <Card bsPrefix="card-workspace ">
              <Card.Body className="text-center ">
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
                    {Users
                      ? Users.map((users) => (
                          <tr key={users.id}>
                            <td>{users.first_name}</td>
                            <td>{users.last_name}</td>
                            <td>{users.email}</td>
                            <td>{users.role == 2 ? "Lider" : "Miembro"}</td>
                            <td>
                              
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
