import "./NavBar.css";

// components
import { NavLink, Link } from "react-router-dom";

// icons
import { BsSearch, BsHouseDoorFill, BsFillPersonFill, BsFillCameraFill } from "react-icons/bs";

// hooks
import { useAuth } from "../hooks/useAuth";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

// Redux
import { logout, reset } from "../slices/authSlice";

const NavBar = () => {

  const { auth } = useAuth();
  const { user } = useSelector((state) => state.auth);

  const [query, setQuery] = useState("");

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    dispatch(reset());
    
    navigate("/login")
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if(query) {
      return navigate(`/search?q=${query}`)
    }
  }

  return (
    <nav id="nav">
      <Link to="/">ReactGram</Link>
      <form id="search-form" onSubmit={ handleSubmit }>
        <BsSearch />
        <input type="text" placeholder="Pesquisar" onChange={(e) => setQuery(e.target.value) }/>
      </form>
      <ul id="nav-links">
        { auth ? (
          <>
            <li>
              <NavLink to="/">
                <BsHouseDoorFill />
              </NavLink>
           </li>
           { user && (
              <li>
                <NavLink to={`/users/${user._id}`}>
                  <BsFillCameraFill />
                </NavLink>
              </li>
           )}
              <li>
                <NavLink to={`/profile`}>
                  <BsFillPersonFill />
                </NavLink>
              </li>
              <li>
                <span onClick={handleLogout}>Sair</span>
              </li>
          </>
        ) : (
          <>
            <li>
              <NavLink to="/login">
                Entrar
              </NavLink>
            </li>
            <li>
              <NavLink to="/register">
                Cadastrar
              </NavLink>
            </li>
          </>
        )}

      </ul>
    </nav>
  )
}

export default NavBar;