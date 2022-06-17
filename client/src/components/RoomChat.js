import React, { useState } from 'react';
import '../styles/RoomChat.css';
import UserList from './UserList';
import Message from './Message';
import { useSocket } from '../context/SocketProvider';

const RoomChat = ({ userInfo, connectedUsers, messages }) => {
    const socket = useSocket();
    const [chatInput, setChatInput] = useState('');

    const sendMessage = (dataStringUserInfo, message) => {
      if (message) {
        const userInfoObject = JSON.parse(dataStringUserInfo);
        userInfoObject.timeStamp = new Date().toISOString();
        userInfoObject.message = message;
        socket.emit('send_message', userInfoObject);
      }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        sendMessage(userInfo, chatInput);
        setChatInput('');
    }

    const handleChange = (event) => {
        setChatInput(event.target.value);
    }

    const sortedMessages = messages.sort((a, b) => {
        return Date.parse(b.timeStamp) - Date.parse(a.timeStamp);
    })

    const compareUserID = (messageID) => {
        const userID = JSON.parse(userInfo).id;
        if (userID === messageID) {
            return true;
        }
        return false;
    }

    const displayedMesssages = sortedMessages.map(message => {
        return (
            <Message
                key={message.id + message.timeStamp}
                matchesActiveUserID={compareUserID(message.id)}
                name={message.name}
                pronouns={message.pronouns}
                message={message.message}
            />
        )
    });

    return (
        <section className='chat-sidebar'>
            <span className='chat-tab'>
                <input id='chat' type='radio' name='tabs' value='chat'/>
                <label className='chat-tab-text medium' htmlFor='chat'>Chat</label>
            </span>
            <section className='chat'>
                <summary className='message-container'>
                    {displayedMesssages}
                </summary>
                <form onSubmit={(event) => handleSubmit(event)}>
                    <input className='message-box medium-small' type='text' placeholder='message...' onChange={(event) => handleChange(event)} value={chatInput} />
                    <button className='button-send medium'>Send</button>
                </form>
                <section className='socket-list'>
                    <section className='users-list-container'>
                        { !!connectedUsers && <UserList connectedUsers={connectedUsers} />}
                    </section>
                </section>
            </section>
        </section>
    )
}

export default RoomChat;
