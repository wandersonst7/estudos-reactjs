import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { useFetch } from '../hooks/useFetch';

const Product = () => {

    const { id } = useParams();
    const url = `http://localhost:3000/products/${id}`
    const { data: product, httpConfig, loading, error } = useFetch(url);

  return (
    <div>
        <p>ID do produto: {id}</p>
        {error && <p>{error}</p>}
        {loading && <p>Carregando...</p> }

        {
            product && (
                <div>
                    <h2>{product.name}</h2>
                    <p>Preço: R$ {product.price}</p>
                    {/* nested routes */}
                    <Link to={`/products/${product.id}/info`}>Mais informações</Link>
                </div>
            )
        }
    </div>
  )
}

export default Product