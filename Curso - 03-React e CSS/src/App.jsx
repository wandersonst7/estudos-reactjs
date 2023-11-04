import './App.css'
import MyComponent from './components/MyComponent'
import Title from './components/Title';

function App() {

  const n = 15;
  const redTitle = true;

  return (
    <>
      <div>
        {/* CSS GLOBAL */}
        <h1>React CSS</h1>
        {/* CSS de Componente */}
        <p>Parágrafo do App.jsx</p>
        <MyComponent />
        
        {/* CSS Inline */}
        <p style={{ color: "#f8f8f8", padding: "20px", borderBottom: "3px solid red"}}>Este paragrafo foi estilizado com css inline</p>
        
        {/* CSS Inline Dinâmico */}
        <h2 style={n > 10 ? ({color: "purple"}) : ({color: "blue"}) }>CSS Dinâmico</h2>
        <h2 style={n < 10 ? ({color: "purple"}) : null }>CSS Dinâmico</h2>

        {/* Classes Dinâmicas */}
        <h2 className={redTitle ? "red-title": "purple-title"}>Este titulo vai ter classe dinâmica</h2>

        {/* CSS Modules */}
        <Title />
      </div>
    </>
  )
}

export default App
