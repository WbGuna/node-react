import React, { useState } from 'react'
import './Carro.css'

function Carro(props) {

    let corFundo = 'teste '
    corFundo += props.verde ? 'verde' : ''
    corFundo += props.cinza ? 'cinza' : ''
    corFundo += props.roza ? 'roza' : ''
    corFundo += props.azul ? 'azul' : ''

    return (
      <>
        <hr/>
            <div className={corFundo}>Modelo: {props.modelo}</div>
            <div className={corFundo}>Marca: {props.marca}</div>
            <div className={corFundo}>Cor: {props.cor}</div>
            <div className={corFundo}>Ano: {props.ano}</div>
            <div className={corFundo}>Portas: {props.portas}</div>
            <div className={corFundo}>Combustivel: {props.combustivel}</div>
            <div className={corFundo}>Aro: {props.aro}</div>
            <div className={corFundo}>Cambio: {props.cambio}</div>
            <div className={corFundo}>Potência: {props.potencia}</div>
            <div className={corFundo}>Preço: {props.preco}</div>
        <hr/>
      </>
    )
}

export default Carro