import React from "react";
import "../styles/Message.css";

const Message = ({ name, pronouns, message }) => {


  return (
    <div>
      <div>
        <p>{name}</p>
        <p>{pronouns}</p>
      </div>
      <p>{message}</p>
    </div>
  )
}

export default Message;