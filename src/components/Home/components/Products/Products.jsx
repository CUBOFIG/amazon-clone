import { useStateValue } from 'container/StateProvider/StateProvider'
import React from 'react'
import './Products.scss'

const Products = ({ id, title, image, price, rating }) => {

  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    dispatch({
      type: 'ADD_TO_BASKET',
      item: {
        id: id,
        tittle: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

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
          src={image}
          alt="product"
          className="product-img"
        />
        <button onClick={addToBasket}>Add to Basket</button>
      </div>
    </div>
  )
}

export default Products
