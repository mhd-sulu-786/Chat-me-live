import React, { useState } from 'react';
import './Chat.css';
import sender from '../assist/send-btn-removebg-preview.png';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const Chat = ({ user }) => {
  const [message, setMessage] = useState("");

  // Initialize Firebase with your configuration
  const firebaseConfig = {
    apiKey: "AIzaSyDTlYOxHarGpBWHhlzzkxcK2FhjvWiYJ8c",
    authDomain: "chat-c3f01.firebaseapp.com",
    projectId: "chat-c3f01",
    storageBucket: "chat-c3f01.appspot.com",
    messagingSenderId: "409785853124",
    appId: "1:409785853124:web:06b4c3b6e4290e7c185591",
    measurementId: "G-F746TRWE0Y"
  };
  const app = initializeApp(firebaseConfig);
  const firestore = getFirestore(app);
  const auth = getAuth(app); // If you're using authentication

  const sendMessage = async (e) => {
    e.preventDefault();
  
    const messagesRef = collection(firestore, "messages");
  
    const { uid, photourl } = user;
  
    // Check if photourl is defined, otherwise set a default value
    const photoUrlToSend = photourl || "default_photo_url";
  
    await addDoc(messagesRef, {
      text: message,
      createdAt: serverTimestamp(),
      uid,
      photourl: photoUrlToSend,
    });
  
    setMessage(""); // Clear the input after sending the message
  };
  

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  return (
    <>
      <div className='chat-window'>
        {/* Your chat window content goes here */}
      </div>
      <form onSubmit={sendMessage}>
        <input
          value={message}
          onChange={handleMessageChange}
          placeholder='Type here..'
        />
        {/* Add a button or event handler to send the message */}
        <button type='submit'>
          <img src={sender} alt='' />
        </button>
      </form>
    </>
  );
};

export default Chat;
