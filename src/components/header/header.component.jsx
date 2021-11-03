import React from 'react';
import { Link } from 'react-router-dom';
import  Logo from '../../assets/logo.png';
import './header.styles.scss';

const Header = () => (

<div className = "header-container">
<div className = "header">
    <Link to = '/' className = "logo-container">
        <img src = {Logo} alt = "logo" className='logo' />
    </Link>
    <div className ="options">
    <Link className ="option" to='/'>HOME</Link>
    <Link className ="option" to='/contact'>CONTACT US</Link>
    
</div>
</div>
</div>

);


export default Header;