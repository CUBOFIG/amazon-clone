import React from 'react';
import './App.css';
import Checkout from './view/public/Checkout/Checkout'
import Home from './view/public/Home/Home';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/checkout" component={Checkout} />
          <Route
            component={() => (
              <div className="container">
                <h1 className="">ERRO 404</h1>
                <span className="">Página no encontrada</span>
              </div>
            )}
          />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
