import React from 'react'
import './CheckoutProduct.scss'
import { Button } from "reactstrap"
import { useStateValue } from 'container/StateProvider/StateProvider'

const CheckoutProduct = ({ id, image, title, price, rating }) => {

  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    })
  }

  return (
    <div className="checkoutproduct d-flex mb-3 bt-3">
      <img src={image} alt="product" className="checkoutproduct-image" />
      <div className="checkoutproduct-info pl-3">
        <p className="checkoutproduct-title">{title}</p>
        <p className="checkoutproduct-price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutproduct-rating d-flex">
          {Array(rating).fill().map((_, i) => (
            <p key={i} className="product-star">⭐</p>
          ))}
        </div>
        <Button onClick={removeFromBasket} className="checkout-button mt-2">Remove from Basket</Button>
      </div>
    </div>
  )
}

export default CheckoutProduct
