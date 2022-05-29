import React from "react"
import { NavLink } from "react-router-dom";
import '../styles/Room.css'
import UsersList from "./UserList";
import RoomHeader from "./RoomHeader"
import RoomLeftSidebar from "./RoomLeftSidebar"
import RoomMain from "./RoomMain"
import RoomChat from "./RoomChat"
import RoomFooter from "./RoomFooter"


const Room = () => {
  return (
    <div className="room">
      <RoomHeader />
      <RoomLeftSidebar />
      <RoomMain />
      <RoomChat />
      <RoomFooter />
    </div>
  )
}

export default Room;