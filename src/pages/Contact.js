import React from 'react'
import CallIcon from '@mui/icons-material/Call';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import MailIcon from '@mui/icons-material/Mail';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Contact() {
  return (
    <div className='contact text-start'>
      <div className='container'>
        <div className='row'>
            <div className='col-md-7 text-height-3 p-4'>
              <h1>Contact</h1>
              <form>
                <div class="form-group py-3">
                  <label for="name">Name</label>
                  <input type="text" class="form-control" id="name" placeholder="Enter your name"/>
                </div>
                <div class="form-group py-3">
                  <label for="email">Email address</label>
                  <input type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email"/>
                  <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div class="form-group">
                  <label for="comments">Feedback and Suggestions</label>
                  <textarea class="form-control" id="comments" rows="5"></textarea>
                </div>
                <div class="form-check py-3">
                  <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                  <label class="form-check-label" for="exampleCheck1">Update me with offers</label>
                </div>
                <button type="submit" class="btn btn-primary mt-3 mb-5">Submit</button>
              </form>
            </div>
            <div className='col-md-5 align-self-center px-4 text-center fs-4'>
              <div  className='my-3'><strong>You can contact me using the form to your left, alternatively u can use the links below. </strong></div>
              <div  className='my-3'>
                <CallIcon/> <b>+91 1234567890</b>
              </div>
              <div className='my-3'>
                <WhatsAppIcon/> <b>+91 1234567890</b>
              </div>
              <div className='my-3'>
                <MailIcon/> <b>abcdef@mail.com</b>
              </div>
              <div className='my-3'>
                <LinkedInIcon/> <b>https://www.linkedin.com/</b>
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Contact