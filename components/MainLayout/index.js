import React from 'react';
import Navbar from './navbar.js';
import Lateral from './lateral.js';
import Contents from './Contents.js';


export default function MainLayoutComponent(props) {
    return (
      <>
        <Navbar/>
        <main className="container">
            <div className="row">
                <Lateral/>
                <Contents>{props.children}</Contents>
            </div>
        </main>
      </>
    )
  }