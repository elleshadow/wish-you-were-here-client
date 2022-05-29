import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { v4 as uuidV4 } from 'uuid'
import LoginForm from './LoginForm';
import Dashboard from './Dashboard';
import '../styles/App.css';

function App() {

  if ('serviceWoker' in navigator) {
    navigator.serviceWorker.register('./service-worker.js')
  }

  const [user, setUser] = useState({ name: '', pronouns: '', email: '', id: uuidV4() });
  const [error, setError] = useState('');

  const login = (details) => {
    setError('');
    if(!details.name) { // Needs error handling to be fixed - user should not be able to move to Dashboard w/o a name
        setError('Please input a name.');
    } else {
        setUser({
            'name': details.name,
            'pronouns': details.pronouns,
            'email': details.email
        });
    }
  }

  return (
    <main className='App'>
        <Switch>
            <Route exact path='/' render={() => <LoginForm login={login} userId={user.id} error={error} />} />
            <Route exact path='/dashboard/:id' render={({ match }) => <Dashboard userId={match.params.id}/>} />
        </Switch>
    </main>
  );
}

 export default App;