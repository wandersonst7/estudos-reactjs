import React from 'react'

// Utilizando props
// const ShowUserName = (props) => {
//   return (
//     <div>
//         <h2>Nome do usuário: {props.name}</h2>
//         <h3>Idade do usuário: {props.age}</h3>
//     </div>
//   )
// }

// Utilizando Destructuring
const ShowUserName = ({name, age}) => {
      return (
        <div>
            <h2>Nome do usuário: {name}</h2>
            <h3>Idade do usuário: {age}</h3>
        </div>
      )
    }

export default ShowUserName