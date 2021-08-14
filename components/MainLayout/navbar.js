import React from 'react';


export default function Navbar() {
    return (
        <div className="container">
            <div className="row">
                <div className="box col-3">
                    <img src="/logo.png" alt="logo" width="50px" height="60px"/>
                </div>
                <nav className="heading col-10 card shadow" id="navbar">
                    <div className="head">
                        <img className="icon me-2" src="/assets/dashboard-black.svg" alt="dashboard"/>
                        <a>Dashboard</a>
                    </div>
                    <div className="head">
                        <div className="card shadow fill">
                            <img className="icon m-2" src="/assets/settings.svg" alt="settings"/>
                        </div>
                        <img className="icon m-2" src="/assets/notifications.svg" alt="notifications"/>
                        <img className="icon m-2" src="/assets/logout.svg" alt="logout"/>
                    </div>
                </nav>
            </div>
        </div>
    )
  }