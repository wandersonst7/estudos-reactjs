import { useReducer }from 'react';
import "./Form.css";

const Form = () => {

    const formReducer = (state, action) => {
        switch(action.type){
            case "name":
                return {...state, name: action.value}
            case "email":
                return {...state, email: action.value}
            case "age": 
                return {...state, age: action.value}
            default:
                return "Esta ação não existe.";
        }
    }

    const [state, dispatch] = useReducer(formReducer, {
        name: "",
        email: "",
        age: ""
    })

    const { name, email, age} = state;
    console.log(name, email, age)

    const handleSubmit = (e) => {
        e.preventDefault();

        const user = {
            name,
            email,
            age
        }

        console.log(user)
    }

  return (
    <div id="form">
        <h1>Praticando useReducer</h1>
        <form onSubmit={ handleSubmit }>
            <div>
                <label>
                    <span>Nome: </span>
                    <input type="text" 
                           placeholder="Digite seu nome"
                           onChange={(e) => dispatch({type: "name", value: e.target.value })}
                           value={ name || ""} />
                </label>
            </div>
            <div>
                <label>
                    <span>Email: </span>
                    <input type="email" 
                           placeholder="Digite seu email"
                           onChange={(e) => dispatch({type: "email", value: e.target.value })}
                           value={ email || ""}  />
                </label>
            </div>
            <div>
                <label>
                    <span>Idade: </span>
                    <input type="number" 
                           placeholder="Digite sua idade"
                           onChange={(e) => dispatch({ type: "age", value: e.target.value })}
                           value={ age || ""} />
                </label>
            </div>
            <div>
                <input type="submit" value="Enviar" />
            </div>
        </form>
    </div>
  )
}

export default Form