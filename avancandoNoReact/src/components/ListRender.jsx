import React, { useState } from 'react'

const ListRender = () => {

    const [list, setList] = useState(["Matheus", "Pedro", "Josias"])
    const [users, setUsers] = useState([
        {id: 1, name: "Wanderson", age: 22},
        {id: 2, name: "Bruno", age: 24},
        {id: 3, name: "David", age: 25},
    ])

    const deleteUserRandom = () => {

        const randomNumber = Math.floor(Math.random() * 4);
        // Imprime o numero aleatório gerado
        console.log(randomNumber)

        // o prevUsers é o estado anterior de users

        setUsers( (prevUsers) => {
            // O resultado do filter é SETADO em users atráves do setUsers.
            // Leitura: Retorne usuários que tenham um id diferente do número aleatório gerado.
            return prevUsers.filter( (user) => randomNumber !== user.id )
        } )
    }

  return (
    <div>
        <h2>ListRender</h2>
        <ul>
            {list.map( (item, index) => (<li key={index}>{item}</li>) )}    
        </ul>

        <h2>Usuários</h2>
        <ul>
            {
                users.map( (user) => (<li key={user.id}>{user.name} - {user.age}</li>))
            }
        </ul>
        <button onClick={deleteUserRandom}>Apagar Usuário Aleatório</button>

    </div>
  )
}

export default ListRender