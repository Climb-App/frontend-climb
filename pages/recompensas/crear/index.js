import React from "react";
import MainLayoutComponent from "../../../components/MainLayout";
import { Form, Button } from "react-bootstrap";
import { toast } from "react-toastify";
import axios from "axios";

const baseUrlConnect = "http://127.0.0.1:8000/api/v1/rewards_test/";

const Rewards = () => {
  //   // Conexion
  const [post, setPost] = React.useState(null);
  // const router=useRouter()
  async function PostRewards(e) {
    const form = e.target;
    e.preventDefault();
    //Set Values inputs
    console.log(form.elements);
    const { nameValue, descriptionValue, PointsValue, FileValue } =
      form.elements;
    console.log(nameValue, descriptionValue, PointsValue, FileValue);
    //Connection
    try {
      const response = await axios.post(baseUrlConnect, {
        name: nameValue.value,
        description: descriptionValue.value,
        icon: UrlImage.value,
        points_needed: PointsValue.value,
        company_user: 1,
      });
      if (response)
        toast.success("Datos enviados", {
          theme: "colored",
        });
      setPost(response.data);
      console.log(response.data);
      //router.push('/')
      //Handling Errors
    } catch (error) {
      toast.error("Error al enviar los Datos");
      console.error(error);
      if (error.response.status >= 402 && error.response.status <= 500) {
        console.log("Error");
      }
    }
  }

  return (
    <MainLayoutComponent>
      <Form action="" method="POST" onSubmit={PostRewards}>
        <h2>Nueva Recompensa</h2>
        {/* Inputs */}
        <div className="Formulario d-flex justify-content-between flex-wrap ">
          <div className="First Column " style={{ width: "40%" }}>
            <Form.Group className="mb-3 " controlId="nameValue">
              <Form.Label>Nombre de Recompensa</Form.Label>
              <Form.Control type="text" placeholder="Viaje Todo pagado" />
            </Form.Group>
            <Form.Group className="mb-3 " controlId="descriptionValue">
              <Form.Label>Descripcion de Recompensa</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Viaje a Cancun..."
              />
            </Form.Group>
          </div>
          <div className="Second Column " style={{ width: "40%" }}>
            <Form.Group className="mb-3 " controlId="PointsValue">
              <Form.Label>Puntos necesitados para Recompensa</Form.Label>
              <Form.Control type="text" placeholder="1000" />
            </Form.Group>
            <br />
            {/* Imagen Reward */}
            <Form.Group className="mb-3 " controlId="UrlImage">
              <Form.Label>Url Image</Form.Label>
              <Form.Control
                type="text"
                placeholder="https://play-lh.googleusercontent.com/Jr7S7fP1nFTHF1GI5vxtRTSFD99EiYQWSB0FxZbEOMgMfzzlHCYU2d6M4iGFLIFLYFE"
              />
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
            <Button variant="danger" style={{ marginLeft: "50px" }}>
              Cancelar
            </Button>
          </div>
        </div>
      </Form>
    </MainLayoutComponent>
  );
};

export default Rewards;
