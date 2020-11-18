import React from 'react'
import './CategoryContainer.scss'
import { useStateValue } from 'container/StateProvider/StateProvider'


import P2 from 'img/IMG-8.png'
import P3 from 'img/IMG-7.png'
import P4 from 'img/IMG-6.png'
import P5 from 'img/IMG-5.png'

const CategoryContainer = ({ children }) => {

  const [{ user }] = useStateValue();

  return (

    <div className="productscategory">
      <div className="product-settings w-100   d-flex align-items-center">
        <h5 className="mt-2">Hi {user?.displayName} welcome.</h5>
        <p className="m-1">Recommendations for you</p>
        <div>
          <img src={P3} alt="imgcategory" className="product-img" />
        </div>
      </div>
    </div>

    // <div className="productscategory">
    //   <div className="product-settings w-100 ">
    //     <h5 className="mt-2">Hi {user?.displayName} welcome.</h5>
    //     <div className="p-2">
    //       <p className="m-1">Recommendations for you</p>

    //       <div className="d-flex aling-items-center justify-content-center">
    //         <img src={P3} alt="" className="m-1 select-this" />
    //         <img src={P2} alt="" className="m-1 select-this" />
    //       </div>
    //       <div className="d-flex aling-items-center justify-content-center">
    //         <img src={P4} alt="" className="m-1 select-this" />
    //         <img src={P5} alt="" className="m-1 select-this" />
    //       </div>
    //     </div>
    //   </div>
    // </div>
  )
}

export default CategoryContainer
