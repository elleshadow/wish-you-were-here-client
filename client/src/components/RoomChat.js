import React, { useState } from "react";
import '../styles/RoomChat.css'
import UserList from './UserList';
import Message from './Message';

const RoomChat = ({ connectedUsers }) => {


    const [allMessages, setAllMessages] = useState([
        {
            email: "",
            id: "320901df-2f94-45ba-9a72-b6604eb33ec6",
            name: "Alex",
            pronouns: "he/him",
            message: "Did I send a thing?",
            timeStamp: "1653938171121"
        },
        {
            email: "",
            id: "320901df-2f94-45ba-9a72-b6604eb33ec5",
            name: "Probably not Alex",
            pronouns: "",
            message: "Yep!",
            timeStamp: "1653938173583"
        },
        {
            email: "",
            id: "320901df-2f94-45ba-9a72-b6604eb33ec9",
            name: "Joe",
            pronouns: "",
            message: "something something pigeon tamagotchi something something",
            timeStamp: "1653938175502"
        }
    ])

    const [chatInput, setChatInput] = useState("")

    const handleChange = (event) => {
        setChatInput(event.target.value)
    }

    const displayedMesssages = allMessages.map(message => {
        return (
            <Message
                key={message.id}
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
                <input className="message-box" type="text" placeholder="message..." onChange={(event) => handleChange(event)} value={chatInput} />
                <button className="button-send"> Send</button>
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