import React from 'react'
// import Header from "./Components/Header/Header"
import HeaderBottom from './Components/HeaderBottom/HeaderBottom'
import NewHeader from './Components/NewHeader/NewHeader'
import './Layout.scss'

const Layout = ({ children }) => {
  return (
    <div >
      <NewHeader />
      <HeaderBottom />
      <div>
        {children}
      </div>
    </div>
  )
}

export default Layout
