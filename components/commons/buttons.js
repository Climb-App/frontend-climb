import React from 'react';


export default function Buttons({children, classStyle}) {
  return (
    <>
      <button className={`buttons ${classStyle}`}>
        {children}
      </button>
    </>
  )
}