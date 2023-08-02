import './App.css'
import MyForm from './components/MyForm'

function App() {

  return (
    <>
        <h2>Forms</h2>
        <MyForm user={{name: "Wanderson", email: "wanderson@gmail.com", bio: "teste"}}/>
    </>
  )
}

export default App
