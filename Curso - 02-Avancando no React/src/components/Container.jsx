import React from 'react'

const Container = ({ children, myValue }) => {
  return (
    <div>
        <h2>Este é o titulo do container</h2>
        {children}
        <p>O meu valor é: {myValue}</p>
    </div>
  )
}

export default Container