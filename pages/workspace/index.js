import React from 'react';
import MainLayoutComponent from '../../components/MainLayout/index';
import Cards from '../../components/commons/cards'
import Title from '../../components/commons/title'
import axios from 'axios'



export default function Workspace() {

  const baseUrlConnect="http://127.0.0.1:8000/api/v1/";
  
  const client = axios.create({
    baseURL: `${baseUrlConnect}workspaces/` 
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

         <Title> {/*Aqui va el contenido de workspace*/ } 
          {post?.[0]?.name ?? "Vacio" }


      

        </Title>
          
        <Cards>{/*Contenido de los workspaces */}</Cards>

      </MainLayoutComponent>
    </>
  )
}