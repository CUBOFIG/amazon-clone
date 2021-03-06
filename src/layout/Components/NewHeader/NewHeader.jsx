import React, { useState } from 'react'
import Logo from 'img/IMG-1.png'
import './NewHeader.scss'
import { Search, ShoppingBasket, ArrowDropDown } from '@material-ui/icons'
import { Link } from 'react-router-dom'
import DropDown from '../DropDown/DropDown'
import { useStateValue } from 'container/StateProvider/StateProvider'
import { auth } from 'Firebase/config'

import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem } from 'reactstrap';


const NewHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [drop, setDrop] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const [{ basket, user }] = useStateValue();

  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  }

  const cactivate = () => {
    if (user) {
      setDrop(!drop)
    } else {
      console.log("no se hace nada")
    }
  }

  return (
    <div>
      <Navbar className="color px-1 py-0" light expand="md">
        <NavbarToggler onClick={toggle} className="pr-2 pl-2 togle" />
        <NavbarBrand className="ml-4">
          <Link to="/">
            <img
              src={Logo}
              alt="logo"
              className="header-logo"
            />
          </Link></NavbarBrand>

        <Collapse isOpen={isOpen} navbar>
          <div className="header-search mr-2 ml-2">
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

          <Nav className="ml-auto w-auto" navbar>
            <Link to={!user && '/login'} className="text-decoration-none">
              <NavItem className="header-option" onClick={cactivate}>
                <span className="header-option-lineone">Hello {user ? user?.displayName : "Guest"}</span>
                <span className="header-option-linetwo">{user ? 'Account &  List' : 'Sign In'}</span>
                {drop && (
                  <div className="MUESTRA">
                    <div className="d-flex p-0" >
                      <div className="ORDER w-100 ">
                        <Link className="changecolor m-0 p-0"><p  >My account</p></Link>
                        <Link className="changecolor m-0 p-0"><p>My account</p></Link>
                        <span onClick={handleAuthentication}>Sign off</span>
                      </div>
                      <div className="ORDER w-100 ">
                        <Link className="changecolor m-0 p-0"><p  >My account</p></Link>
                        <Link className="changecolor m-0 p-0"><p>My account</p></Link>
                        <span onClick={handleAuthentication}>Sign off</span>
                      </div>
                    </div>
                  </div>
                )}
              </NavItem>

            </Link>

            <NavItem className="header-option">
              <span className="header-option-lineone">Returns</span>
              <span className="header-option-linetwo">& Orders</span>
            </NavItem>

            <NavItem className="header-option"  >
              <span className="header-option-lineone">Your</span>
              <span className="header-option-linetwo">Prime</span>
            </NavItem>

          </Nav>
          <Link className="header-option-basket mr-4 ml-2" to="/checkout">
            <ShoppingBasket />
            <span className="header-option-linetwo ml-2">{basket?.length}</span>
          </Link>

        </Collapse>


      </Navbar>
    </div>
  )
}

export default NewHeader
