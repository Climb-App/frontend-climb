import React from 'react';


export default function Buttons(props) {
  return (
    <>
      <button className="buttons">
        {props.children}
      </button>
    </>
  )
}