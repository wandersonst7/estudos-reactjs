import './App.css'
import CarDetails from './components/CarDetails'

function App() {

  const cars = [
    {id: 1, brand: "Audi", color: "Vermelho", km: 0},
    {id: 2, brand: "FIAT", color: "Branco", km: 0},
    {id: 3, brand: "Ferrari", color: "Azul", km: 0}
  ]

  return (
    <div className='App'>
      <h1>Carros</h1>

      { cars.map( (car) => (<CarDetails key={car.id} brand={car.brand} color={car.color} km={car.km}/>)) }

      
    </div>
  )
}

export default App
