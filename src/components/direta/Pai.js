import React, { useState } from 'react'
import Filho from './Filho'


function Pai(props) {

    let x = 15
    let y = 200

    return (
      <>
            <Filho a={x} b={y}/>
            <Filho a={x + 15} b={y + 15}/>
      </>
    )
}

export default Pai