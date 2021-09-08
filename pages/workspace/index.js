import React, { useState, useEffect } from "react";
import MainLayoutComponent from "../../components/MainLayout/index";
import Cards from "../../components/commons/cards";
import Title from "../../components/commons/title";
import axios from "axios";
import { BASE_URL } from "../../services/api";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import { getToken } from "../../services/operationsTokens";

export default function Workspace() {
  const [post, setPost] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const getWorkspace = async () => {
      try {
        const response = await axios.get(`${BASE_URL}api/v1/workspaces/`, {
          headers: {
            Authorization: getToken(),
          },
        });
        setPost(response.data);
        console.log(response.data);
      } catch (error) {
        console.log(error);
        // setError(error)
        if (error.response.status >= 402 && error.response.status <= 500) {
          toast.error("Error de Autentificacion");
          console.log("Error");
          router.push("/");
        }
        if (error.response.status == 401) toast.error("Unauthorized");
      }
    };
    getWorkspace();
  }, []);

  console.log(post);

  return (
    <>
      <MainLayoutComponent page="Workspace">
        <Title>
          Objetivos
        </Title>
        <Cards> <i className="fas fa-spinner fa-spin"></i> </Cards>
      </MainLayoutComponent>
    </>
  );
}
