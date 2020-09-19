import React, { useState } from 'react'
import './Login.scss'
import Logo from "img/IMG-4.png"
import { Link, useHistory } from "react-router-dom"
import { Button } from "reactstrap"
import { auth } from 'Firebase/config'

const Login = () => {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signIn = (e) => {
    e.preventDefault()

    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push('/')
      })
      .catch(error => alert(error.message))

  }

  // const register = e => {
  //   e.preventDefault()

  //   auth
  //     .createUserWithEmailAndPassword(email, password)
  //     .then(function (auth) {
  //       console.log(auth)
  //       if (auth) {
  //         history.push('/')
  //       }
  //       return auth.user.updateProfile({
  //         displayName: "jose"
  //       })
  //     })
  //     .catch(error => alert(error.message))
  // }

  return (
    <div className="d-flex flex-column align-items-center">
      <Link to="/">
        <img
          className="login_logo mt-3 mb-3 mr-auto ml-auto"
          src={Logo} alt="logo" />
      </Link>
      <div className="login-container d-flex flex-column p-3">
        <h1 className="mb-3">Sign-in</h1>
        <form>
          <h5 className="mb-1">E-mail</h5>
          <input className="mb-2" type="text" value={email} onChange={e => setEmail(e.target.value)} />
          <h5 className="mb-1">Password</h5>
          <input className="mb-2" type="password" value={password} onChange={e => setPassword(e.target.value)} />
          <Button type="submit" onClick={signIn} className="login-signinbutton w-100 mt-2">Sign In</Button>
        </form>

        <p className="mt-3">By signing-in you agree to the CUBIZON Conditions of Use & Sale. Please see our Privacy
            Notice, our Cookies Notice and your Interest-Based Ads Notice</p>

        <Link to="/register" >
          <Button className="login-registerbutton mt-2 w-100">Create your CUBIZON Account</Button>
        </Link>
      </div>
    </div>
  )
}

export default Login
