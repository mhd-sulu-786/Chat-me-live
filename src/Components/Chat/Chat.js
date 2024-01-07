import React, { useState } from 'react';
import './Chat.css';
import sender from '../assist/send-btn-removebg-preview.png';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc, serverTimestamp, query, orderBy, limit } from 'firebase/firestore';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import Message from './Message';


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

  const messagesCollection = collection(firestore, "messages"); // Corrected the variable name
  const qurey = query(messagesCollection, orderBy("createdAt"), limit(25)); // Correct usage of orderBy and limit
  const [messages] = useCollectionData(qurey, { idField: "id" });

  const sendMessage = async (e) => {
    e.preventDefault();

    const { uid, photourl } = user;
    const photoUrlToSend = photourl || "https://tse2.mm.bing.net/th?id=OIP.eCtFW2p0N7q8QvSsQIggiAHaFj&pid=Api&P=0&w=300&h=300";

    await addDoc(messagesCollection, {
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
        {messages && messages.map((msg) => <Message key={msg.id} message={msg} user={user}/>)}
      </div>
      <form onSubmit={sendMessage}>
        <input
          value={message}
          onChange={handleMessageChange}
          placeholder='Type here..'
        />
        <button type='submit'>
          <img src={sender} alt='' />
        </button>
      </form>
    </>
  );
};

export default Chat;
