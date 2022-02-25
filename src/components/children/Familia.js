import React, { useState } from 'react'

function Familia(props) {

    return (
      <>
        <h2>[inicio] Membros da Familia</h2>
            {props.children}
        <h2>[Fim] Membros da Familia</h2>
      </>
    )
}

export default Familia