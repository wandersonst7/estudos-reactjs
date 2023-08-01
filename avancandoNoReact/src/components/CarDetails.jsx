import React from 'react'

const CarDetails = ({brand, km, color, newCar}) => {
  return (
    <div>
        <h5>CarDetails</h5>
        <ul>
            <li>Marca: {brand}</li>
            <li>KM: {km}</li>
            <li>Color: {color}</li>
            {
                newCar === true ? (<li>Novo: SIM</li>) : (<li>Novo: NÃO</li>)
            }
        </ul>
    </div>
  )
}

export default CarDetails