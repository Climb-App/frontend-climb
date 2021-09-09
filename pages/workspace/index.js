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
  
  // const { id } = 

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
