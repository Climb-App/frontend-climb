import React from 'react';


export default function Contents(props) {
    return (
      <div className="d-block col-10 ms-2">
          {props.children}
      </div>
    )
  }