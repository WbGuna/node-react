import React, { useState } from 'react'

function Filho(props) {

    function gerarNumero(){
        return Math.random()
    }

    return (
      <>
        
        <button onClick={function () {
                const n = gerarNumero()
                props.valor(n, 'O valor é: ')
            }}>
            Executar

        </button>
        <hr/>
      </>
    )
}

export default Filho