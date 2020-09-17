import React from 'react'
import './Products.scss'

const Products = ({ title, imagen, price, rating }) => {
  return (
    <div className="products">
      <div className="product-settings d-flex w-100 align-items-center">
        <div className="product-info">
          <p>{title}</p>
          <p className="product-price">
            <small>$</small>
            <strong>{price}</strong>
          </p>
          <div className="product-rating">
            {Array(rating).fill().map((_, i) => (
              <p key={i} className="product-star">⭐</p>
            ))}
          </div>
        </div>
        <img
          src={imagen}
          alt="product"
          className="product-img"
        />
        <button>Add to Basket</button>
      </div>
    </div>
  )
}

export default Products
