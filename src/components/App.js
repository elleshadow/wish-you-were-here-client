import React, { useState } from 'react';
import LoginForm from './LoginForm';
import '../styles/App.css';

function App() {

  const [user, setUser] = useState({ name: '', email: '' });
  const [error, setError] = useState('');

  const login = (details) => {
    console.log(details);
  }

  return (
    <main className='App'>
      {
        (user.name) ? 
        (
          <section className='welcome'>
            <h2>{`Welcome, ${user.name}`}</h2>
          </section>
        ) :
        (
          <LoginForm login={login} error={error} />
        )
      }
    </main>
  );

}


 export default App;