import React from 'react';
import G from '../assist/google-img-removebg-preview.png';
import {  GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import './Sign.css';

/**
 * React component for signing in with Google.
 *
 * @param {object} auth - The authentication object.
 * @return {ReactElement} The sign-in component.
 */
const Sign = ({ auth }) => {
  const signwithgoogle = async (e) => {
    e.preventDefault();
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.error('Error signing in with Google:', error);
    }
  };

  return (
    <div>
      <p>
        Sign to start chat..!
        <button className='btn-sign' onClick={signwithgoogle}>
          <img src={G} alt='' />
          <span>Sign with Google</span>
        </button>
      </p>
    </div>
  );
}

export default Sign;
