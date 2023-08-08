import useCounterContext from "../hooks/useCounterContext"
import './ChangeCounter.css'

const ChangeCounter = () => {

  // 3 - alterando contexto
    const { counter, setCounter } = useCounterContext();

  return (
    <div className="changeCounter">
        <button onClick={() => setCounter(counter + 1)}>Contador</button>
    </div>
  )
}

export default ChangeCounter