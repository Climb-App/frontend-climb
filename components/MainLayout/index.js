import React from 'react';
import Navbar from './navbar.js';
import Lateral from './lateral.js';
import Contents from './contents.js';

export default function MainLayoutComponent({children, page}) {
    return (
      <>
        <Navbar page={page}/>
        <main className="container-fluid">
            <div className="row main">
                <Lateral/>
                <Contents>
                  {children}
                </Contents>
            </div>
        </main>
      </>
    )
  }