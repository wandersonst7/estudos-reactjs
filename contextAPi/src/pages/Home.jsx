import React from 'react';
import { useContext } from 'react';
import { CounterContext } from '../context/CounterContext';
import ChangeCounter from '../components/ChangeCounter';
import { useTitleColorContext } from '../hooks/useTitleColorContext';

const Home = () => {

  const {counter} = useContext(CounterContext);
  
  // 5 - context complexo
  const { color, dispatch } = useTitleColorContext();

  // 6 - alterando contexto complexo
  const setTitleColor = (color) => {
    dispatch({type: color});
  }

  return (
    <>
        <h1 style={{color: color}}>Home</h1>
        <p>Valor do Contador: {counter}</p>
        {/* 3 - alterando contexto */}
        <ChangeCounter />
        {/* 6 - alterndo contexto complexo */}
        <div>
          <button onClick={() => setTitleColor("GREY") }>Cinza</button>
          <button onClick={() => setTitleColor("RED") }>Vermelho</button>

        </div>
    </>
  )
}

export default Home