import React from 'react'
import { Formik, Form } from 'formik'
import Logo from 'img/IMG-4.png'
import './RegisterForm.scss'
import FormField from 'shared/Formik/FormField/FormField'
import { useHistory } from 'react-router-dom'
import { initialValues, LoginValidation } from './RegisterSchema'
import { Link } from "react-router-dom"
import { auth } from 'Firebase/config'
import { Col } from 'reactstrap'

const RegisterForm = () => {
  const history = useHistory()

  const onCompleteForm = (value) => {
    if (value.password === value.repassword) {
      auth
        .createUserWithEmailAndPassword(value.email, value.password)
        .then(function (auth) {
          console.log(auth)
          if (auth) {
            history.push('/')
          }
          return auth.user.updateProfile({
            displayName: value.displayName
          })
        })
        .catch(error => alert(error.message))
    } else {
      alert("Sus contraseñas son diferentes")
    }
  }

  return (
    <Formik validationSchema={LoginValidation} initialValues={initialValues} onSubmit={onCompleteForm}>
      <Col xs="12" sm="12" md="6" lg="4" xl="3" className="mx-auto">
        <Form>
          <div className="d-flex flex-column align-items-center">
            <Link to="/">
              <img
                className="login_logo mt-3 mb-3 mr-auto ml-auto"
                src={Logo} alt="logo" />
            </Link>
          </div>
          <div className="card card-body h-100 justify-content-div">
            <p className="title-register pb-2">Create Account</p>
            <FormField name="email" label="E-mail" />
            <FormField name="password" component="password" label="Password" />
            <FormField name="repassword" component="password" label="Re-enter password" />
            <FormField name="displayName" label="Your Name" />
            <button type="submit" className="mt-5 registerbutton btn btn-md btn-primary btn-block mt-3">Submit</button>
          </div>
        </Form>
      </Col>
    </Formik>
  )
}

export default RegisterForm