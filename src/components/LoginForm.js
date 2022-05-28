import React from 'react';
import '../styles/LoginForm.css';

function LoginForm() {
  return (
    <form>
        <div className='form-inner'>
            <h2>Login</h2>
            {/* ERROR HANDLE */}
            <section className='form-group'>
                <label htmlFor='name'>Name: </label>
                <input 
                    type='text'
                    name='name'
                    id='name'
                    placeholder='Name'
                />
            </section>
            <section className='form-group'>
                <label htmlFor='email'>Email: </label>
                <input 
                    type='email'
                    name='email'
                    id='email'
                    placeholder='Email (optional)'
                />
            </section>
            <button className='submit-name-btn'>Submit</button>
        </div>
    </form>
  )
}

export default LoginForm;