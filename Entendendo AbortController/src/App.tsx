import './App.css'

// interfaces
import { IProdutoResponse } from "./interfaces/IProduto";

// hooks
import { useState, useEffect } from 'react';
import { getProdutos } from './hooks/useProdutos';

const Component = () => {
  const [produtos, setProdutos] = useState<IProdutoResponse[]>([]);

  useEffect(() => {

    const controller = new AbortController();

    const getProdutosData = async () => {
      try {
        const produtos = await getProdutos(controller.signal);
        setProdutos(produtos);
      } catch (error) {
        console.log("Erro ao obter produtos: " + error)
      }
    }

    getProdutosData();

    return () => {
      console.log("Cancelando requisição...")
      controller.abort();
    }

  }, [])

  return (
    <>
      { produtos.map((produto) => (
        <div key={produto.id}>
          <h2>{produto.nome}</h2>
        </div>
      )) }
    </>
  )

}

function App() {

  const [visible, setVisible] = useState<boolean>(false);

  return (
    <div className="App">
      <h1>Produtos</h1>
      <button onClick={() => setVisible(!visible)}>Click</button>
      { visible && <Component />}
    </div>
  )
}

export default App
