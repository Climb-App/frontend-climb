import React from 'react';
import Link from 'next/link';

export default function Links() {

  return (
    <>
        <div className="links">
            <div className="izq">
                <Link href="/recovery-pass">
                  <a className="">Recuperar Contrasena</a>
                </Link>
            </div>
            <div className="der">
              <Link href="/signup">
                <a className="">Obtener Cuenta Empresarial <br/> GRATIS</a>
              </Link>
            </div>
        </div>
    </>
  )
}