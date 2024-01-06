import React from 'react';
import logo from '../assist/logo-chat-img-removebg-preview.png';
import sign from '../assist/th-removebg-preview.png';
import './Header.css';


const Header = () => {
  return (
    <header>
        <img src={logo} alt=''/>
        <img src={sign} alt=''/>
    </header>
  )
}

export default Header