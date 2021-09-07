import React from "react";
import Buttons from "../../components/commons/buttons";
import Input from "../../components/commons/input";
import Form from "../../components/commons/form";
import Cards from "../../components/commons/cards";
import Aside from "../../components/commons/aside";
import Links from "../../components/commons/links";
import axios from "axios";
import { useRouter } from "next/router";
import { setToken } from "../../services/operationsTokens";
import { toast } from "react-toastify";

const baseUrlConnect = "https://api.climbapp.tech/api/v1/login";

export default function Login() {
  const [post, setPost] = React.useState(null);
  const router = useRouter();

  async function Login(e) {
    const form = e.target;
    e.preventDefault();
    //     //Set Values inputs
    console.log(form.elements);
    //Set Values inputs
    const { user, pass } = form.elements;

    console.log(user, pass);
    console.log(user.value, pass.value);
    //Connection
    try {
      const response = await axios.post(baseUrlConnect, {
        email: user.value,
        password: pass.value,
      });

      if (response)
        toast.success("Accesos correctos", {
          theme: "colored",
        });
      setPost(response.data);

      //Token save storage
      setToken(response.data.token);
      router.push("/dashboard");
      //Handling Errors
    } catch (error) {
      console.error(error);
      if (error.response.status >= 402 && error.response.status <= 500) {
        console.log("Error");
      }
      if (error.response.status == 401)
        toast.error("Valores de Autenficacion email o password incorrectos");
    }
  }

  return (
    <>
      <div className="body">
        <div className="aside-lef">
          <Cards classStyle="card-color">
            <Form action="" method="POST" onSubmit={Login}>
              <Input id="user" type="email" label="Email" place="Email" />
              <Input
                id="pass"
                type="password"
                label="Password"
                place="Password"
              />
              <Links />
              <Buttons classStyle="" type="submit">
                LOGIN
              </Buttons>
            </Form>
          </Cards>
        </div>
        <Aside />
      </div>
    </>
  );
}
