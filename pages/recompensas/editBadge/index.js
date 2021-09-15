import React from "react";
import useBadges from "../../../hooks/useBadges";
import axios from "axios";
import { Form, Button } from "react-bootstrap";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import MainLayoutComponent from "../../../components/MainLayout";

// const badges = useBadges();
// const router = useRouter();
// const { id_badge } = router.query;

const EditInsignias = () => {
  const cancel = () => {
    router.push("/recompensas");
  };

  return (
    <>
      <MainLayoutComponent>
        <Form action="" method="POST">
          {/*//onSubmit={PostBadges} */}
          <h2>Editar Insignia</h2>
          {/* Inputs */}
          <div className="Formulario d-flex justify-content-between flex-wrap mt-5 ">
            <div className="First Column " style={{ width: "40%" }}>
              <Form.Floating className="mb-3 input">
                <Form.Control
                  id="nameValue"
                  type="text"
                  placeholder="Crecimiento Kodeado"
                />
                <label htmlFor="floatingInputCustom">Nombre de Insignia</label>
              </Form.Floating>
              <Form.Group className="mb-3 input" controlId="descriptionValue">
                <Form.Label>Descripcion de Insignia</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="Developer Jr en proceso de ser"
                />
              </Form.Group>
              <Form.Group className="mb-3 input" controlId="UrlImage">
                <Form.Label>Url de Insignia</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="https://pixabay.com/es/vectors/vinculado-conectado-red-equipo-152575/"
                />
              </Form.Group>
            </div>
            <div className="Second Column " style={{ width: "40%" }}>
              <Form.Floating className="mb-3 input">
                <Form.Control
                  id="PuntosMaximos"
                  type="text"
                  placeholder="1000"
                />
                <label htmlFor="floatingInputCustom">Puntos maximos</label>
              </Form.Floating>

              <Form.Floating className="mb-3 input">
                <Form.Control
                  id="PuntosMinimos"
                  type="text"
                  placeholder="1500"
                />
                <label htmlFor="floatingInputCustom">Puntos minimos</label>
              </Form.Floating>
            </div>
            <div className="Botones d-flex  justify-content-center mt-3 w-100">
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
    </>
  );
};

export default EditInsignias;
