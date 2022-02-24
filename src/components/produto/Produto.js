import React, { useState } from 'react'
import './Produto.css'


function Produto(props) {

    let btnClasses = 'btn-comprar '
    btnClasses += props.verde ? 'verde1' : ''
    btnClasses += props.azul ? 'azul1' : ''
    btnClasses += props.preto ? 'preto' : ''
    // if(props.verde){
    //     btnClasses = btnClasses + 'verde'
    // }

    return (
      <>
        <li className="item">
            <div className="nome">{props.nome}</div>
            <div className="marca">{props.marca}</div>
            <div className="valor">R${props.valor}</div>
            <button className={btnClasses}>Comprar</button>
        </li>
      </>
    )
}

export default Produto