import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// Exportação Nomeada: 
// import { FirstComponent } from './components/FirstComponent';

// Exportação Padrão:
import FirstComponent from './components/FirstComponent';
import TemplateExpressions from './components/TemplateExpressions';
import Events from './components/Events';
import Challenge from './components/Challenge';

function App() {
  return (
    <>
      <h1>Fundamentos</h1>
      <FirstComponent />
      <TemplateExpressions />
      <Events />
      <Challenge />
    </>
  )
}

export default App;
