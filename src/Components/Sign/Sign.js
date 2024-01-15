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
const onSignIn = (userData) => {
  // Your logic for handling user sign-in
  
  console.log('User signed in:', );
};
const Sign = ({ auth }) => {
  const signwithgoogle = async (e) => {
    e.preventDefault();
    const provider = new GoogleAuthProvider();
    try {
     const result= await signInWithPopup(auth, provider);
     const user = result.user;
     onSignIn({
      userEmail: user.email,
      userName: user.displayName,
    });
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

export { Sign as default, onSignIn };  