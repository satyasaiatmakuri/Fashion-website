import React from 'react';
import { Formik, Form } from 'formik';
import { TextField } from './TextField';
import * as Yup from 'yup';
import '../styles/Login-Signup.css'
import { Link } from "react-router-dom";

const SignUp = () => {
  const validate = Yup.object({
    firstName: Yup.string()
      .max(15, 'Must be 15 characters or less')
      .required('Required'),
    middleName: Yup.string()
      .max(15, 'Must be 15 characters or less'),
    lastName: Yup.string()
      .max(20, 'Must be 20 characters or less')
      .required('Required'),
    email: Yup.string()
      .email('Email is invalid')
      .required('Email is required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 charaters')
      .required('Password is required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Password must match')
      .required('Confirm password is required'),
  })
  return (
    <div className='row my-5'>
        <div className='col-6 mx-auto formik'>
            <Formik
              initialValues={{
                firstName: '',
                lastName: '',
                middleName:'',
                email: '',
                password: '',
                confirmPassword: ''
              }}
              validationSchema={validate}
              onSubmit={values => {
                console.log(values)
              }}
            >
                {formik => (
                <div>
                  <Form>
                    <TextField label="First Name" name="firstName" type="text" />
                    <TextField label="Middle Name" name="middleName" type="text" />
                    <TextField label="last Name" name="lastName" type="text" />
                    <TextField label="Email" name="email" type="email" />
                    <TextField label="password" name="password" type="password" />
                    <TextField label="Confirm Password" name="confirmPassword" type="password" />
                    <button className="btn btn-warning m-3" type="submit">Register</button>
                    <button className="btn btn-danger m-3 ml-3" type="reset">Reset</button>
                    <Link to='/Login'><button className="btn btn-dark m-3">Have an Account? Login</button></Link>
                  </Form>
                </div>
                )}        
            </Formik>
        </div>
    </div>
  )
}

export default SignUp;