import React from 'react';


export default function Input({id, type, label, place }) {

  return (
    <>
      <label className="title label" htmlFor={`${id}`} >{`${label}`}</label>
      <input className="input" type={`${type}`} id={`${id}`} placeholder={`${place}`}/>
    </>
  )
}