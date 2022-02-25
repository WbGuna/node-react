import React, { useState } from 'react'


//Exemplo "quebrando", desistruturando a props!

// function ParImpar({num = 0}) {

//     return (
//       <>
//         <div>
//             <h2>O resultado é:</h2>
//             {num % 2 == 0 ? <h3>Par</h3> : <h3>Impar</h3>}
//         </div>
//       </>
//     )
// }

function ParImpar(props){

    let numero = 0;
    numero = props.num ? props.num : 0;

    return(
        <div>
            <h2>O resultado é:</h2>
            {numero % 2 == 0 ? <h3>Par</h3> : <h3>Impar</h3>}
        </div>
    )

}

export default ParImpar