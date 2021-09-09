import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { getToken } from "../services/operationsTokens";
import axios from "axios";
import { useRouter } from "next/router";
import { BASE_URL } from "../services/api";

const useWorkspaces = () => {
    const [workspaces, setWorkspaces] = useState(null);
    const router = useRouter();

    useEffect(() => {
        const getWorkspace = async () => {
          try {
            const response = await axios.get(`${BASE_URL}api/v1/workspaces/`, {
              headers: {
                Authorization: getToken(),
              },
            });
            setWorkspaces(response.data);
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
      }, [router]);
    
      console.log(workspaces);

  return workspaces;
};

export default useWorkspaces;