import './NavBar.css';
import { NavLink, Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav>
        <div>
            <Link to="/">Logo</Link>
        </div>
        <div>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/products">Produtos</NavLink>
            <NavLink to="/sales">Vendas</NavLink>
        </div>
    </nav>
  )
}

export default NavBar