import React from 'react';
import Link from 'next/link';

export default function Navbar() {
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
                            <Link href="./profile">
                                <a><img className="icon m-2" src="/assets/settings.svg" alt="settings"/></a>
                            </Link>
                        </div>
                        <img className="icon m-2" src="/assets/notifications.svg" alt="notifications"/>
                        <img className="icon m-2" src="/assets/logout.svg" alt="logout"/>
                    </div>
                </nav>
            </div>
        </div>
    )
  }