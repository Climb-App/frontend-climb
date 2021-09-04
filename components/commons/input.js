import React from 'react';

export default function Input({ name, type, label, place }) {
  return (
    <>
      <label className="title label" htmlFor={`${name}`} >{`${label}`}</label>
      <input id= {id} className="input" type={`${type}`} name={`${name}`} placeholder={`${place}`} />
    </>
  );
}
