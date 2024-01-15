import React from 'react';
import profile from '../assist/profile.jpeg';

const Message = ({message,user}) => {
    const {text,uid,createdAt, photourl,gmail}=message;
   const messegeClass = uid===user.uid?"sent":"recive";
   const messageTime =     createdAt && createdAt.toDate().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit',hour12:true });


  return (
    <div className={`messege-shower ${messegeClass}`}>
      <img src={messegeClass==="sent"?photourl:'https://tse3.mm.bing.net/th?id=OIP.cC-2qUAIWmvXAvxhUlnnLAHaH5&pid=Api&P=0&h=180'||profile} alt='https://tse3.mm.bing.net/th?id=OIP.cC-2qUAIWmvXAvxhUlnnLAHaH5&pid=Api&P=0&h=180'/>
 {gmail && <span className='user-gmail'>{gmail}</span>}
 <br/>
     <p>{text}<br/>
      
    <span>{messageTime}</span></p>
      
    </div>
  )
}

export default Message
