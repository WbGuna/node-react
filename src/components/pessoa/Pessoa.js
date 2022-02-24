import React, { useState } from 'react'

function Pessoa(props) {

    console.log(props)

    return (
      <>
        <hr/>
            <div>Nome: {props.nome}</div>
            <div>Idade: {props.idade}</div>
            <div>Sexo: {props.sexo}</div>
            <div>Estado Civil: {props.estado_civil}</div>
        <hr/>
      </>
    )
}

export default Pessoa