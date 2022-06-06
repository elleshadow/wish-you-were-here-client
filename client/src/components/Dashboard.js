import React, { useState, useEffect } from 'react';
import { useSocket } from '../context/SocketProvider';
import '../styles/Dashboard.css';
import ImageCaptureContainer from './ImageCaptureContainer';
import RoomChat from './RoomChat';
import FabricWhiteboard from './FabricWhiteboard';

function Dashboard(props) {
    const {
        id,
        photo,
    }= JSON.parse(props.data);

    const socket = useSocket();
    const [connectionStatus, setConnectionStatus] = useState(false);
    const [connectedUsers, setConnectedUsers] = useState(false);
    const [messages, setMessages] = useState([]);

    const sendPhotoLocation = ((location) => {
        if(!location.scale) return
        const data = {
            id: id,
            timeStamp: new Date(),
            location: location,
        }
        socket.emit('send_photo_location', data);
    });

    const sendPhoto = ((photo) => {
                const data = {
                    id: id,
                    timeStamp: new Date(),
                    photo: photo,
                };
                socket.emit('send_photo', data);
            });
    
    useEffect(() => {
        socket && socket.on("user-connected", (data) => {
            if (id === data.id) {
                setConnectionStatus(socket.connected);
            } 
        });

        socket && socket.on("recieve_message", (data) => {
            setMessages(prevMessages => [...prevMessages, data]);
        });

        socket && socket.on("recieve_photo_location", (data) => {
            const { id, location} = data;
            setConnectedUsers(prevConnectedUsers => {
                const updatedConnectedUsers = prevConnectedUsers.filter(connectedUser => {
                    return connectedUser.id !== id;
                });
                const newLocation = prevConnectedUsers.filter(connectedUser => {
                    return connectedUser.id === id;
                });
                newLocation.photoLocation = location;
                return [...updatedConnectedUsers, newLocation];
            });
        });
        socket && socket.on("recieve-users-list", (data) => {
            setConnectedUsers(data);
            setData(data);
        });


        return () => {
            setConnectionStatus(false);
        };
    }, [socket])

    const setData =(data) => {
        const updatedData = data.find(user => {
            return user.id === id;
        });
        const dataString = JSON.stringify(updatedData);
        props.handleSetData(dataString);
    };

    return (
        <section className="dashboard">    
            <div className='user-photo-area'>
                {!photo && <ImageCaptureContainer handleSendPhoto={sendPhoto}/> }<FabricWhiteboard sendPhotoLocation={sendPhotoLocation} connectedUsers={connectedUsers} myID={id}/> 
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