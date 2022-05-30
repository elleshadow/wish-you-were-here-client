import React, { useState } from "react";
import '../styles/RoomChat.css'
import UserList from './UserList';
import Message from './Message';
import { useSocket } from '../context/SocketProvider';
import { useLocalStorage } from "../context/LocalStorageProvider";

const RoomChat = ({ connectedUsers, messages }) => {

    const socket = useSocket()
    const [localStorageData, setLocalStorageData] = useLocalStorage('data')

    const [chatInput, setChatInput] = useState("")

    const sendMessage = (userInfo, message) => {
        userInfo.timeStamp = new Date().toISOString()
        userInfo.message = message

        socket.emit("send_message", userInfo)
        console.log("Client sent message");
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        const userInfo = JSON.parse(localStorageData)
        setChatInput("")

        sendMessage(userInfo, chatInput)
    }

    const handleChange = (event) => {
        setChatInput(event.target.value)
    }

    const sortedMessages = messages.sort((a, b) => {
        return Date.parse(b.timeStamp) - Date.parse(a.timeStamp)
    })

    const displayedMesssages = sortedMessages.map(message => {
        return (
            <Message
                key={message.id + message.timeStamp}
                name={message.name}
                pronouns={message.pronouns}
                message={message.message}
            />
        )
    });

    return (
        <div className="right-side yellow section" contenteditable>
            <div className="right-side-tabs">
                {/* <input id="participants" type="radio" name="tabs" value="participants"/>
                <label for="participants">Participants</label> */}
                <input id="chat" type="radio" name="tabs" value="chat" checked/>
                <label for="chat">Chat</label>
            </div>
            <div className="chat">
                <div className="message-container">
                    {displayedMesssages}
                </div>
                <form onSubmit={(event) => handleSubmit(event)}>
                    <input className="message-box" type="text" placeholder="message..." onChange={(event) => handleChange(event)} value={chatInput} />
                    <button className="button-send"> Send</button>
                </form>
                <section className='socket-list'>
                    <section className='usersListContainer'>
                        { !!connectedUsers && <UserList connectedUsers={connectedUsers} />}
                    </section>
                </section>
            </div>
      </div>
    )
}

export default RoomChat