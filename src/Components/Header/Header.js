import React from 'react';
import logo from '../assist/logo-chat-img-removebg-preview.png';
import sign from '../assist/th-removebg-preview.png';
import './Header.css';

const Header = ({ auth, user }) => {
  const handleSignOut = () => {
    auth.signOut();
  };

  return (
    <header>
      <img src={logo} alt='' />
      {user && (
        <button onClick={handleSignOut}>
          <img src={sign} alt='' />
        </button>
      )}
    </header>
  );
};

export default Header;
