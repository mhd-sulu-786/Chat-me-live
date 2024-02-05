import React from 'react';
import G from '../assist/google-img-removebg-preview.png';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import './Sign.css';

/**
 * React component for signing in with Google.
 *
 * @param {object} auth - The authentication object.
 * @return {ReactElement} The sign-in component.
 */
const onSignIn = (userData) => {
  // Your logic for handling user sign-in
  // This function can be updated as needed
};

const Sign = ({ auth }) => {
  const signWithGoogle = async (e) => {
    e.preventDefault();
    const provider = new GoogleAuthProvider();
    
    // Commented out location tracking system
    /*
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      console.log("Geolocation is not supported by this browser.")
    }

    function showPosition(position) {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;
      const apiKey = "f616592fb6654694ab73127488ea906f"; // Replace with your own API key
      const url = `https://api.opencagedata.com/geocode/v1/json?q=${lat}+${lon}&key=${apiKey}`;

      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          if (data.results.length > 0) {
            const locationName = data.results[0].formatted;
            console.log(`User's current location: ${locationName}`);
            alert(`User's current location: ${locationName}`);
          } else {
            console.log("Unable to determine user's current location.")
          }
        })
        .catch((error) => {
          console.log("Error making reverse geocoding request:", error);
        });
    }
    */
    
    try {
      const result = await signInWithPopup(auth, provider);
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
        <button className='btn-sign' onClick={signWithGoogle}>
          <img src={G} alt='' />
          <span className='text-span'>Sign with Google</span>
        </button>
      </p>
    </div>
  );
}

export { Sign as default, onSignIn };
