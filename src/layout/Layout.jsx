import React from 'react'
import Header from "./Components/Header/Header"
import HeaderBottom from './Components/HeaderBottom/HeaderBottom'
import './Layout.scss'

const Layout = ({ children }) => {
  return (
    <div >
      <Header />
      <HeaderBottom />
      <div>
        {children}
      </div>
    </div>
  )
}

export default Layout
