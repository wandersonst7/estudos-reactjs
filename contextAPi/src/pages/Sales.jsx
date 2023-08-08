import useCounterContext from "../hooks/useCounterContext"

const Sales = () => {

  const { counter } = useCounterContext();

  return (
    <div>
        <h1>Vendas</h1>
        <p>Valor do Contador: {counter} </p>
    </div>
  )
}

export default Sales