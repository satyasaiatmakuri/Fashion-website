import React from 'react';
import { Formik, Form } from 'formik';
import { TextField } from './TextField';
import * as Yup from 'yup';
import '../styles/Login-Signup.css'
import { Link } from 'react-router-dom';

const SignUp = () => {
  const validate = Yup.object({
    email: Yup.string()
      .email('Username is invalid. Hint: Enter your mail as User Name')
      .required('Username is required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 charaters')
      .required('Password is required'),
  })
  return (
    <div className='row my-5'>
        <div className='col-6 mx-auto formik'>
            <Formik
              initialValues={{
                email: '',
                password: '',
              }}
              validationSchema={validate}
            >
                {formik => (
                <div>
                  <Form>
                    <TextField label="User Name" name="email" type="email" />
                    <TextField label="password" name="password" type="password" />
                    <Link to='/'><button className="btn btn-success m-3" type="submit">Login</button></Link>
                    <button className="btn btn-danger m-3 ml-3" type="reset">Reset</button>
                    <Link to='/SignUp'><button className="btn btn-success m-3" type="submit">Need to register?</button></Link>
                  </Form>
                </div>
                )}        
            </Formik>
        </div>
    </div>
  )
}

export default SignUp;