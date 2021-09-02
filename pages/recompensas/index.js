import React from "react";
import MainLayoutComponent from "../../components/MainLayout/index";
import axios from "axios";

export default function Recompensas() {
  const baseUrlConnect = "https://api.climbapp.tech/api/v1/";

  const client = axios.create({
    baseURL: `${baseUrlConnect}rewards/`,
  });

  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    async function getPost() {
      const response = await client.get();
      setPost(response.data);
      console.log(response.data);
    }
    getPost();
  }, []);

  return (
    <>
      <MainLayoutComponent>
        <h1>Recompensas </h1>
      </MainLayoutComponent>
    </>
  );
}
