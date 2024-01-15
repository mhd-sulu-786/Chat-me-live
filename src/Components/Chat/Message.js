import React from 'react';
import profile from '../assist/profile.jpeg';
import { } from '../Sign/Sign';

const Message = ({ message, user }) => {
  const { text, uid, createdAt, photourl } = message;

  const messegeClass = uid === user.uid ? "sent" : "recive";
  const messageTime = createdAt && createdAt.toDate().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true });



  return (
    <div className={`messege-shower ${messegeClass}`}>
      <img src={messegeClass === "sent" ? photourl : 'https://tse3.mm.bing.net/th?id=OIP.cC-2qUAIWmvXAvxhUlnnLAHaH5&pid=Api&P=0&h=180' || profile} alt='https://tse3.mm.bing.net/th?id=OIP.cC-2qUAIWmvXAvxhUlnnLAHaH5&pid=Api&P=0&h=180' />
      <p>
<<<<<<< HEAD
<<<<<<< HEAD
      {messegeClass === "sent" && <span className='user-gmail'>{user.displayName}</span>}
        <br />
=======
        <span className='user-gmail'>{user.displayName}</span>
        <br /><br />
>>>>>>> f272f29 (almost  finish)
=======
      {messegeClass === "sent" && <span className='user-gmail'>{user.displayName}</span>}
        <br />
>>>>>>> 2f2a644 (m)
        {/* next line */}
        {text}<br />

        <span>{messageTime}</span></p>

    </div>
  )
}

export default Message
