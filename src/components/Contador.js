import React, { useState } from 'react'

function Contador(props){


    const [numero, setNumero] = useState(props.inicial);
    
  
    const incremento = () => {
        if(numero == props.limite){
            alert("Aqui é o limite")
            return
        }
        setNumero(numero + props.passo);
        
    }

    const decremento = () => {
        if(numero == 0){
            alert("Desculpe menos não vai");
            return
        }
        setNumero(numero - props.passo);
        
    }

    return(
        <>
            <h2>{numero}</h2>
            <button onClick={incremento}>+</button>
            <button onClick={decremento}>-</button>
        </>
    )
}
export default Contador;