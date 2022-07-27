import React, {useState} from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import {Link} from 'react-router-dom'
import EmailIcon from '@mui/icons-material/Email';
import WorkIcon from '@mui/icons-material/Work';
import '../styles/Login-Signup.css'
// import workruit from '../assets/workruit.jpg'


function Login() {

    const validate = Yup.object({
        email: Yup.string()
          .email('Please enter valid email.')
          .required('Email is required.'),
        password: Yup.string()
          .min(6, 'Please enter valid password')
          .required('Password is required.'),
    })

    const [colorstate1, setColorstate1]=useState(false);
    const [colorstate2, setColorstate2]=useState(false);
    const colorchange1=()=>{
        setColorstate1(!colorstate1);
    }
    const colorchange2=()=>{
        setColorstate2(!colorstate2);
    }
  return (
    <div className='row p-5'>
        <div className='col-md-5 col-8 mx-auto'>
        <div className='text-center'>
        {/* <div className='Logo my-4'>
            <img src={workruit}></img>
        </div> */}
        <div>
            <h2>Welcome back</h2>
        </div>
        <div>
            <span>sign into your account</span>
        </div>
        </div>
     <Formik
       initialValues={{ email: '', password: '' }}
       validationSchema={validate}
       onSubmit={(values, { setSubmitting }) => {
         setTimeout(() => {
           alert(JSON.stringify(values, null, 2));
           setSubmitting(false);
         }, 400);
       }}
     >
       {({ isSubmitting }) => (
         <Form>
            <div className='my-5'  id={colorstate1?'change':'nochange'}>
                <div className='username-part p-2'>
                    <EmailIcon className='icon'/>
                    <Field 
                        type="email" 
                        name="email" 
                        className='field' 
                        placeholder='Email address'
                        onFocus={colorchange1} 
                        onBlur={colorchange1}/>
                </div>
                <ErrorMessage name="email" component="div" className='error-msg'/>
            </div>
            <div className='my-5'   id={colorstate2?'change':'nochange'}>
                <div className='username-part p-2'>
                <WorkIcon className='icon'/>
                <Field 
                    type="password" 
                    name="password"  
                    className='field' 
                    placeholder='Password'
                    onFocus={colorchange2} 
                    onBlur={colorchange2}/>
                </div>
                <ErrorMessage name="password" component="div"  className='error-msg' />
            </div>
            <div className='forgot-pass'>
                <Link to='/'>Forgot password?</Link>
            </div>
            <div className='mt-4'>
            <button type="submit" disabled={isSubmitting} className='submit-btn'>
              Login
            </button>
            </div>
            <div className='my-4'>
            <button type="submit" disabled={isSubmitting} className='submit-btn'>
              Login with OTP
            </button>
            </div>
            <div className='singup-nav text-center mt-5'>
               Don't have an account <Link to='/Signup'>Sign up</Link>
            </div>
         </Form>
       )}
     </Formik>
     </div>
   </div>
 );
}

export default Login