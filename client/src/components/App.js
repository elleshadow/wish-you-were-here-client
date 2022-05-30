import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { v4 as uuidV4 } from 'uuid'
import LoginForm from './LoginForm';
import Dashboard from './Dashboard';
import { useLocalStorage } from '../context/LocalStorageProvider'
import { SocketProvider } from '../context/SocketProvider';
import '../styles/App.css';
import Room from './Room';
import NavBar from './NavBar';

function App() {
  const [data, setData] = useLocalStorage('data')
  const [isLoggedIn, setIsLoggedIn] = useState(!!data)
  const [error, setError] = useState('');

  const login = (details) => {
    setError('');
    if(!details.name) { // Needs error handling to be fixed - user should not be able to move to Dashboard w/o a name
        setError('Please input a name.');
    } else {
        setData(JSON.stringify({
            'id': details.id,
            'name': details.name,
            'pronouns': details.pronouns,
            'email': details.email
        }));
        setIsLoggedIn(true)
    }
  }

  const logOut = () => {
      localStorage.clear()
      setIsLoggedIn(false)
  }

  const dashboard = (
    <SocketProvider data={data}>
        <Dashboard  data={data}/> 
      {/* <Room /> */}
    </SocketProvider>
  )
  

  return (
    <main className='App'>
        <NavBar logOut={logOut}/>
        {!!data ?  dashboard : <LoginForm login={login} error={error} /> }
    </main>
  );
}

 export default App;