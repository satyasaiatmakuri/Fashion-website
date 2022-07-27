import React, {useState} from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import {Link} from 'react-router-dom'
import EmailIcon from '@mui/icons-material/Email';
import WorkIcon from '@mui/icons-material/Work';
import '../styles/Login-Signup.css'
// import workruit from '../assets/workruit.jpg'

import PersonIcon from '@mui/icons-material/Person';
import PhoneIcon from '@mui/icons-material/Phone';


function Signup() {

    const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

    const validate = Yup.object({
        firstname: Yup.string()
        .min(2, 'Please enter valid firstname')
        .required('First Name is required.'),
        lastname: Yup.string()
        .min(2, 'Please enter valid lastname')
        .required('Last Name is required.'),
        email: Yup.string()
          .email('Please enter valid email.')
          .required('Email is required.'),
        phone: Yup.string()
          .matches(phoneRegExp, 'Phone number is not valid')
          .required('Phone is required.'),
        password: Yup.string()
          .min(6, 'Please enter valid password')
          .required('Password is required.'),
    })

    const [colorstate1, setColorstate1]=useState(false);
    const [colorstate2, setColorstate2]=useState(false);
    const [colorstate3, setColorstate3]=useState(false);
    const [colorstate4, setColorstate4]=useState(false);
    const [colorstate5, setColorstate5]=useState(false);
    const colorchange1=()=>{
        setColorstate1(!colorstate1);
    }
    const colorchange2=()=>{
        setColorstate2(!colorstate2);
    }
    const colorchange3=()=>{
        setColorstate3(!colorstate3);
    }
    const colorchange4=()=>{
        setColorstate4(!colorstate4);
    }
    const colorchange5=()=>{
        setColorstate5(!colorstate5);
    }
  return (
    <div className='row py-5'>
        <div className='col-md-5 col-8 mx-auto'>
        <div className='text-center'>
        {/* <div className='Logo my-4'>
            <img src={workruit}></img>
        </div> */}
        <div>
            <h2>Join to family of style</h2>
        </div>
        <div className='my-4'>
            <span>Sign up and gear up your style with fashion</span>
        </div>
        </div>
     <Formik
       initialValues={{ 
        firstname: '', 
        lastname: '',
        email:'',
        phone:'',
        password:'' 
      }}
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
            <div className='my-2'  id={colorstate1?'change':'nochange'}>
                <div className='username-part p-2'>
                    <PersonIcon className='icon'/>
                    <Field 
                        type="text" 
                        name="firstname" 
                        className='field' 
                        placeholder='First Name'
                        onFocus={colorchange1} 
                        onBlur={colorchange1}/>
                </div>
                <ErrorMessage name="firstname" component="div" className='error-msg'/>
            </div>
            <div className='my-4'   id={colorstate2?'change':'nochange'}>
                <div className='username-part p-2'>
                <PersonIcon className='icon'/>
                <Field 
                    type="text" 
                    name="lastname"  
                    className='field' 
                    placeholder='Last Name'
                    onFocus={colorchange2} 
                    onBlur={colorchange2}/>
                </div>
                <ErrorMessage name="lastname" component="div"  className='error-msg' />
            </div>
            <div className='my-4'   id={colorstate3?'change':'nochange'}>
                <div className='username-part p-2'>
                <EmailIcon className='icon'/>
                <Field 
                    type="email" 
                    name="email"  
                    className='field' 
                    placeholder='Email address'
                    onFocus={colorchange3} 
                    onBlur={colorchange3}/>
                </div>
                <ErrorMessage name="email" component="div"  className='error-msg' />
            </div>
            <div className='my-4'   id={colorstate4?'change':'nochange'}>
                <div className='username-part p-2'>
                <PhoneIcon className='icon'/>
                <Field 
                    type="text" 
                    name="phone"  
                    className='field' 
                    placeholder='Phone'
                    onFocus={colorchange4} 
                    onBlur={colorchange4}/>
                </div>
                <ErrorMessage name="phone" component="div"  className='error-msg' />
            </div>
            <div className='my-4'   id={colorstate5?'change':'nochange'}>
                <div className='username-part p-2'>
                <WorkIcon className='icon'/>
                <Field 
                    type="password" 
                    name="password"  
                    className='field' 
                    placeholder='Password'
                    onFocus={colorchange5} 
                    onBlur={colorchange5}/>
                </div>
                <ErrorMessage name="password" component="div"  className='error-msg' />
            </div>
            <div className='mt-4'>
            <button type="submit" disabled={isSubmitting} className='submit-btn'>
              Sign up
            </button>
            </div>
            <div className='login-nav text-center mt-5'>
               Already have an account? <Link to='/Login'>Login</Link>
            </div>
         </Form>
       )}
     </Formik>
     </div>
   </div>
 );
}

export default Signup