import { useState, ChangeEvent } from "react"

type Props = {}

const State = () => {

    const [text, setText] = useState<string | null>(null);

    // Definindo tipo de evento
    // Palavra-chave: GENERIC  
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value)
    }

  return (
    <div>
        <p>O texto é: { text }</p>
        <input type="text" onChange={ handleChange } />
    </div>
  )
}

export default State