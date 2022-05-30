import React, { useState, useRef, useEffect } from 'react';
import { useSocket } from '../context/SocketProvider';
import '../styles/Dashboard.css';
import ImageCaptureContainer from './ImageCaptureContainer';
import RoomLeftSidebar from './RoomLeftSidebar';
import RoomChat from './RoomChat';
import UserList from './UserList';

function Dashboard(props) {
    // Socket
    const {
        name,
        id,
        pronouns,
        email
    }= JSON.parse(props.data)

    const socket = useSocket()
    const [connectionStatus, setConnectionStatus] = useState(false)
    const [connectedUsers, setConnectedUsers] = useState(false)

   
    
    useEffect(() => {
        socket && socket.on("user-connected", (data) => {
            if (id === data.id) {
            console.log("Self Connection Verified")
            setConnectionStatus(socket.connected)
            } else {
            console.log("Another User Connected", data.name)
            }
        })

        socket && socket.on("recieve-users-list", (data) => {
            setConnectedUsers(data)
        })

        socket && socket.on("user-disconnected", (data) => {
            console.log(`${data.name} disconnected`)
        })

        return () => {
            setConnectionStatus(false)
        }
    }, [socket])

    console.log("connected users", connectedUsers)
    return (
        <div className='dashboard'>
            <RoomLeftSidebar />
                <ImageCaptureContainer />
            <RoomChat />
            {/* <section className='socket-list'>

                    <section className='usersListContainer'>
                    { !!connectedUsers && <UserList connectedUsers={connectedUsers} />}
                    </section>
            </section> */}
     </div>
    )
}

export default Dashboard;