import React from 'react';


export default function Buttons({children, classStyle , ...props }) {
  return (
    <>
      <button  className={`buttons ${classStyle}`}  {...props}>
        {children}
      </button>
    </>
  )
}