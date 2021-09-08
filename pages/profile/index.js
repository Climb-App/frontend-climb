import React from "react";
import MainLayoutComponent from "../../components/MainLayout/index";
import { Form, Button } from "react-bootstrap";
import { toast } from "react-toastify";
import axios from "axios";
import { right } from "@popperjs/core";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { BASE_URL } from "../../services/api";
import { getToken } from "../../services/operationsTokens";

export default function PerfilUsuario() {
  const router = useRouter();
  const ResetPass = () => {
    router.push("/recovery-pass/");
  };

  const [User, setUser] = useState(null);
  const [UserData, setUserData] = useState(null);

  // const baseUrlConnect = "http://127.0.0.1:8000/api/user/";

  useEffect(() => {
    async function getUser() {
      try {
        const response = await axios.get(`${BASE_URL}api/v1/user/`, {
          headers: {
            Authorization: getToken(),
          },
        });
        setUser(response.data);
        console.log(response.data);
      } catch (error) {
        console.log(error);
        // setError(error)
        if (error.response.status >= 402 && error.response.status <= 500) {
          toast.error("Error Cliente o Servidor ");
          console.log("Error");
          router.push("/");
        }
        if (error.response.status == 401) toast.error("Unauthorized");
      }
    }
    getUser();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!User) {
      return;
    }
    console.log(User);
    console.log("La informacion traida y guarda en User es: " + User[0].role);

    const UserRole = User?.[0]?.role == 1 ? "admin/" : "member/";

    console.log("El role es:" + UserRole);

    async function getData() {
      try {
        const response = await axios.get(
          `${BASE_URL}api/v1/user/${UserRole}${User[0].id}`,
          {
            headers: {
              Authorization: getToken(),
            },
          }
        );
        setUserData(response.data);
        console.log(response.data);
        toast.success(
          "Acceso a Informacion del Usuario: " + `${response.data.name}`
        );
      } catch (error) {
        console.log(error);
        // setError(error)
        if (error.response.status >= 402 && error.response.status <= 500) {
          toast.error("Error Cliente o Servidor ");
          console.log("Error");
          router.push("/");
        }
        if (error.response.status == 401) toast.error("Unauthorized");
      }
    }
    getData();
    console.log("La informacion traida y guarda en Data es: " + UserData?.[0]);
  }, [User]);

  return (
    <>
      <MainLayoutComponent>
        <div className=" mt-4">
          <div className="TwoDivContent d-flex" style={{ width: "100%" }}>
            <div className="NombreDeUsuario d-flex" style={{ height: "50%" }}>
              <img
                className="me-4"
                src="/medalla1.svg"
                width="60px"
                height="60px"
              />

              <h3>Pablito, Perez Developer Jr.</h3>
              {/* llenado dinamico */}
            </div>
            <div
              className="InsigniaInfoUsuario d-flex  "
              style={{ height: "50%", marginLeft: "170px" }}
            >
              <img src="/medalla1.svg" width="60px" height="60px" />
              <div className="PuntosAcumulados ms-4">
                <p style={{ color: "020813" }}>Acumulados</p>
                <p>5400 pts</p>
                {/* insertar puntos de usuario*/}
              </div>
              <div className="PuntosDisponibles ms-4">
                <p style={{ color: "#003AA6" }}>Disponibles 1000 pts</p>
              </div>
            </div>
          </div>
          <Form
            action=""
            className=" mt-5 "
            method="POST"
            style={{ width: "100%" }}
            // onSubmit={PostResetPass}
          >
            <Form.Floating className="mb-3 input">
              <Form.Control
                id="nameValue"
                type="text"
                placeholder="Crecimiento Kodeado"
                defaultValue={UserData?.name}
              />
              <label htmlFor="floatingInputCustom">Nombre</label>
            </Form.Floating>
            <Form.Floating className="mb-3 input">
              <Form.Control
                id="nameValue"
                type="text"
                placeholder="Crecimiento Kodeado"
              />
              <label htmlFor="floatingInputCustom">Apellido</label>
            </Form.Floating>
            <Form.Floating className="mb-3 input">
              <Form.Control
                id="user"
                type="email"
                placeholder="Email"
                defaultValue={UserData?.email}
              />
              <label htmlFor="floatingInputCustom">Email</label>
            </Form.Floating>
            <div className="Botones d-flex  justify-content-center  mt-5 w-100 me-5">
              <Button
                variant="success"
                type="submit"
                style={{ marginRight: "50px" }}
              >
                Guardar
              </Button>
              <Button
                className="me-5"
                variant="danger"
                style={{ marginLeft: "50px" }}
              >
                Cancelar
              </Button>
              <Button
                variant="button"
                className="btn btn-primary"
                style={{ marginLeft: "50px" }}
                onClick={ResetPass}
              >
                Resetear Password
              </Button>
            </div>
          </Form>
        </div>
      </MainLayoutComponent>
    </>
  );
}
