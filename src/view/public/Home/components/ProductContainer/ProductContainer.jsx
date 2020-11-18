import React from 'react'
import './ProductContainer.scss'
import IMG from "img/IMG-9.jpg"

const ProductContainer = ({ data }) => {

  return (
    <div className="products-container">
      <div className="product-settings d-flex w-100 align-items-center">
        <h4 >{data.name}</h4>
        <div>
          <img src={data.img} alt="imgcategory" className="product-img" />
        </div>
      </div>
    </div>
  )
}

export default ProductContainer
