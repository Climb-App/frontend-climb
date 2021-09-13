import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { BASE_URL } from "../services/api";
import { getToken } from "../services/operationsTokens";
import axios from "axios";
import { useRouter } from "next/router";

const useUserData = (user) => {
  const [userData, setUserData] = useState(null);

  const router = useRouter();

  useEffect(() => {
    if (!user?.[0]?.role) {
      return;
    }

    console.log(
      "La informacion traida y guarda en User es 'role': " + user?.[0]?.role
    );

    const UserRole = user?.[0]?.role == 1 ? "admin/" : "member/";

    console.log("El role es:" + UserRole);

    async function getData() {
      try {
        const response = await axios.get(
          `${BASE_URL}api/v1/user/${UserRole}${user[0].id}`,
          {
            headers: {
              Authorization: getToken(),
            },
          }
        );
        setUserData(response.data);
        toast.success(`Informacion del Usuario: ${response.data.name} `);
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
    getData();
    console.log("La informacion traida y guarda en Data es: " + userData?.name);
  }, [user]);

  return userData;
};

export default useUserData;
