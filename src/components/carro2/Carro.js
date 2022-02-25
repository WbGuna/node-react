import React, { useState } from 'react'
import './Carro.css'

function Carro(props) {

    let corFundo2 = 'teste3 '
    corFundo2 += props.verde3 ? 'verde3' : ''
    corFundo2 += props.cinza3 ? 'cinza3' : ''
    corFundo2 += props.roza3 ? 'roza3' : ''
    corFundo2 += props.azul3 ? 'azul3' : ''

    return (
      <>
        <hr/>
        <li className={corFundo2} col-2 mt-5>
            <div className={corFundo2}>Modelo: {props.modelo}</div>
            <div className={corFundo2}>Marca: {props.marca}</div>
            <div className={corFundo2}>Cor: {props.cor}</div>
            <div className={corFundo2}>Ano: {props.ano}</div>
            <div className={corFundo2}>Portas: {props.portas}</div>
            <div className={corFundo2}>Combustivel: {props.combustivel}</div>
            <div className={corFundo2}>Aro: {props.aro}</div>
            <div className={corFundo2}>Cambio: {props.cambio}</div>
            <div className={corFundo2}>Potência: {props.potencia}</div>
            <div className={corFundo2}>Preço: {props.preco}</div>
        </li>
        <hr/>
      </>
    )
}

export default Carro