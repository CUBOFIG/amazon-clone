import React from 'react'
import Logo from 'img/IMG-1.png'
import './Header.scss'
import { Search, ShoppingBasket, ArrowDropDown } from '@material-ui/icons'
import { Link } from 'react-router-dom'
import { useStateValue } from 'container/StateProvider/StateProvider'

const Header = () => {

  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className="header">
      <div className="header-settings">
        <Link to="/">
          <img
            src={Logo}
            alt="logo"
            className="header-logo"
          />
        </Link>

        <div className="header-search">
          <div className="header-search-depart">
            <span>All</span>
            <ArrowDropDown />
          </div>
          <input
            className="header-search-input"
            type="text"
          />
          <Search className="header-search-icon" />
        </div >

        <div className="header-nav">
          <Link to="/login" className="text-decoration-none">
            <div className="header-option">
              <span className="header-option-lineone">Hello Guest</span>
              <span className="header-option-linetwo">Sign In</span>
            </div>
          </Link>
          <div className="header-option">
            <span className="header-option-lineone">Returns</span>
            <span className="header-option-linetwo">& Orders</span>
          </div>
          <div className="header-option">
            <span className="header-option-lineone">Your</span>
            <span className="header-option-linetwo">Prime</span>
          </div>
          <Link className="header-option-basket" to="/checkout">
            <ShoppingBasket />
            <span className="header-option-linetwo header-basketcount">{basket?.length}</span>
          </Link>

        </div>
      </div>
    </div >
  )
}

export default Header
