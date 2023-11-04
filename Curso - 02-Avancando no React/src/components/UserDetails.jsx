import React from 'react'

const UserDetails = ({nome, idade, profissao}) => {
  return (
    <div>
        <ul>
            <li><strong>Nome:</strong> {nome}</li>
            <li><strong>Idade:</strong> {idade}</li>
            <li><strong>Profissão:</strong> {profissao}</li>
        </ul>
        <p>Pode tirar habilitação? {idade >= 18 ? (<strong>SIM</strong>) : (<strong>NÃO</strong>)} </p>
        <hr />
    </div>
  )
}

export default UserDetails