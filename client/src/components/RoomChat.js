import React, { useState } from "react";
import '../styles/RoomChat.css'
import UserList from './UserList';

const RoomChat = ({ connectedUsers }) => {

    const [chatInput, setChatInput] = useState({ message: "" })

    const handleChange = (event) => {
        setChatInput({ [event.target.name]: event.target.value })
    }

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
                    Message Container
                </div>
                <input className="message-box" name="message" type="text" placeholder="message..." onChange={(event) => handleChange(event)} value={chatInput.message} />
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