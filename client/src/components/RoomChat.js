import React from "react";

const RoomChat = () => {
    return (
      <div className="right-side yellow section" contenteditable>
          <div className="right-side-tabs">
              <input id="participants" type="radio" name="tabs" value="participants">
            </input>
                  <label for="participants">participants</label>
              <input id="chat" type="radio" name="tabs" value="chat" ></input>
                  <label for="chat">Chat</label>
          </div>
          <div className="chat">
                <div className="message-container">Message Container</div>
                <input className="message-box" type="text" placeholder="message..." value='' />
                <button className="button-send"> Send</button>
          </div>
          <div className="participants">
                Participants
          </div>
      </div>
    )
}

export default RoomChat