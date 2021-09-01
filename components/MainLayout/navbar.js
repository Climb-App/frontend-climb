import React from 'react';
import Link from 'next/link';
import {useRouter} from 'next/router';
import axios from 'axios'
import { toast } from 'react-toastify';

export default function Navbar() {

    const url = "https://api.climbapp.tech/api/v1/logout/";
    const router=useRouter()

    const Logout = async ()=> {
      //Connection
      try{
      const response = await axios.post(url);  
    //   console.log(response)
      if(response.data.message === 'success')
      toast.success("Sesion Finalizada", {
        theme: "colored"
      })
      router.push('/')
      //Handling Errors
      }catch(error){
          console.error(error)
          if(error.response.status >= 402 && error.response.status <= 500 )
          {
              console.log("Error")
          }
          if(error.response.status == 401)
          toast.error("Error al Cerrar la Sesion, Intente mas Tarde")
      }  

    }

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="box-logo">
                    <img src="/logo.png" alt="logo" width="50px" height="60px"/>
                </div>
                <nav className="heading shadow">
                    <div className="head">
                        <img className="icon me-2" src="/assets/dashboard-black.svg" alt="dashboard"/>
                        <h3 className="title">Dashboard</h3>
                    </div>
                    <div className="head">
                        <div className="shadow fill">
                            <Link href="/profile">
                                <a><img className="icon m-2" src="/assets/settings.svg" alt="settings"/></a>
                            </Link>
                        </div>
                        <img className="icon m-2" src="/assets/notifications.svg" alt="notifications"/>

                        <button className="button-box" onClick={Logout}>
                            <img className="icon m-2" src="/assets/logout.svg" alt="logout"/>
                        </button>

                    </div>
                </nav>
            </div>
        </div>
    )
  }