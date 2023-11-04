import React from 'react'
import './SearchForm.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const SearchForm = () => {
    const navigate = useNavigate();
    const [query, setQuery] = useState();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("OK")
        navigate(`/search?q=${query}`)
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text" onChange={(e) => setQuery(e.target.value)}/>
            <input type="submit" value="Buscar" />
        </form>
    </div>
  )
}

export default SearchForm