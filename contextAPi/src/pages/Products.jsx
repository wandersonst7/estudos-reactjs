import useCounterContext from "../hooks/useCounterContext";

const Products = () => {

  // refatorando com hook
  const { counter } = useCounterContext();

  return (
    <div>
        <h1>Produtos</h1>
        <p>Valor do Contador: {counter} </p>
    </div>
  )
}

export default Products