import React from 'react';
import Navbar from './navbar.js';
import Lateral from './lateral.js';
import Contents from './contents.js';


export default function MainLayoutComponent(props) {
    return (
      <>
        <Navbar/>
        <main className="container-fluid">
            <div className="row main">
                <Lateral/>
                <Contents>{props.children}</Contents>
            </div>
        </main>
      </>
    )
  }