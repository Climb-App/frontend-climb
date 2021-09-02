import React from "react";
import MainLayoutComponent from "../../../components/MainLayout";
import { Form, Button } from "react-bootstrap";
import { toast } from "react-toastify";
import axios from "axios";
import {useRouter} from "next/router";

const baseUrlConnect = "http://127.0.0.1:8000/api/v1/badges_test/";

const Insignias = () => {

  const router = useRouter()
  //   // Conexion
  const [post, setPost] = React.useState(null);
  // const router=useRouter()
  async function PostBadges(e) {
    const form = e.target;
    e.preventDefault();
    //     //Set Values inputs
    console.log(form.elements);
    const {
      PuntosMinimos,
      PuntosMaximos,
      UrlImage,
      descriptionValue,
      nameValue,
    } = form.elements;
    console.log(
      PuntosMinimos,
      PuntosMaximos,
      UrlImage,
      descriptionValue,
      nameValue
    );
    //Connection
    try {
      const response = await axios.post(baseUrlConnect, {
        name: nameValue.value,
        description: descriptionValue.value,
        icon: UrlImage.value,
        points_needed_min: PuntosMinimos.value,
        points_needed_max: PuntosMaximos.value,
        company_user: 1,
      });
      if (response)
        toast.success("Datos enviados", {
          theme: "colored",
        });
      setPost(response.data);
      console.log(response.data);
      router.push('/recompensas')
      //Handling Errors
    } catch (error) {
      toast.error("Error al enviar los datos");
      console.error(error);
      if (error.response.status >= 402 && error.response.status <= 500) {
        console.log("Error");
      }
    }
  }

  const cancel = ()=>{
    router.push('/recompensas')
  }

  return (
    <MainLayoutComponent>
      <Form action="" method="POST" onSubmit={PostBadges}>
        <h2>Nueva Insignia</h2>
        {/* Inputs */}
        <div className="Formulario d-flex justify-content-between flex-wrap ">
          <div className="First Column " style={{ width: "40%" }}>
            <Form.Group className="mb-3 " controlId="nameValue">
              <Form.Label>Nombre de Insignia</Form.Label>
              <Form.Control type="text" placeholder="Crecimiento Kodeado" />
            </Form.Group>
            <Form.Group className="mb-3 " controlId="descriptionValue">
              <Form.Label>Descripcion de Insignia</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Developer Jr en proceso de ser"
              />
            </Form.Group>
            <Form.Group className="mb-3 " controlId="UrlImage">
              <Form.Label>Url de Insignia</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="https://pixabay.com/es/vectors/vinculado-conectado-red-equipo-152575/"
              />
            </Form.Group>
          </div>
          <div className="Second Column " style={{ width: "40%" }}>
            <Form.Group className="mb-3 " controlId="PuntosMaximos">
              <Form.Label>Puntos maximos</Form.Label>
              <Form.Control type="text" placeholder="1000" />
            </Form.Group>
            <br />
            {/* Imagen Reward */}
            <Form.Group className="mb-3 " controlId="PuntosMinimos">
              <Form.Label>Puntos minimos</Form.Label>
              <Form.Control type="text" placeholder="1500" />
            </Form.Group>
          </div>
          <div className="Botones d-flex  justify-content-center mt-3 w-100">
            <Button
              variant="success"
              type="submit"
              style={{ marginRight: "50px" }}
            >
              Crear
            </Button>
            <Button variant="danger" style={{ marginLeft: "50px" }} onClick={cancel}>
              Cancelar
            </Button>
          </div>
        </div>
      </Form>
    </MainLayoutComponent>
  );
};

export default Insignias;
