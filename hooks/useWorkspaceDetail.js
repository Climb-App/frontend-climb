import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { getToken } from "../services/operationsTokens";
import axios from "axios";
import { useRouter } from "next/router";
import { BASE_URL } from "../services/api";

const useWorkspacesDetail = (id) => {
  const [workspacesDetail, setWorkspacesDetail] = useState(null);

  useEffect(() => {
    const getWorkspaceDetail = async () => {
      try {
        const response = await axios.get(
          `${BASE_URL}api/v1/workspaces/${id}/`,
          {
            headers: {
              Authorization: getToken(),
            },
          }
        );
        setWorkspacesDetail(response.data);
        // console.log(response.data);
      } catch (error) {
        console.log(error);
        if (error.response.status >= 402 && error.response.status <= 500) {
          // toast.error("Error de Autentificacion");
        }
        if (error.response.status == 401) toast.error("Unauthorized");
      }
    };
    getWorkspaceDetail();
  }, [id]);

  return workspacesDetail;
};

export default useWorkspacesDetail;
