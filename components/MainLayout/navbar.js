import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import { deleteToken, getToken } from "../../services/operationsTokens";

export default function Navbar({ page, title }) {
  console.log(page);
  const router = useRouter();

  const Logout = () => {
    deleteToken();
    if (getToken() == null) {
      toast.success("Sesion Finalizada", {
        theme: "colored",
      });
      router.push("/");
    }
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="box-logo">
          <img src="/logo.png" alt="logo" width="50px" height="60px" />
        </div>
        <nav className="heading shadow">
          <div className="head">
            <img
              className="icon me-2"
              src={`/assets/${page}-black.svg`}
              alt="*"
            />
            <h3 className="title">{page}</h3>
          </div>
          <div className="head">
            <div className="shadow fill">
              <Link href="/profile">
                <a>
                  <img
                    className="icon m-2"
                    src="/assets/settings.svg"
                    alt="settings"
                  />
                </a>
              </Link>
            </div>
            <img
              className="icon m-2"
              src="/assets/notifications.svg"
              alt="notifications"
            />

            <button className="button-box" onClick={Logout}>
              <img className="icon m-2" src="/assets/logout.svg" alt="logout" />
            </button>
          </div>
        </nav>
      </div>
    </div>
  );
}
