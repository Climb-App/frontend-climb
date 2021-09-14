import { toast } from "react-toastify";
import { BASE_URL } from "../services/api";
import { getToken } from "../services/operationsTokens";
import axios from "axios";
import { useRouter } from "next/router";
import useSWR from "swr";

const useUserData = (user) => {
  const router = useRouter();

  const fetcher = async () => {
    console.log(
      "La informacion traida y guarda en User es 'role': " + user?.[0]?.role
    );

    const UserRole = user?.[0]?.role == 1 ? "admin/" : "member/";

    console.log("El role es:" + UserRole);

    try {
      const response = await axios.get(
        `${BASE_URL}api/v1/user/${UserRole}${user[0].id}`,
        {
          headers: {
            Authorization: getToken(),
          },
        }
      );

      toast.success(`Informacion del Usuario: ${response.data.name} `);
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.log(error);
      // setError(error)
      if (error?.response?.status >= 402 && error?.response?.status <= 500) {
        toast.error("Error Cliente o Servidor ");
        console.log("Error");
        router.push("/");
        throw new Error(error?.response?.status ?? error);
      }
      if (error?.response?.status == 401) {
        toast.error("Unauthorized");
        router.push("/login");
        throw new Error("Unauthorized");
      }
    }

    console.log("La informacion traida y guarda en Data es: " + userData?.name);
  };

  const { data, error, mutate } = useSWR(
    user?.[0]?.role ? `${BASE_URL}api/v1/user/` : null,
    fetcher,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  );

  return {
    UserData: data,
    isLoading: !error && !data,
    isError: error,
    mutate,
  };
};

export default useUserData;
