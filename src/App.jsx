import React, { useEffect } from 'react';
import './App.css';
import { auth } from './Firebase/config'
import { useStateValue } from 'container/StateProvider/StateProvider';
import Routes from 'routes/Routes';

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
    <div className="app">
      <Routes />
    </div>
  );
}

export default App;
