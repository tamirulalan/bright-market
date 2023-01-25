import React from 'react'
import { Link } from 'react-router-dom'
import data from '../data'

const ProductList = () => {
  return (
    <main> 
        <h1>List Product</h1>
        <div className="products">
          {data.products.map((product)=>(
              <div className="product" key={product.slug}>
                <Link to={`/product/${product.slug}`}><img src={product.image} alt={product.name} /></Link>
                
                <div className="product-info">
                    <Link to={`/product/${product.slug}`}>
                    <p>{product.name}</p>
                    </Link>
                    <p> <b>${product.price}</b></p>
                    <button>Add to Cart</button>
                </div>
              
              </div>
            ))}
          </div>
       </main>
  )
}

export default ProductList
