import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// pages
import Home from './pages/Home';
import Products from './pages/Products';
import Sales from './pages/Sales';

// components
import NavBar from './components/Navbar';

function App() {

  return (
    <div className="App">
      <Router>
      <NavBar />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/products" element={ <Products /> }/>
          <Route path="/sales" element={ <Sales /> }/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
