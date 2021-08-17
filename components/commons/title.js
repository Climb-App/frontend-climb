import React from 'react';


export default function Title(props) {

    const {children, classStyle } = props
  return (
    <>
      <h2 className={`title ${classStyle}`}>
        {children}
      </h2>
    </>
  )
}