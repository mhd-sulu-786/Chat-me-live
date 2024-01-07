import React from 'react'

const Message = ({message,user}) => {
    const {text,uid, photourl}=message;
   const messegeClass = uid===user.uid?"sent":"recive";
  return (
    <div className={`messege-shower ${messegeClass}`}>
      <img src={photourl} alt=''/>
      <p>{text}</p>
    </div>
  )
}

export default Message