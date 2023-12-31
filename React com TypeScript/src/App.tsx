import './App.css';
import { createContext } from 'react';

// 4 - Importação de componentes
import FirstComponent from './components/FirstComponent';

// 5 - Desestruturando props
import SecondComponent from './components/SecondComponent';
import Destructuring, { Category } from './components/Destructuring';

// 10 - context
import Context from './components/Context';

// 6 - useState
import State from './components/State';

// 9 - Type
type textOrNull = string | null;
type fixed = "Isso" | "Ou" | "Aquilo";

// 10 - context
interface IAppContext {
  language: string,
  framework: string,
  projects: number
}

export const AppContext = createContext<IAppContext | null>(null)

function App() {

  // 1 - Variáveis
  const name: string = "Wanderson";
  const age: number = 22;
  const isWorking: boolean = true;

  // 2 - Funções
  // Tipando o retorno (string)
  const userGreeting = (name: string): string => {
    return `Olá, ${name}`;
  }

  // 9 - Type
  const myText:textOrNull = "Tem algum texto aqui"
  let mySecondText: textOrNull = null;

  // mySecondText = 1;
  const testandoFixed:fixed = "Isso";

  // 10 - context
  const contextValue: IAppContext = {
    language: "JavaScript",
    framework: "Express",
    projects: 5,
  }

  return (
    <AppContext.Provider value={ contextValue }>
      <div className="App">
        <h1>React Com TypeScript</h1>
        <h2>Nome: { name }</h2>
        <h2>Idade: { age }</h2>
        { isWorking && (
          <p>Está trabalhando.</p>
        )}
        <h3>{ userGreeting(name) }</h3>
        <FirstComponent />
        <SecondComponent name="Segundo" />
        <Destructuring 
            title="Primeiro Post" 
            content="Algum conteúdo"
            commentsQty={10}
            tags={ ["ts", "js"] }
            category={Category.TS}
        />
        <State />
        {
          myText && (
            <p>Tem texto na variável</p>
          )
        }
        {
          mySecondText && (
            <p>Tem texto na variável</p>
          )
        }
        <Context />
      </div>
    </AppContext.Provider>
  );
}

export default App;
