import React from 'react'
import '../styles/About.css'

function About() {
  return (
    <div className='about'>
      <div className=' container text-center py-5'>
        <div className='display-4 mb-4 col-12'>
            <b>Know About Us</b>
        </div>
        <div className='display-6 pt-4 col-12'>
            What Can U Find Here?
        </div>
        <div className='col-md-6 col-8 findhere-desc mx-auto my-3'>
            We bring you the trendiest and most exclusive brands from around the world to your wardrobe. Forget scouring the net for what’s hot globally, we’ve got you covered.
        </div>
        <div className='display-6 pt-4 col-12'>
          Who We Are?
        </div>
        <div className='col-md-6 col-8 findhere-desc mx-auto my-3'>
        This Company is our private label – that’s designed by us, and owned by you. If you’re looking for head-turning styles that are one-of-a-kind, Here is what you should stock up on.
        </div>
        <div className='display-6 pt-4 col-12'>
          We Are Special for
        </div>
        <div className='row findhere-desc my-4'>
          <div className='col-md-4'>
              <b>EASY EXCHANGE</b>
          </div>
          <div className='col-md-4'>
              <b>100% HAND PICKED</b>
          </div>
          <div className='col-md-4'>
             <b>ASSURED QUALITY</b>
          </div>
        </div>

      </div>

    </div>
  )
}

export default About