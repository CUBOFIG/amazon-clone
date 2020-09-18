import React, { useState } from 'react'
import './Login.scss'
import Logo from "img/IMG-4.png"
import { Link } from "react-router-dom"
import { Button } from "reactstrap"

const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signIn = (e) => {
    e.preventDefault()
  }

  const register = (e) => {
    e.preventDefault()
  }

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

        <Button onClick={register} className="login-registerbutton mt-2">Create your CUBIZON Account</Button>
      </div>
    </div>
  )
}

export default Login
