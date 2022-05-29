import React, { useContext, useEffect, useState } from 'react'
import io from 'socket.io-client'

const SocketContext = React.createContext()

export function useSocket() {
  return useContext(SocketContext)
}

export function SocketProvider({ data, children }) {
    const [socket, setSocket] = useState()
    
    const socketData = JSON.parse(data)


  useEffect(() => {
    const newSocket = io(
      'http://localhost:3002',
      { query: socketData }
    )
    setSocket(newSocket)

    return () => newSocket.close()
  }, [socket])

  return (
    <SocketContext.Provider value={socket}>
      {children}
    </SocketContext.Provider>
  )
}