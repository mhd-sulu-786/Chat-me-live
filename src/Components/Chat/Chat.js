import React, { useState } from 'react';
import './Chat.css';
import sender from  '../assist/send-btn-removebg-preview.png';
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
const Chat = ({user}) => {
  const [message, setMessage] = useState("");
 const firebase =initializeApp();
  const firestore = getFirestore();
  const sendMessage = async e =>{
    e.preventDefault();
    const messegesRef =firestore.collection("messages");
    const {uid,photourl}=user
   await messegesRef.add({
        tex:message,
        createdAt:firebase.firestore.FieldValue.serverTimestamp(),
        uid,photourl
    })
    sendMessage("")
  }

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  return (
    <>
      <div className='chat-window'>
        {/* Your chat window content goes here */}
      </div>
      <form onSubmit={sendMessage}>
        <input value={message} onChange={handleMessageChange} placeholder='Type here..'/>
        {/* Add a button or event handler to send the message */}
        <button type='submit'><img src={sender} alt=''></img></button>
      </form>
    </>
  );
}

export default Chat;
