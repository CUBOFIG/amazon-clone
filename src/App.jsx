import React, { useEffect } from 'react';
import './App.css';
import Checkout from './view/public/Checkout/Checkout'
import Home from './view/public/Home/Home';
import Login from 'view/public/Login/Login'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { auth } from './Firebase/config'
import { useStateValue } from 'container/StateProvider/StateProvider';

function App() {

  const [{ }, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      console.log("aqui>>>>>", authUser);

      if (authUser) {
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/checkout" component={Checkout} />
          <Route path="/login" component={Login} />
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
