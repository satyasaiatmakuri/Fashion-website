import React, {useState} from 'react';
import '../styles/Navbar.css';
import Logo from '../assets/Logo.png';
import ReorderIcon from '@mui/icons-material/Reorder';
import {Link} from 'react-router-dom';

const Navbar=()=>{
        const[openLink, setOpenLink]=useState(false);

        const toggle=()=>{
            setOpenLink(!openLink);
        };

    return(
        <>
        <nav className='Nav-bar'>
            <div className='logo'>
                <Link to="/"><img className='Logo-image' src={Logo} alt='LP-logo'/></Link>
            </div>
            <div className='menu'>
                <Link to="/">Home</Link>
                <Link to="/Shop">Shop</Link>
                <Link to="/About">About</Link>
                <Link to="/contact">Contact</Link>
            </div>
            <button className='nav-btn'>
                Login/SignUp
            </button>
            <button className='toggle-btn' onClick={toggle}>
                    <ReorderIcon fontSize='large'/>
            </button>
        </nav>
        <div className='hiddenLinks' id={openLink?"open":"close"}>
            <ul className='hidden-items'>
                <li className='hidden-item'><Link to="/">Home</Link></li>
                <li className='hidden-item'><Link to="/Shop">Shop</Link></li>
                <li className='hidden-item'><Link to="/About">About</Link></li>
                <li className='hidden-item'><Link to="/contact">Contact</Link></li>
            </ul>
        </div>
        </>
    );
}

export default Navbar;