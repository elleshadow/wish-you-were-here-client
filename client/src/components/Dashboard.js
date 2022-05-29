import React, { useEffect, useState } from 'react';
import { useSocket } from '../context/SocketProvider';
import '../styles/Dashboard.css';

function Dashboard(props) {
    const socket = useSocket()

    console.log(socket)

    const {
        name,
        id,
        pronouns,
        email
    }= JSON.parse(props.data)

    return (
            <section>
                <h1 className='large'>{`Hello ${name}!`}</h1>
                <h1 className='large'>{`You are currently Logged in under user ID:`}</h1>
                <h1 className='large'>{id}</h1>
               <h1 className='large'>{`Socket:`}</h1>
               { socket && <h1 className='large'>{!!socket.connected}</h1>}
                <form onClick={props.logOut}>
                    <button type='submit' >Log Out</button>
                </form>
            </section>
    )
}

export default Dashboard;