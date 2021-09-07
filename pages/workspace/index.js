import React from "react";
import { useState, useEffect } from "react";
import MainLayoutComponent from "../../components/MainLayout/index";
import Cards from "../../components/commons/cards";
import Title from "../../components/commons/title";
import axios from "axios";
import BASE_URL from "../../services/api";

export default function Workspace() {
  // const client = axios.create({
  //   baseURL: `${BASE_URL}workspaces/`
  // });

  //   const [post, setPost] = React.useState(null);

  //   React.useEffect(() => {
  //     async function getPost() {
  //       const response = await client.get();
  //       setPost(response.data);
  //       console.log(response.data)
  //     }
  //     getPost();
  //   }, []);

  return (
    <>
      <MainLayoutComponent>
        <Title>
          {" "}
          {/*Aqui va el contenido de workspace*/}
          {/* {post?.[0]?.name ?? "Vacio" }
         <p> {post?.[0]?.description ?? "Vacio" }</p> */}
        </Title>
        <Cards>{/*Contenido de los workspaces */}</Cards>
      </MainLayoutComponent>
    </>
  );
}
