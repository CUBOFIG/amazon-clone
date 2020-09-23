import React from 'react'
import './LoginForm.scss'
import Logo from 'img/IMG-4.png'
import { Link, useHistory } from "react-router-dom"
import { Button } from "reactstrap"
import { auth } from 'Firebase/config'
import { Formik, Form } from 'formik'
import { Col } from 'reactstrap'
import { initialValues, LoginValidation } from './LoginSchema'
import FormField from 'shared/Formik/FormField/FormField'

function LoginForm() {

  const history = useHistory()

  const onCompleteForm = (value) => {
    auth
      .signInWithEmailAndPassword(value.email, value.password)
      .then((auth) => {
        history.push('/')
      })
      .catch(error => alert(error.message))
  }

  return (
    < Formik validationSchema={LoginValidation} initialValues={initialValues} onSubmit={onCompleteForm} >
      <Col xs="12" sm="12" md="6" lg="4" xl="3" className="mx-auto">
        <div className="login">
          <Form>
            <div className="d-flex flex-column align-items-center">
              <Link to="/">
                <img
                  className="login-logo mt-3 mb-3 mr-auto ml-auto"
                  src={Logo} alt="logo" />
              </Link>
            </div>
            <div className="card card-body h-100 justify-content-div">
              <p className="title-login pb-2">Create Account</p>
              <FormField name="email" label="E-mail" />
              <FormField name="password" component="password" label="Password" />
              <button type="submit" className="mt-5 login-button btn btn-md btn-primary btn-block mt-3">
                Sign In
              </button>
              <p className="mt-3">
                By signing-in you agree to the CUBIZON Conditions of Use & Sale. Please see our Privacy
                Notice, our Cookies Notice and your Interest-Based Ads Notice
              </p>
              <Link to="/register" >
                <Button className="login-registerbutton mt-2 w-100">Create your CUBIZON Account</Button>
              </Link>
            </div>
          </Form>
        </div>
      </Col>
    </Formik >
  )
}

export default LoginForm


