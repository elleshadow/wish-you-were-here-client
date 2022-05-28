import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import LoginForm from './LoginForm';
import Dashboard from './Dashboard';
import '../styles/App.css';

function App() {

  const [user, setUser] = useState({ name: '', email: '', id: '' });
  const [error, setError] = useState('');

  const login = (details) => {
    console.log('details', details)
    setError('');
    if(!details.name) {
        setError('Please input a name.');
    } else {
        setUser({
            'name': details.name,
            'email': details.email,
            'id': Date.now()
        });
    }
  }

  return (
    <main className='App'>
        <Dashboard userDetails={user}/>
        <Switch>
            <Route exact path='/' render={() => <LoginForm login={login} error={error} />} />
            {/* <Route exact path='/dashboard/:id' render={({ match }) => <></>} */}
        </Switch>
    </main>
  );

}

 export default App;