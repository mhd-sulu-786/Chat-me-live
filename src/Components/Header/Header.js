import React, { useState } from 'react';
import logo from '../assist/logo-chat-img-removebg-preview.png';
import sign from '../assist/th-removebg-preview.png';
import './Header.css';

const Header = ({ auth, user }) => {
  const [picIndex, setPicIndex] = useState(0);

  const images = [
    'https://tse4.mm.bing.net/th?id=OIP.tTO9bDuLi1PpUuT6OflBAgHaJ4&pid=Api&P=0&w=300&h=300',
    logo,
    'https://tse1.mm.bing.net/th?id=OIP.8sEQq9-fsOY0T-R-vYtVqgHaIB&pid=Api&P=0&h=180',
    'https://i.pinimg.com/originals/be/ac/96/beac96b8e13d2198fd4bb1d5ef56cdcf.jpg',
    'https://tse4.mm.bing.net/th?id=OIP.1Lww31q-RdrcMEVGs2mf5AHaKL&pid=Api&P=0&h=180'

  ];

  const handleSignOut = () => {
    const confirm = window.confirm('Are you sure to logout?');
    if(confirm){
      auth.signOut();
    }else{
      
    }
   
  };

  const changeProfile = () => {
    setPicIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <header>
      <button onClick={changeProfile}>
        <img src={images[picIndex]} alt='' />
      </button>
      <h2>Hello Tell Me Something.... </h2>
      {user && (
        <button onClick={handleSignOut}>
          <img src={sign} alt='' />
        </button>
      )}
    </header>
  );
};

export default Header;
