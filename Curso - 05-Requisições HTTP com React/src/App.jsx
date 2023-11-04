import './App.css'
import { useState, useEffect } from 'react'
import { useFetch } from './hooks/useFetch';

  // url base
  const url = "http://localhost:3000/products";

function App() {

  // 4 - custom hook
  // data:items está renomeando o que vem do useFetch (data)
  // para "items"
  const { data:items, httpConfig, loading, error } = useFetch(url);
  
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");


  // 1 - resgatando dados
  // useEffect( () => {
    
  //   // utilizei IIFE
  //   (async function fetchData(){
  //     const res = await fetch(url);
  //     const data = await res.json();
  
  //     setProducts(data)
  //   })()


  // }, [])

  // 2 - add de produtos
  const handleSubmit = async (e) => {
    e.preventDefault();

    const product = {
      name, price
    };

    // const res = await fetch(url, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json"
    //   },
    //   body: JSON.stringify(product)
    // });

    // // 3 - carregamento dinâmico
    // const addedProducts = await res.json();
    // setProducts( (prevProducts) => [...prevProducts, addedProducts] )

    // 5 - refatorando post
    httpConfig(product, "POST");

    setName("")
    setPrice("")


  }

  const handleDelete = (id) => {
    httpConfig(id, "DELETE")
  }


  return (
    <div className="App">
      <h1>Lista de Produtos</h1>
      {/* 6 - loading */}

      {loading && <p>Carregando dados...</p>}
      {error && <p>{error}</p> }
      {!error && (
          <ul>
          {
            items && items.map( (product) => (
              <li style={{marginBlock: "1rem"}} key={product.id}>
                {product.name} - R$: {product.price} 
                {loading && <button style={{marginLeft: "1rem"}} disabled>Aguarde...</button>}
                {!loading && <button style={{marginLeft: "1rem"}} onClick={() => handleDelete(product.id)}>Excluir</button>}
              </li>
            ))
          }
        </ul>
        )}

      <div className="addProduct">
        <form onSubmit={handleSubmit}>
          <label>
            <span>Nome: </span>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
          </label>
          <label>
            <span>Price: </span>
            <input type="number" value={price} onChange={(e) => setPrice(e.target.value)}/>
          </label>

          {/* 6 - state de loading no post */}
          {loading && <input type="submit" value="Aguarde..." disabled/>}
          {!loading && <input type="submit" value="Enviar"/>}
          
        </form>
      </div>
    </div>
  )
}

export default App
