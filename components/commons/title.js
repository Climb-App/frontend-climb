import React from 'react';


export default function Title({children, classStyle }) {

  return (
    <>
      <h2 className={`title ${classStyle}`}>
        {children}
      </h2>
    </>
  )
}