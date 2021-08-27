import React from 'react';
import Buttons from '../../components/commons/buttons'
import Input from '../../components/commons/input'
import Form from '../../components/commons/form'
import Cards from '../../components/commons/cards'
import Aside from '../../components/commons/aside'
import Links from '../../components/commons/links'

export default function RecoveryPass() {

  return (
    <>
      <div className="body">
        <div className="aside-lef">
          <Cards classStyle="card-color">
            <Form action="" method="POST">
                <Input id="user" type="email" label="Email" place="example@dominio.com"/>
                <Input id="ConfirmUser" type="email" label="Confirmar Email" place="example@dominio.com"/>
                <Buttons classStyle="mt-5">Enviar</Buttons>
            </Form>
          </Cards>
        </div>
        <Aside/>
      </div>
    </>
  )
}