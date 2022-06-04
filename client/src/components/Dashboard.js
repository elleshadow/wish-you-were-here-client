import React, { useState, useRef, useEffect } from 'react';
import { useSocket } from '../context/SocketProvider';
import '../styles/Dashboard.css';
import ImageCaptureContainer from './ImageCaptureContainer';
import RoomLeftSidebar from './RoomLeftSidebar';
import RoomChat from './RoomChat';
import UserList from './UserList';
import FabricWhiteboard from './FabricWhiteboard'

function Dashboard(props) {
    // Socket
    const {
        email,
        id,
        name,
        photo,
        photoLocation,
        photoURL,
        pronouns,
    }= JSON.parse(props.data)

    const socket = useSocket()
    const [sentPhoto, setSentPhoto] = useState(false)
    const [connectionStatus, setConnectionStatus] = useState(false)
    const [connectedUsers, setConnectedUsers] = useState(false)
    const [messages, setMessages] = useState([])

    // const sendPhoto = (() => {
    //     const reader = new FileReader();
    //         reader.onload = function() {
    //             const photo = this.result.replace(/.*base64,/, '');
    //             const data = {
    //                 id: id,
    //                 timeStamp: new Date(),
    //                 photo: photo,
    //             }
    //             socket.emit('send_photo', data);
    //         };
    //     reader.readAsDataURL(this.files[0]);
    // }, false);

    const sendPhotoLocation = ((location) => {
                if(!location.scale) return
                const data = {
                    id: id,
                    timeStamp: new Date(),
                    location: location,
                }
                console.log("Client Sending location", location)
                socket.emit('send_photo_location', data);
    })

    const sendPhoto = ((photo) => {
                const data = {
                    id: id,
                    timeStamp: new Date(),
                    photo: photo,
                }
                console.log("Client Sending Photo", data)
                socket.emit('send_photo', data);
            })
    
    useEffect(() => {
        socket && socket.on("user-connected", (data) => {
            if (id === data.id) {
            console.log("Self Connection Verified")
            setConnectionStatus(socket.connected)
            } else {
            console.log("Another User Connected", data.name)
            }
        })

        socket && socket.on("recieve_message", (data) => {
            setMessages(prevMessages => [...prevMessages, data])
            console.log("Client Recieved Message", data)
        })

        socket && socket.on("recieve_photo_location", (data) => {
            console.log("recieve_photo_location")
            const { id, location} = data
            console.log(`${data.name} sent a location`)
            setConnectedUsers(prevConnectedUsers => {
                const updatedConnectedUsers = prevConnectedUsers.filter(connectedUser => {
                    return connectedUser.id !== id
                })
                const newLocation = prevConnectedUsers.filter(connectedUser => {
                    return connectedUser.id === id
                })
                newLocation.photoLocation = location
                return [...updatedConnectedUsers, newLocation]
            })
            console.log(connectedUsers)
        })

        // socket && socket.on("recieve_photo_URL", (data) => {
        //     const { id, name, pronouns, email, url} = data
        //     data.location = {left: 0, top: 0, scale: 0.25}
        //     console.log(`${data.name} sent a photo`)
        //     setConnectedUsers(prevConnectedUsers => {
        //         const updatedConnectedUsers = prevConnectedUsers.filter(connectedUser => {
        //             return connectedUser.id !== id
        //         })
        //         return [...updatedConnectedUsers, data]
        //     })
        //     console.log(connectedUsers)
        // })

        socket && socket.on("recieve-users-list", (data) => {
            console.log("recieve-users-list")
            console.log(data)
            setConnectedUsers(data) 
        })

        socket && socket.on("user-disconnected", (data) => {
            console.log(`${data.name} disconnected`)
        })

        return () => {
            setConnectionStatus(false)
        }
    }, [socket])

    console.log("photo", photo)
    return (
        <section className="dashboard">    
            <div className='user-photo-area'>
             <ImageCaptureContainer handleSendPhoto={sendPhoto}/> 
                <FabricWhiteboard sendPhotoLocation={sendPhotoLocation} connectedUsers={connectedUsers} myID={id}/>
            </div>
            <RoomChat 
            className="chat-box"
            userInfo={props.data} 
            messages={messages} 
            connectedUsers={connectedUsers}
            />
        </section>
    )
}

export default Dashboard;