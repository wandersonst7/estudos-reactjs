import './App.css'
import City from './assets/city.jpg'
import ManageData from './components/ManageData'
import ListRender from './components/ListRender'
import ConditionalRender from './components/ConditionalRender'

function App() {

  return (
    <>
      <h1>Avançando no React</h1>
      <div>
        <p>Imagem em Public</p>
        <img src="/dog.jpg" alt="Cachorrinho" />
      </div>
      <div>
        <p>Imagem em src</p>
        <img src={City} alt="Cidade" />
      </div>
      <ManageData />  
      <ListRender />
      <ConditionalRender />
    </>
  )
}

export default App
