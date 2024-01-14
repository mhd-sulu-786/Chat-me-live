import React from 'react';
import profile from '../assist/profile.jpeg';

const Message = ({message,user}) => {
    const {text,uid,createdAt, photourl}=message;
   const messegeClass = uid===user.uid?"sent":"recive";
   const messageTime = createdAt ? new Date(createdAt.toDate()).toLocaleTimeString() : '';

  return (
    <div className={`messege-shower ${messegeClass}`}>
      <img src={messegeClass==="sent"?photourl:'https://tse3.mm.bing.net/th?id=OIP.cC-2qUAIWmvXAvxhUlnnLAHaH5&pid=Api&P=0&h=180'||profile} alt='https://tse3.mm.bing.net/th?id=OIP.cC-2qUAIWmvXAvxhUlnnLAHaH5&pid=Api&P=0&h=180'/>
      <p>{text}</p><br/>
    <span>{messageTime}</span>
      
    </div>
  )
}

export default Message
