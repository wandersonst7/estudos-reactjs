import React from 'react'

const ChangeMessage = ({handleChangeMessage}) => {

    const messages = ["Oi", "Olá, tudo bem?"];

  return (
    <div>
        <button onClick={() => handleChangeMessage(messages[0])}>MSG 1</button>
        <button onClick={() => handleChangeMessage(messages[1])}>MSG 2</button>
    </div>
  )
}

export default ChangeMessage