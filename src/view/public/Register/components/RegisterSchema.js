import * as Yup from 'yup'

const initialValues = { email: '', password: '', displayName: '', repassword: '' }

const LoginValidation = Yup.object({
  email: Yup.string()
    .email()
    .max(255)
    .required(),

  displayName: Yup.string()
    .max(255)
    .required(),

  password: Yup.string()
    .min(8)
    .max(255)
    .required(),

  repassword: Yup.string()
    .min(8)
    .max(255)
    .required(),
})

export { initialValues, LoginValidation }
