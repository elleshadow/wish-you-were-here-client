import React, { useEffect, useState } from 'react';
import { useSocket } from '../context/SocketProvider';
import '../styles/Dashboard.css';
import UserList from './UserList';

function Dashboard(props) {
    const socket = useSocket()
    const [connectionStatus, setConnectionStatus] = useState(false)
    const [connectedUsers, setConnectedUsers] = useState(false)

    
    const {
        name,
        id,
        pronouns,
        email
    }= JSON.parse(props.data)
    
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
        <>
            <section>
                <h1 className='large'>{`Hello ${name}!`}</h1>
                { (connectionStatus) && <h1>Connected!</h1> }
                <form onClick={props.logOut}>
                    <button type='submit' >Log Out</button>
                </form>
            </section>
            <section className='usersListContainer'>
              { !!connectedUsers && <UserList connectedUsers={connectedUsers} />}
            </section>
        </>
    )
}

export default Dashboard;