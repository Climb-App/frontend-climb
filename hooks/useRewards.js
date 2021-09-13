import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { getToken } from "../services/operationsTokens";
import axios from "axios";
import { useRouter } from "next/router";
import { BASE_URL } from "../services/api";

const useRewards = () => {
    const [rewards, setRewards] = useState(null);

    useEffect(() => {
        const getRewards = async () => {
          try {
            const response = await axios.get(`${BASE_URL}api/v1/reward/user/`, {
              headers: {
                Authorization: getToken(),
              },
            });
            setRewards(response.data);
            console.log(response.data);
          } catch (error) {
            console.log(error);
            // setError(error)
            if (error.response.status >= 402 && error.response.status <= 500) {
              toast.error("Error de Autentificacion");
              // console.log("Error");
              // router.push("/");
            }
            if (error.response.status == 401) toast.error("Unauthorized");
          }
        };
        getRewards();
      }, []);
    
      console.log(rewards);

  return rewards;
};

export default useRewards;