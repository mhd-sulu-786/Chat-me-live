/*import React, { useState,useRef } from 'react';
import './Chat.css';
import sender from '../assist/send-btn-removebg-preview.png';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc, serverTimestamp, query, orderBy, limit } from 'firebase/firestore';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import Message from './Message';


const Chat = ({ user }) => {
  const [message, setMessage] = useState("");
 const dummy = useRef()
  // Initialize Firebase with your configuration
  const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID,
    measurementId: process.env.REACT_APP_MEASUREMENT_ID
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
    dummy.current.scrollIntoView({ behavior: "smooth" });

  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  return (
    <>
      <div className='chat-window'>
        {messages && messages.map((msg) => <Message key={msg.id} message={msg} user={user}/>)}
        <span ref={dummy}></span>
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

export default Chat;*/// Import necessary modules and components
import React, { useState, useRef, useEffect } from 'react';
import './Chat.css';
import sender from '../assist/send-btn-removebg-preview.png';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc, serverTimestamp, query, orderBy, limit } from 'firebase/firestore';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { Picker } from 'emoji-mart';
// Import the Message component (replace 'Message' with the actual path to your component)
import Message from './Message';

// Firebase configuration (replace with your actual configuration)
const firebaseConfig = {
  apiKey: 'YOUR_API_KEY',
  authDomain: 'YOUR_AUTH_DOMAIN',
  projectId: 'YOUR_PROJECT_ID',
  storageBucket: 'YOUR_STORAGE_BUCKET',
  messagingSenderId: 'YOUR_MESSAGING_SENDER_ID',
  appId: 'YOUR_APP_ID',
  measurementId: 'YOUR_MEASUREMENT_ID'
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

// Chat component
const Chat = ({ user }) => {
  const [message, setMessage] = useState("");
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [selectedEmoji, setSelectedEmoji] = useState(null);
  const dummy = useRef();

  const messagesCollection = collection(firestore, "messages");
  const qurey = query(messagesCollection, orderBy("createdAt"), limit(25));
  const [messages] = useCollectionData(qurey, { idField: "id" });

  const sendMessage = async (e) => {
    e.preventDefault();

    const { uid, photourl } = user;
    const photoUrlToSend = photourl || "https://tse2.mm.bing.net/th?id=OIP.eCtFW2p0N7q8QvSsQIggiAHaFj&pid=Api&P=0&w=300&h=300";

    await addDoc(messagesCollection, {
      text: `${message} ${selectedEmoji || ''}`,
      createdAt: serverTimestamp(),
      uid,
      photourl: photoUrlToSend,
    });

    setMessage("");
    setSelectedEmoji(null);
    setShowEmojiPicker(false);
    dummy.current.scrollIntoView({ behavior: "smooth" });
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleEmojiClick = (emoji) => {
    setSelectedEmoji(emoji.native);
  };

  // Ensure cleanup of Firebase resources when the component unmounts
  useEffect(() => {
    return () => {
      // Cleanup logic here, if needed
    };
  }, []);

  return (
    <>
      <div className='chat-window'>
        {messages && messages.map((msg) => <Message key={msg.id} message={msg} user={user} />)}
        <span ref={dummy}></span>
      </div>
      <form onSubmit={sendMessage}>
        <div className="input-container">
          <input
            value={message}
            onChange={handleMessageChange}
            {showEmojiPicker && (
              <Picker
                onSelect={handleEmojiClick}
                emojiTooltip={true}
                style={{ position: 'absolute', bottom: '80px', right: '10px' }}
              />
            )}
            placeholder='Type here..'
          />
        </div>
      
        <button type='submit'>
          <img src={sender} alt='' />
        </button>
      </form>
    </>
  );
};

export default Chat;


