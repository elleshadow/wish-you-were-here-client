import React, { useState } from 'react';
import { Route, Redirect } from 'react-router-dom';
import LoginForm from './LoginForm';
import Dashboard from './Dashboard';
import { useLocalStorage } from '../context/LocalStorageProvider'
import { SocketProvider } from '../context/SocketProvider';
import '../styles/App.css';
import NavBar from './NavBar';

function App() {
  const [data, setData] = useLocalStorage('data');
  const [error, setError] = useState('');

  const login = (details) => {
    setError('');
    if(!details.name) {
        setError('Please input a name.');
    } else {
        setData(JSON.stringify({
            'id': details.id,
            'name': details.name,
            'pronouns': details.pronouns,
            'email': details.email,
            'photo': ''
        }));
    }
  }

  const logOut = () => {
      localStorage.clear();
  }

  const dashboard = (
    <SocketProvider data={data}>
        <NavBar logOut={logOut}/>
        <Dashboard handleSetData={setData} data={data}/> 
    </SocketProvider>
  )

  return (
    <main className='App'>
      <Route exact path='/'>
        {!!data ? <Redirect to='/dashboard' /> : <LoginForm login={login} error={error}/>}
      </Route>
      <Route exact path='/dashboard'>
        {!!data ? dashboard : <Redirect to='/'/>}
      </Route>
    </main>
  );
}

 export default App;