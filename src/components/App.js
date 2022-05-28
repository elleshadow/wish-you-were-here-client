import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import LoginForm from './LoginForm';
import Dashboard from './Dashboard';
import '../styles/App.css';

function App() {
  const [user, setUser] = useState({ name: '', email: '', id: '1' });
  const [error, setError] = useState('');

//   useEffect(() => {
//     console.log(user.id)
//   });

  const login = (details) => {
    console.log('details', details)
    setError('');
    if(!details.name) {
        setError('Please input a name.');
    } else {
        setUser({
            'name': details.name,
            'email': details.email
        });
    }
  }

  return (
    <main className='App'>
        <Switch>
            <Route exact path='/' render={() => <LoginForm login={login} userId={user.id} error={error} />} />
            <Route exact path='/dashboard/:id' render={({ match }) => <Dashboard userId={Number(match.params.id)}/>} />
        </Switch>
    </main>
  );

}

 export default App;