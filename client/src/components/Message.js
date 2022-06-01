import React from "react";
import "../styles/Message.css";

const Message = ({ name, pronouns, message, matchesActiveUserID }) => {

  const checkIDMatch = (className) => {
    if (matchesActiveUserID) {
      return `user-${className}`;
    }
    return className;
  }

  return (
    <div className={checkIDMatch("single-message-box")}>
      <div className="chat-user-info">
        <p className="chat-name">{name}</p>
        <p className="chat-pronouns">{pronouns}</p>
      </div>
      <p className={checkIDMatch("chat-message")}>{message}</p>
    </div>
  )
}

export default Message;