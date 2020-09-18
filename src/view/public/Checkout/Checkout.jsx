import React from 'react'
import Layout from 'layout/Layout'
import './Checkout.scss'
import Ad from "img/IMG-3.png"
import Subtotal from './components/Subtotal/Subtotal'
import CheckoutProduct from './components/CheckoutProduct/CheckoutProduct'
import { useStateValue } from 'container/StateProvider/StateProvider'

const Checkout = () => {

  const [{ basket }, dispatch] = useStateValue();

  return (
    <Layout>
      <div className="checkout d-flex p-3">
        <div className="checkout-left">
          <img
            src={Ad}
            className="checkout-ad w-100 mb-2"
            alt="adimg" />
          <div>
            <h2 className="checkout-title mr-2 p-2">Your shopping Basket</h2>
            {basket.map((item, i) => (
              <CheckoutProduct
                key={i}
                id={item.id}
                image={item.image}
                title={item.title}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        </div>

        <div className="checkout-right">
          <Subtotal />
        </div>
      </div>
    </Layout>
  )
}

export default Checkout
