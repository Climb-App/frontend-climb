import React from 'react';
import MainLayoutComponent from '../../components/MainLayout/index';
import axios from 'axios'

export default function Users() {


  const baseUrlConnect="http://127.0.0.1:8000/api/v1/";

  const client = axios.create({
    baseURL: `${baseUrlConnect}roles/` 
  });
  
    const [post, setPost] = React.useState(null);
  
    React.useEffect(() => {
      async function getPost() {
        const response = await client.get();
        setPost(response.data);
        console.log(response.data)
      }
      getPost();
    }, []);
  
  return (
    <>
      <MainLayoutComponent>
        
        <h1>Administracion de Usuarios, solo para usuarios admin</h1>
       
      </MainLayoutComponent>
    </>
  )
}