import React from 'react';
import Title from '../commons/title'


export default function Aside() {

  return (
    <>
        <div className="aside">
            <img src="/logo.png" alt="logo" width="120px" height="150px"/>
            <div>
              <Title classStyle= "">Aumenta tu Productividad</Title>
            </div>
            <div className="boxing">
              <img src="/assets/team.svg" alt="team"/>
              <Title classStyle= "">Organiza tus <br/> equipos de Trabajo</Title>
            </div>
            <div className="boxing">
              <img src="/assets/task.svg" alt="task"/>
              <Title classStyle= "">Delega las Tareas</Title>
            </div>
            <div className="boxing">
              <img src="/assets/time.svg" alt="task"/>
              <Title classStyle= "">Supervisa el <br/> tiempo de ejecucion</Title>
            </div>
            <div className="boxing">
              <img src="/assets/idea.svg" alt="task"/>
              <Title classStyle= "">Aumenta la <br/> Creatividad</Title>
            </div>
        </div>
    </>
  )
}
