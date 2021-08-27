import React from 'react';
import Buttons from '../../components/commons/buttons'
import Input from '../../components/commons/input'
import Form from '../../components/commons/form'
import Cards from '../../components/commons/cards'
import Aside from '../../components/commons/aside'
import Links from '../../components/commons/links'

export default function SignUp() {

  return (
    <>
      <div className="body">
        <div className="aside-lef">
          <Cards classStyle="card-color-size">
            <Form action="" method="POST">
                <Input id="company" type="text" label="Company" place="example SA de CV"/>
                <Input id="rfc" type="text" label="RFC" place="Registro Tributario"/>
                <Input id="user" type="email" label="Email" place="example@dominio.com"/>
                <Input id="address" type="text" label="Direccion" place="direccion"/>
                <Input id="pass" type="password" label="Password" place="*******"/>
                <Input id="passConfirm" type="password" label="Confirmar Password" place="*******"/>
                <div>
                  <Buttons classStyle="mt-3">Enviar</Buttons>
                  <Buttons classStyle="mt-3 ms-3">Cancelar</Buttons>
                </div>
            </Form>
          </Cards>
        </div>
        <Aside/>
      </div>
    </>
  )
}