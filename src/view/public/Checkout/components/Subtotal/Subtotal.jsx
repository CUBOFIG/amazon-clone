import React from 'react'
import './Subtotal.scss'
import CurrencyFormat from 'react-currency-format'
import { Button } from "reactstrap"
import { ShoppingBasket } from '@material-ui/icons'

const Subtotal = () => {
  return (
    <div className="subtotal d-flex p-3 mr-2 ml-2">

      <CurrencyFormat renderText={(value) => (
        <>
          <p>
            Subtotal (0 items):
            <strong> 0</strong>
          </p>

          <small className="subtotal-gift d-flex align-items-center">
            <input className="mr-1" type="checkbox" /> This order contains a gift
          </small>
        </>
      )}
        decimalScale={2}
        value={0}
        displayType={"text"}
        thousandSeparator={true}
        perfix={"MX"}
      />
      <Button className="button-procced mt-2 w-100">Procced to Checkout</Button>

    </div>
  )
}

export default Subtotal
