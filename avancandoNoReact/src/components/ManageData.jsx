import { useState } from "react";

const ManageData = () => {

  let someData = 10;
  console.log(someData)

  const [number, setNumber] = useState(15);

  console.log(number)

  return (
    <div>
      <div>
        <h4>Sem useState: </h4>
        <p>Valor: {someData} </p>
        <button onClick={ () => {someData = 15; console.log(someData)} }>Mudar Valor</button>
      </div>
      <div>
        <h4>Com useState: </h4>
        <p>Valor: {number} </p>
        <button onClick={ () => {setNumber(20)} }>Mudar Valor</button>
      </div>
    </div>
  )
}

export default ManageData