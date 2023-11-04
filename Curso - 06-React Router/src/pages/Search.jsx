import React from 'react'
import { useSearchParams, Link } from 'react-router-dom'
import { useFetch } from '../hooks/useFetch'

const Search = () => {

    const [searchParams] = useSearchParams();
    const url = "http://localhost:3000/products?" + searchParams;

    // searchParams.get("q") // aqui eu pego o valor da chave "q" que foi enviado na pesquisa
    // EX: /pagina?nome=wanderson // "nome" é a chave

    const {data:products, loading, error} = useFetch(url)

  return (
    <div>
        <h1>Resultados para: <span style={{color: "purple"}}>{searchParams.get("q")}</span></h1>
        {error && <p>{error}</p>}
        {loading && <p>Carregando...</p> }
        {
            products && products.map((product) => (
              <li key={product.id}>
                <h2>{product.name}</h2> 
                <p>R$: {product.price}</p>
                <Link to={`/products/${product.id}`}>Detalhes</Link>
              </li>
            ))
         }
    </div>
  )
}

export default Search