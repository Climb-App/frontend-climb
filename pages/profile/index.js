import React, { useState } from "react";
import MainLayoutComponent from "../../components/MainLayout/index";
import { Form, Button } from "react-bootstrap";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import useUserData from "../../hooks/useUserData";
import useUser from "../../hooks/useUser";
import axios from "axios";
import { BASE_URL } from "../../services/api";
import { getToken } from "../../services/operationsTokens";

export default function PerfilUsuario() {
  const User = useUser();
  const { UserData, mutate } = useUserData(User);

  // /////////////////////////
  const UpdateProfile = async function (e) {
    const form = e.target;
    e.preventDefault();
    console.log(form.elements);

    const UserRole = User?.[0]?.role == 1 ? "admin/" : "member/";

    console.log("El role es:" + UserRole);

    if (User?.[0]?.role === 1) {
      // Admin
      const { nameValue, RFCValue, addressValue, email, avatarValue } =
        form.elements;
      console.log(nameValue, RFCValue, addressValue, email, avatarValue);
      console.log(
        nameValue.value,
        RFCValue.value,
        addressValue.value,
        email.value,
        avatarValue.value
      );
      console.log(`liga:${BASE_URL}api/v1/user/${UserRole}${User?.[0]?.id}`);
      try {
        const response = await axios.patch(
          `${BASE_URL}api/v1/user/${UserRole}${User?.[0]?.id}`,
          {
            name: nameValue.value,
            rfc: RFCValue.value,
            email: email.value,
            address: addressValue.value,
            avatar: avatarValue.value,
          },
          {
            headers: {
              Authorization: getToken(),
            },
          }
        );
        if (response)
          toast.success("Datos Modificados", {
            theme: "colored",
          });
        // setUserPatch(response.data)
        mutate(response.data);
        console.log(response.data);
        // location.reload();
        //router.push('/')
        //Handling Errors
      } catch (error) {
        toast.error("Error al modificar los datos");
        console.error(error);
        if (error.response.status >= 402 && error.response.status <= 500) {
          console.log("Error");
        }
      }
    } else if (User?.[0]?.role === 3 || User?.[0]?.role === 2) {
      // Member
      const { FirstnameValue, LastnameValue, emailValue, avatarValue } =
        form.elements;
      console.log(FirstnameValue, LastnameValue, emailValue, avatarValue);
      console.log(
        FirstnameValue.value,
        LastnameValue.value,
        emailValue.value,
        avatarValue.value
      );
      try {
        const response = await axios.patch(
          `${BASE_URL}api/v1/user/${UserRole}${User?.[0]?.id}`,
          {
            first_name: FirstnameValue.value,
            last_name: LastnameValue.value,
            email: emailValue.value,
            avatar: avatarValue.value,
          },
          {
            headers: {
              Authorization: getToken(),
            },
          }
        );
        if (response)
          toast.success("Datos Modificados", {
            theme: "colored",
          });
        // setUserPatch(response.data)
        mutate({ ...response.data });
        console.log(response.data);
        //router.push('/')
        //Handling Errors
      } catch (error) {
        toast.error("Error al modificar los datos");
        console.error(error);
        if (error.response.status >= 402 && error.response.status <= 500) {
          console.log("Error");
        }
      }
    }
  };

  const RenderMember = () => (
    <>
      <div className="mt-4 ">
        <div className="TwoDivContent d-flex" style={{ width: "100%" }}>
          <div className="NombreDeUsuario d-flex" style={{ height: "50%" }}>
            <img
              className="me-4"
              src={UserData?.avatar != "" ? UserData?.avatar : "/user.svg"}
              width="60px"
              height="60px"
            />

            <h3 className="textoTitulo">
              {UserData?.first_name} ,{UserData?.last_name} Developer Jr.
            </h3>
            {/* llenado dinamico */}
          </div>
          <div
            className="InsigniaInfoUsuario d-flex "
            style={{ height: "50%", marginLeft: "170px" }}
          >
            <img src="/medalla1.svg" width="60px" height="60px" />
            <div className="PuntosAcumulados ms-4">
              <p className="textoTitulo" style={{ color: "020813" }}>
                Acumulados
              </p>
              <p className="textoTitulo">{UserData?.accumulated_points}</p>
              {/* insertar puntos de usuario*/}
            </div>
            <div className="PuntosDisponibles ms-4">
              <p className="textoTitulo" style={{ color: "#003AA6" }}>
                {UserData?.available_points}
              </p>
            </div>
          </div>
        </div>
        <Form
          action=""
          className="mt-5 "
          method=""
          style={{ width: "100%" }}
          onSubmit={UpdateProfile}
        >
          <Form.Floating className="mb-3 input">
            <Form.Control
              id="FirstnameValue"
              className="texto"
              type="text"
              placeholder=""
              defaultValue={UserData?.first_name}
            />
            <label className="texto" htmlFor="floatingInputCustom">
              Nombre
            </label>
          </Form.Floating>
          <Form.Floating className="mb-3 input">
            <Form.Control
              id="LastnameValue"
              className="texto"
              type="text"
              placeholder=""
              defaultValue={UserData?.last_name}
            />
            <label className="texto" htmlFor="floatingInputCustom">
              Apellido
            </label>
          </Form.Floating>
          <Form.Floating className="mb-3 input">
            <Form.Control
              id="emailValue"
              className="texto"
              type="email"
              placeholder="Email"
              defaultValue={UserData?.email}
            />
            <label className="texto" htmlFor="floatingInputCustom">
              Email
            </label>
          </Form.Floating>
          <Form.Floating className="mb-3 input">
            <Form.Control
              id="avatarValue"
              className="texto"
              type="text"
              placeholder="avatar"
              defaultValue={UserData?.avatar}
            />
            <label className="texto" htmlFor="floatingInputCustom">
              Avatar
            </label>
          </Form.Floating>
          <div className="mt-5 Botones d-flex justify-content-center w-100 me-5">
            <Button
              className="texto"
              variant="success"
              type="submit"
              style={{ marginRight: "50px" }}
            >
              Editar Campos
            </Button>
            <Button
              className="me-5 texto"
              variant="danger"
              style={{ marginLeft: "50px" }}
            >
              Cancelar
            </Button>
            <Button
              variant="button"
              className="btn btn-primary texto"
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
      <div className="mt-4 ">
        <div className="TwoDivContent d-flex" style={{ width: "100%" }}>
          <div className="NombreDeUsuario d-flex" style={{ height: "50%" }}>
            <img
              className="me-4"
              src={UserData?.avatar != "" ? UserData?.avatar : "/user.svg"}
              width="60px"
              height="60px"
            />

            <h3 className="textoTitulo">{UserData?.name}</h3>
            {/* llenado dinamico */}
          </div>
        </div>
        <Form
          action=""
          className="mt-5 "
          method=""
          onSubmit={UpdateProfile}
          style={{ width: "100%" }}
          // onSubmit={PostResetPass}
        >
          <Form.Floating className="mb-3 input">
            <Form.Control
              id="nameValue"
              className="texto"
              type="text"
              placeholder="Nombre"
              defaultValue={UserData?.name}
            />
            <label className="texto" htmlFor="floatingInputCustom">
              Nombre
            </label>
          </Form.Floating>
          <Form.Floating className="mb-3 input">
            <Form.Control
              className="texto"
              id="RFCValue"
              type="text"
              placeholder="RFC"
              defaultValue={UserData?.rfc}
            />
            <label className="texto" htmlFor="floatingInputCustom">
              RFC
            </label>
          </Form.Floating>
          <Form.Floating className="mb-3 input">
            <Form.Control
              className="texto"
              id="addressValue"
              type="text"
              placeholder="Direccion"
              defaultValue={UserData?.address}
            />
            <label className="texto" htmlFor="floatingInputCustom">
              Address
            </label>
          </Form.Floating>

          <Form.Floating className="mb-3 input">
            <Form.Control
              className="texto"
              id="email"
              type="email"
              placeholder="Email"
              defaultValue={UserData?.email}
            />
            <label className="texto" htmlFor="floatingInputCustom">
              Email
            </label>
          </Form.Floating>
          <Form.Floating className="mb-3 input">
            <Form.Control
              className="texto"
              id="avatarValue"
              type="text"
              placeholder="avatar"
              defaultValue={UserData?.avatar}
            />
            <label className="texto" htmlFor="floatingInputCustom">
              Avatar
            </label>
          </Form.Floating>
          <div className="mt-5 Botones d-flex justify-content-center w-100 me-4">
            <Button
              className="texto"
              variant="success"
              type="submit"
              style={{ marginRight: "50px" }}
            >
              Editar Campos
            </Button>
            <Button
              className="me-5 texto"
              variant="danger"
              style={{ marginLeft: "50px" }}
            >
              Cancelar
            </Button>
            <Button
              variant="button"
              className="btn btn-primary texto"
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
      <MainLayoutComponent page="Configuracion">
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
