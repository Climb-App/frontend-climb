import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { getToken } from "../services/operationsTokens";
import axios from "axios";
import { useRouter } from "next/router";
import { BASE_URL } from "../services/api";

const useUser = () => {
  const [User, setUser] = useState(null);
  const router = useRouter();

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
        if (error.response.status >= 402 && error.response.status <= 500) {
          toast.error("Error Cliente o Servidor ");
          console.log("Error");
          router.push("/");
        }
        if (error.response.status == 401) toast.error("Unauthorized");
      }
    }
    getUser();
  }, []);

  return User;
};

export default useUser;
