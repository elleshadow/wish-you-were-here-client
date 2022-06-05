import React from 'react';
import '../styles/Message.css';

const Message = ({ name, pronouns, message, matchesActiveUserID }) => {

  const checkIDMatch = (className) => {
    if (matchesActiveUserID) {
      return `user-${className}`;
    };
    return className;
  };

  return (
    <section className={checkIDMatch('single-message-box')}>
      <summary className='chat-user-info'>
        <p className='chat-name medium-small'>{name}</p>
        <p className='chat-pronouns medium-small'>{pronouns}</p>
      </summary>
      <p className={checkIDMatch('chat-message medium-small')}>{message}</p>
    </section>
  );
};

export default Message;