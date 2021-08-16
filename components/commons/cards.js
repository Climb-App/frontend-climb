import React from 'react';


export default function Cards(props) {
  return (
    <>
      <div className="cards">
        {props.children}
      </div>
    </>
  )
}