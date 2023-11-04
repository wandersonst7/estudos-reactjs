import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  // StrictMode auxilia nos testes e faz com que o componente seja renderizado 2X
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
