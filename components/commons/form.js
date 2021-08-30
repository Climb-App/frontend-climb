import React from 'react';
import Input from '../commons/input'


export default function Form({ children, action, method , onSubmit}) {

  return (
    <>
      <form className="form" action={`${action}`} method={`${method}`} onSubmit={onSubmit}>
          { children }
      </form>
    </>
  )
}