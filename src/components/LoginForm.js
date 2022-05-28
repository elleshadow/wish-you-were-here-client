import React from 'react';

function LoginForm() {
  return (
    <form>
        <div className='form-inner'>
            <h2>Login</h2>
            <div className='form-group'>
                <label htmlFor='name'>Name: </label>
                <input 
                    type='text'
                    name='name'
                    id='name'
                    placeholder='Name'
                />
            </div>

        </div>
    </form>
  )
}

export default LoginForm;