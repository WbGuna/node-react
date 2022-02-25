import React, { useState } from 'react'

function DigiteSeuNome(props) {

  const [nome, setNome] = useState ('')
  const [email, setEmail] = useState ('')

    return (
      <>
        <h2>{nome}</h2>
        <h2>{email}</h2>
        <input type="text" placeholder='Digite seu Nome' value={nome} onChange={event => setNome(event.target.value)}/>
        <input type="text" placeholder='Digite seu Email' value={email} onChange={event => setEmail(event.target.value)}/>
      </>
    )
}

export default DigiteSeuNome