import React from 'react'
import './Products.scss'

const Products = ({ title, imagen, price, rating }) => {
  return (
    <div className="product-settings">
      <div className="product-info">
        <p>{title}</p>
        <p className="product-price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product-rating">
          {Array(rating).fill().map((_, i) => (
            <p>⭐</p>
          ))}
        </div>
      </div>
      <img
        src={imagen}
        alt="product"
      />
      <button>Add to Basket</button>
    </div>
  )
}

export default Products
