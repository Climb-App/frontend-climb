import React from 'react';
import Input from '../commons/input'


export default function Form({ children, action, method }) {

  return (
    <>
      <form className="form" action={`${action}`} method={`${method}`}>
          { children }
      </form>
    </>
  )
}