import React from "react";
import MainLayoutComponent from "../../../components/MainLayout";
import { Form, Button } from "react-bootstrap";
import { toast } from "react-toastify";
import axios from "axios";
import { useRouter } from "next/router";
import { BASE_URL } from "../../../services/api";
import { getToken } from "../../../services/operationsTokens";
import useUser from "../../../hooks/useUser";

const Url = "api/v1/reward/";

const Rewards = () => {
  const User = useUser();
  // console.log(`El id del usuario es: ${User?.[0]?.id}`);
  const router = useRouter();
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
      const response = await axios.post(
        `${BASE_URL}${Url}`,
        {
          name: nameValue.value,
          description: descriptionValue.value,
          icon: UrlImage.value,
          points_needed: PointsValue.value,
          user: [`${User?.[0]?.id}`],
        },
        {
          headers: {
            Authorization: getToken(),
          },
        }
      );
      if (response)
        toast.success("Datos enviados", {
          theme: "colored",
        });
      setPost(response.data);
      console.log(response.data);
      router.push("/recompensas");
      //Handling Errors
    } catch (error) {
      toast.error("Error al enviar los Datos");
      console.error(error);
      if (error.response.status >= 402 && error.response.status <= 500) {
        console.log("Error");
      }
    }
  }

  const cancel = () => {
    router.push("/recompensas");
  };

  return (
    <MainLayoutComponent>
      <Form action="" method="POST" onSubmit={PostRewards}>
        <h2>Nueva Recompensa</h2>
        {/* Inputs */}
        <div className="Formulario d-flex justify-content-between flex-wrap mt-5 ">
          <div className="First Column " style={{ width: "40%" }}>
            <Form.Floating className="mb-3 input">
              <Form.Control
                id="nameValue"
                type="text"
                placeholder="Viaje Todo pagado"
              />
              <label htmlFor="floatingInputCustom">Nombre de Recompensa</label>
            </Form.Floating>
            <Form.Group className="mb-3 input " controlId="descriptionValue">
              <Form.Label>Descripcion de Recompensa</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Viaje a Cancun..."
              />
            </Form.Group>
          </div>
          <div className="Second Column " style={{ width: "40%" }}>
            <Form.Floating className=" input">
              <Form.Control id="PointsValue" type="text" placeholder="1000" />
              <label htmlFor="floatingInputCustom">Puntos necesitados</label>
            </Form.Floating>
            <br />
            {/* Imagen Reward */}
            <Form.Group className=" input " controlId="UrlImage">
              <Form.Label>Url Image</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="https://play-lh.googleusercontent.com/Jr7S7fP1nFTHF1GI5vxtRTSFD99EiYQWSB0FxZbEOMgMfzzlHCYU2d6M4iGFLIFLYFE"
              />
            </Form.Group>
          </div>
          <div className="Botones d-flex  justify-content-center mt-5 w-100">
            <Button
              variant="success"
              type="submit"
              style={{ marginRight: "50px" }}
            >
              Crear
            </Button>
            <Button
              variant="danger"
              style={{ marginLeft: "50px" }}
              onClick={cancel}
            >
              Cancelar
            </Button>
          </div>
        </div>
      </Form>
    </MainLayoutComponent>
  );
};

export default Rewards;
