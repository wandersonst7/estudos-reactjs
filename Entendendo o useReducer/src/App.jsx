import './App.css'
import { useState, useReducer } from 'react'
import Form from './components/Form'
 
function App() {

  // recebe o state e a action por padrão
  const reducer = (state, action) => {
    // é muito utilizado no reducer a função do switch-case
    switch(action.type){
      
      case "Increment":
        return { ...state, count: state.count + 1 }
        // return state.count + 1; // se fizer isso, vai acabar sobrescrevendo o state completo (apagando assim o showtext)

      case 'showText':
        return { ...state, showText: !state.showText}

      default:
        return "Esta ação não existe.";
    }

  }

  const [state, dispatch] = useReducer(reducer, {
    count: 0,
    showText: true,
  });

  // desestruturando state do reducer
  const { count, showText } = state;

  // const [count, setCount] = useState(0);
  // const [showText, setShowText] = useState(true);

  const handleClick = () => {
    // O dispatch é na verdade usada para passar as actions para a função reducer declarada no inicio do componente.
    dispatch({ type: "Increment" })
    dispatch({ type: "showText" })
  }

  return (
    <div className='App'>
        <h1>useReducer</h1>
        <h3>{ count }</h3>
        <button onClick={ handleClick }>Clique</button>
        { showText && <p>Aprendendo useReducer</p>}
        <Form />
    </div>
  )
}

export default App;
