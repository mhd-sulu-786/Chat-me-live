import React from 'react';
import profile from '../assist/profile.jpeg';

const Message = ({message,user}) => {
    const {text,uid, photourl}=message;
   const messegeClass = uid===user.uid?"sent":"recive";
  return (
    <div className={`messege-shower ${messegeClass}`}>
      <img src={messegeClass==="sent"?photourl: profile} alt=''/>
      <p>{text}</p>
    </div>
  )
}

export default Message