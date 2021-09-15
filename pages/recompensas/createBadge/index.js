import React from "react";
import MainLayoutComponent from "../../../components/MainLayout";
import { Form, Button } from "react-bootstrap";
import { toast } from "react-toastify";
import axios from "axios";
import { useRouter } from "next/router";
import { BASE_URL } from "../../../services/api";
import { getToken } from "../../../services/operationsTokens";
import useUser from "../../../hooks/useUser";

const Url = "api/v1/badges/";

const Insignias = () => {
  const User = useUser();

  // console.log(`El id del usuario es: ${User?.[0]?.id}`);
  const router = useRouter();
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
      PuntosMinimos.value,
      PuntosMaximos.value,
      UrlImage.value,
      descriptionValue.value,
      nameValue.value
    );
    //Connection
    try {
      const response = await axios.post(
        `${BASE_URL}${Url}`,
        {
          name: nameValue.value,
          description: descriptionValue.value,
          icon: UrlImage.value,
          points_needed_min: PuntosMinimos.value,
          points_needed_max: PuntosMaximos.value,
          user: [`${User?.[0]?.id}`], //Por?XD
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
      toast.error("Error al enviar los datos");
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
      <Form action="" method="POST" onSubmit={PostBadges}>
        <h2 className="headTitle title">Nueva Insignia</h2>
        {/* Inputs */}
        <div className="Formulario d-flex justify-content-between flex-wrap mt-5 ">
          <div className="First Column " style={{ width: "40%" }}>
            <Form.Floating className="mb-3 input texto">
              <Form.Control
                id="nameValue"
                type="text"
                placeholder="Crecimiento Kodeado"
              />
              <label htmlFor="floatingInputCustom">Nombre de Insignia</label>
            </Form.Floating>
            <Form.Group
              className="mb-3 input texto"
              controlId="descriptionValue"
            >
              <Form.Label>Descripcion de Insignia</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Developer Jr en proceso de ser"
              />
            </Form.Group>
            <Form.Group className="mb-3 input texto" controlId="UrlImage">
              <Form.Label>Url de Insignia</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="https://pixabay.com/es/vectors/vinculado-conectado-red-equipo-152575/"
              />
            </Form.Group>
          </div>
          <div className="Second Column " style={{ width: "40%" }}>
            <Form.Floating className="mb-3 input texto">
              <Form.Control id="PuntosMaximos" type="text" placeholder="1000" />
              <label htmlFor="floatingInputCustom">Puntos maximos</label>
            </Form.Floating>

            <Form.Floating className="mb-3 input texto">
              <Form.Control id="PuntosMinimos" type="text" placeholder="1500" />
              <label htmlFor="floatingInputCustom">Puntos minimos</label>
            </Form.Floating>
          </div>
          <div className="Botones d-flex  justify-content-center mt-3 w-100">
            <Button
              className="texto"
              variant="success"
              type="submit"
              style={{ marginRight: "50px" }}
            >
              Crear
            </Button>
            <Button
              className="texto"
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

export default Insignias;
