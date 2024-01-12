import React from 'react';
import profile from '../assist/profile.jpeg';

const Message = ({message,user}) => {
    const {text,uid, photourl}=message;
   const messegeClass = uid===user.uid?"sent":"recive";
  return (
    <div className={`messege-shower ${messegeClass}`}>
      <img src={messegeClass==="sent"?photourl:'https://tse3.mm.bing.net/th?id=OIP.cC-2qUAIWmvXAvxhUlnnLAHaH5&pid=Api&P=0&h=180'} alt='https://tse3.mm.bing.net/th?id=OIP.cC-2qUAIWmvXAvxhUlnnLAHaH5&pid=Api&P=0&h=180'/>
      <p>{text}</p>
    </div>
  )
}

export default Message
