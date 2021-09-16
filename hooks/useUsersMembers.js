import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { getToken } from "../services/operationsTokens";
import axios from "axios";
import { useRouter } from "next/router";
import { BASE_URL } from "../services/api";

const UserMembers = (id_workspace) => {
  const [UserMember, setUserMember] = useState(); // Se inicializa vacio para ocupar el componente loading
  const router = useRouter();

  useEffect(() => {
    async function getUserMember() {
      try {
        const response = await axios.get(`${BASE_URL}api/v1/workspaces/${id_workspace}/`, {
          headers: {
            Authorization: getToken(),
          },
        });
        setUserMember(response.data);
        console.log(response.data);
      } catch (error) {
        console.log(error);
        if (error.response.status >= 402 && error.response.status <= 500) {
          // toast.error("Error Cliente o Servidor ");
          console.log("Error");
          //   router.push("/");
        }
        if (error.response.status == 401) toast.error("Unauthorized");
      }
    }
    getUserMember();
  }, [id_workspace]);

  return UserMember;
};

export default UserMembers;
