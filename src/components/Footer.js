import React from 'react'
import '../styles/Footer.css'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import {Link} from 'react-router-dom'

function Footer() {
  return (
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-10 mx-auto">
              <div className="row  foot-items">
                <div className="col-12 col-lg-4">
                  <Link to="/About"><h3>Company</h3></Link>
                </div>
                <div className="col-12 col-lg-4">
                  <Link to="/shop"><h3>Shop</h3></Link>
                </div>
                <div className="col-12 col-lg-4">
                  <Link to="/contact"><h3>Contact</h3></Link>
                </div>              
                <hr/>
                <div className="col-12 col-lg">
                  <h3>Follow Us</h3>
                  <div className="row">
                    <div className="col-3 mx-auto">
                        <FacebookIcon fontSize="large"/>
                    </div>
                    <div className="col-3 mx-auto">
                        <InstagramIcon fontSize="large"/>
                    </div>
                    <div className="col-3 mx-auto">
                        <YouTubeIcon fontSize="large"/>
                    </div>
                    <div className="col-3 mx-auto">
                        <TwitterIcon fontSize="large"/>
                    </div>
                  </div>
                </div>
              </div>
              <hr />
              <div className="mt-5">
                <p className="main-hero-para text-center w-100">
                  Copyright @ 2022 LP. All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
  )
}

export default Footer