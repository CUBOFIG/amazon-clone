import React from 'react'
import './Subtotal.scss'
import CurrencyFormat from 'react-currency-format'
import { Button } from "reactstrap"
import { useStateValue } from 'container/StateProvider/StateProvider'
import { getBasketTotal } from 'Firebase/Reducers/Inventory'


const Subtotal = () => {

  const [{ basket }, dispatch] = useStateValue()

  return (
    <div className="subtotal d-flex p-3 mr-2 ml-2">

      <CurrencyFormat renderText={(value) => (
        <>
          {
            basket.length >= 1
              ? (<p>
                Subtotal ({basket?.length} items):
                <strong>{` ${value}`}</strong>
              </p>
              ) : (
                <p>No products selected</p>
              )
          }

          <small className="subtotal-gift d-flex align-items-center">
            <input className="mr-1" type="checkbox" /> This order contains a gift
          </small>
        </>
      )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        perfix={"MX"}
      />
      <Button className="button-procced mt-2 w-100">Procced to Checkout</Button>

    </div>
  )
}

export default Subtotal
