import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { getToken } from "../services/operationsTokens";
import axios from "axios";
import { useRouter } from "next/router";
import { BASE_URL } from "../services/api";

const useUser = () => {
  const [user, setUser] = useState( null ); // Se inicializa vacio para ocupar el componente loading
  const router = useRouter();


  useEffect(() => {
    // console.log( "petición")
    async function getUser(){
      // console.log( "async")
      await axios.get(`${BASE_URL}api/v1/user/`, {
        headers: {
          Authorization: getToken(),
        },
      }).then( response => {
        setUser( response.data );
        // console.log( response.data )
      }).catch(error => {
        console.log( error )
        router.push("/")
      })
    }
    getUser()
  }, [router]);

  return user;
};

export default useUser;
