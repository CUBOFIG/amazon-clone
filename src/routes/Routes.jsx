import React from 'react'
import Checkout from 'view/public/Checkout/Checkout'
import Home from 'view/public/Home/Home';
import Login from 'view/public/Login/Login'
import Register from 'view/public/Register/Register'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/checkout" component={Checkout} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route
          component={() => (
            <div className="container">
              <h1 className="">ERRO 404</h1>
              <span className="">Página no encontrada</span>
            </div>
          )}
        />
      </Switch>
    </Router>
  )
}

export default Routes
