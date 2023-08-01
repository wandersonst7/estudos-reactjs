import './App.css'
import City from './assets/city.jpg'
import ManageData from './components/ManageData'
import ListRender from './components/ListRender'
import ConditionalRender from './components/ConditionalRender'
import ShowUserName from './components/ShowUserName'
import CarDetails from './components/CarDetails'
import Fragments from './components/Fragments'
import Container from './components/Container'
import ExecuteFunction from './components/ExecuteFunction'
import Message from './components/Message'
import { useState } from 'react'
import ChangeMessage from './components/ChangeMessage'
import UserDetails from './components/UserDetails'

function App() {

  const idade = 22;

  const cars = [
    {id: 1, brand: "Ferrari", km: 345, color: "Amarelo", newCar:false },
    {id: 2, brand: "KIA", km: 0, color: "Amarelo", newCar:true },
    {id: 3, brand: "Audi", km: 345, color: "Amarelo", newCar:false },
    {id: 4, brand: "FIAT", km: 34523, color: "Amarelo", newCar:false },
    {id: 5, brand: "Ford", km: 0, color: "Amarelo", newCar:true },
  ] 

  const showMessage = () => {
    console.log("Evento do componente PAI")
  }

  const [message, setMessage] = useState();

  const handleChangeMessage = (msg) => {
    setMessage(msg)
  }

  const users = [
    {id: 1, nome: "Wanderson", idade: 22, profissao: "Programador"},
    {id: 2, nome: "Pedro", idade: 17, profissao: "Estudante"},
    {id: 3, nome: "Jonatas", idade: 27, profissao: "Enfermeiro"},
    {id: 4, nome: "Mario", idade: 15, profissao: "Estudante"},
    {id: 5, nome: "José", idade: 25, profissao: "Policial"}
  ]

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
      <ShowUserName name="Wanderson" age={idade}/>
      {/* Renderizando vários componentes */}
      <CarDetails brand="FIAT" km="550" color="Vermelho" newCar={false}/>
      <CarDetails brand="Ford" km="0" color="Azul" newCar={true}/>
      <CarDetails brand="Chevrolet" km="3450" color="Amarelo" newCar={false}/>
       {/* Renderizando vários componentes através de um array de objetos*/}
       {
        cars.map( (car) => (
          <CarDetails key={car.id} brand={car.brand} km={car.km} color={car.color} newCar={car.newCar} />
        ) )
       }
       {/* React Fragments */}
       <Fragments/>

       {/* prop Children */}
       <Container myValue={22}>
        <p>E este é o conteúdo</p>
       </Container>

       {/* Executar função */}
       <ExecuteFunction myFunction={showMessage}/> 

       {/* State Lift */}
      <Message msg={message}/>
      <ChangeMessage handleChangeMessage={handleChangeMessage}/>

       {/* Desafio 4 */}

       <h1>Desafio 4</h1>
       {
        users.map( (user) => {
          return (<UserDetails key={user.id} nome={user.nome} idade={user.idade} profissao={user.profissao}/>)
        } )
       }
    </>
  )
}

export default App
