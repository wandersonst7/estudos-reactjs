import React, { useState } from 'react'

const ConditionalRender = () => {

    const [x] = useState(false);
    const [name, setName] = useState("Wanderson");

  return (
    <div>
        <h1>Isso será exibido?</h1>
        {x && <p>Se x for true, sim</p> }
        {!x && <p>Agora x é falso</p>}
        { name === "João" ? 
        ( <div>
            <p>O nome é {name}</p>
        </div> ) : (
        <div>
            <p>Nome não encontrado</p>
        </div>
        )}

        <button onClick={() => setName("João")}>Clique aqui para mudar o nome</button>
    </div>
  )
}

export default ConditionalRender