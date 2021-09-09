import React, { useState } from "react";
import MainLayoutComponent from "../../components/MainLayout/index";
import { Form, Button } from "react-bootstrap";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import useUserData from "../../hooks/useUserData";
import useUser from "../../hooks/useUser";

export default function PerfilUsuario() {
  const User = useUser();
  const UserData = useUserData(User);
  // const [UserData, setUserData] = useState({
  //   id: 9,
  //   first_name: "Pedro",
  //   last_name: "Lopez",
  //   email: "pedro@climb.com",
  //   role: 2,
  //   company: 2,
  //   avatar: "",
  //   available_points: 1200,
  //   accumulated_points: 700,
  // });

  const RenderMember = () => (
    <>
      <div className=" mt-4">
        <div className="TwoDivContent d-flex" style={{ width: "100%" }}>
          <div className="NombreDeUsuario d-flex" style={{ height: "50%" }}>
            <img
              alt=""
              className="me-4"
              src={UserData?.avatar != "" ? UserData?.avatar : "/user.svg"}
              width="60px"
              height="60px"
            />

            <h3>
              {UserData?.first_name} ,{UserData?.last_name} Developer Jr.
            </h3>
            {/* llenado dinamico */}
          </div>
          <div
            className="InsigniaInfoUsuario d-flex  "
            style={{ height: "50%", marginLeft: "170px" }}
          >
            <img alt="" src="/medalla1.svg" width="60px" height="60px" />
            <div className="PuntosAcumulados ms-4">
              <p style={{ color: "020813" }}>Acumulados</p>
              <p>{UserData?.accumulated_points}</p>
              {/* insertar puntos de usuario*/}
            </div>
            <div className="PuntosDisponibles ms-4">
              <p style={{ color: "#003AA6" }}>{UserData?.available_points}</p>
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
              id="FirstnameValue"
              type="text"
              placeholder=""
              defaultValue={UserData?.first_name}
            />
            <label htmlFor="floatingInputCustom">Nombre</label>
          </Form.Floating>
          <Form.Floating className="mb-3 input">
            <Form.Control
              id="LastnameValue"
              type="text"
              placeholder=""
              defaultValue={UserData?.last_name}
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
    </>
  );

  const RenderAdmin = () => (
    <>
      <div className=" mt-4">
        <div className="TwoDivContent d-flex" style={{ width: "100%" }}>
          <div className="NombreDeUsuario d-flex" style={{ height: "50%" }}>
            <img
              alt=""
              className="me-4"
              src={UserData?.avatar != "" ? UserData?.avatar : "/user.svg"}
              width="60px"
              height="60px"
            />

            <h3>{UserData?.name}</h3>
            {/* llenado dinamico */}
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
              id="RFCValue"
              type="text"
              placeholder="Crecimiento Kodeado"
              defaultValue={UserData?.rfc}
            />
            <label htmlFor="floatingInputCustom">RFC</label>
          </Form.Floating>
          <Form.Floating className="mb-3 input">
            <Form.Control
              id="nameValue"
              type="text"
              placeholder="Crecimiento Kodeado"
              defaultValue={UserData?.address}
            />
            <label htmlFor="floatingInputCustom">Address</label>
          </Form.Floating>

          <Form.Floating className="mb-3 input">
            <Form.Control
              id="email"
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
    </>
  );
  const router = useRouter();
  const ResetPass = () => {
    router.push("/recovery-pass/");
  };

  return (
    <>
      <MainLayoutComponent>
        {/* Ternario que renderiza segun tipo de role*/}
        {User?.[0]?.role === 1 ? (
          <RenderAdmin></RenderAdmin>
        ) : User?.[0]?.role === 3 || User?.[0]?.role === 2 ? (
          <RenderMember></RenderMember>
        ) : null}
      </MainLayoutComponent>
    </>
  );
}
