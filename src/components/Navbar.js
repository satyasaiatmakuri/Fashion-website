import React from 'react';
import '../styles/Navbar.css';
import Logo from '../assets/Logo.png';
import ReorderIcon from '@mui/icons-material/Reorder';
import {Link} from 'react-router-dom';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';

const Navbar=()=>{
        const popover = (
            <Popover id="popover-basic">
              <Popover.Body className='toggle-menu '>
                    <ul className='toggle-items'>
                        <li className='toggle-item p-3 px-4 text-center fs-6'><Link to="/">Home</Link></li>
                        <li className='toggle-item p-3 px-4 text-center fs-6'><Link to="/Shop">Shop</Link></li>
                        <li className='toggle-item p-3 px-4 text-center fs-6'><Link to="/About">About</Link></li>
                        <li className='toggle-item p-3 px-4 text-center fs-6'><Link to="/contact">Contact</Link></li>
                    </ul>
              </Popover.Body>
            </Popover>
        );

    return(
        <>
        <nav className='Nav-bar p-3'>
                <div className='row align-items-center'>
                    <div className='logo col-md-3 col-4'>
                        <Link to="/"><img className='Logo-image' src={Logo} alt='LP-logo'/></Link>
                    </div>
                    <div className='menu col-md-5'>
                        <Link to="/">Home</Link>
                        <Link to="/Shop">Shop</Link>
                        <Link to="/About">About</Link>
                        <Link to="/contact">Contact</Link>
                    </div>
                    <div className='col-md-4 col-4'>
                        <Link to="/Login">
                            <button className='nav-btn py-2 px-4'>
                                Login/SignUp
                            </button>
                        </Link>
                    </div>
                    <div className='toggle-btn-div col-4'>
                    <OverlayTrigger trigger="click" placement="bottom" overlay={popover} className='bg-info'>
                    <ReorderIcon fontSize='large' className='toggle-icon'/>
                    </OverlayTrigger>
                    </div>
                </div>
        </nav>
        </>
    );
}

export default Navbar;