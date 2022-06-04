import React, { useContext, useEffect, useState } from 'react';
import io from 'socket.io-client';

const SocketContext = React.createContext();

export function useSocket() {
  return useContext(SocketContext);
}

export function SocketProvider({ data, children }) {
    const [socket, setSocket] = useState();
    const socketData = JSON.parse(data);

  useEffect(() => {
    const newSocket = io(
    'https://api-wish-you-were-here.herokuapp.com',
      { query: socketData }
    );
    setSocket(newSocket);
    console.log('Socket Connecting');
    return () => {
        console.log('Socket Disconnecting');
        newSocket.close();
    }    
  }, []);

  return (
    <SocketContext.Provider value={socket}>
      {children}
    </SocketContext.Provider>
  );
};