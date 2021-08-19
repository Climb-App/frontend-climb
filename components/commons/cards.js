import React from 'react';


export default function Cards({children, classStyle}) {

  return (
    <>
      <div className={`cards ${classStyle}`}>
        {children}
      </div>
    </>
  )
}