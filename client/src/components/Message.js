import React from "react";
import "../styles/Message.css";

const Message = ({ name, pronouns, message }) => {


  return (
    <div className="single-message-box">
      <div className="chat-user-info">
        <p className="chat-name">{name}</p>
        <p className="chat-pronouns">{pronouns}</p>
      </div>
      <p className="chat-message">{message}</p>
    </div>
  )
}

export default Message;