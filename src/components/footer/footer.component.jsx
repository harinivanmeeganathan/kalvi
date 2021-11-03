import React from 'react';
import './footer.styles.scss';
import { Link } from 'react-router-dom';
import  Logo from '../../assets/logo.png';

const Footer = () => (

    <div className = 'footer-container'>
        <label className = 'copyright'>illamthedikalvi@gmail.com</label>
        <label className = 'copyright'>© 2021 Department of School Education Tamilnadu All Rights Reserved     <Link className ="policy" to='/policy'><b>Privacy Policy</b></Link>
        <div className= "head">
        <Link to = '/' className = "copyright logo-container">
        <img src = {Logo} alt = "logo" className='logo' />
        </Link>

        </div>    
</label>
    </div>
);

export default Footer;