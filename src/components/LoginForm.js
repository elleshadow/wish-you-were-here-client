import React, { useState } from 'react';
import '../styles/LoginForm.css';

function LoginForm({ login, error }) {
    const [formDetails, setFormDetails] = useState({ name: '', email: '' })

    const submitForm = (event) => {
        event.preventDefault();
        login(formDetails);
        clearInputs();
    }

    const handleChange = (event) => {
        setFormDetails({ ...formDetails, [event.target.name]: event.target.value });
    }

    const clearInputs = () => {
        setFormDetails({ name: '', email: '' });
    }

    return (
        <form>
            <div className='form-inner'>
                <h2>Login</h2>
                <section className='form-group'>
                    <label htmlFor='name'>Name: </label>
                    <input 
                        type='text'
                        name='name'
                        id='name'
                        placeholder='Name'
                        value={formDetails.name}
                        onChange={(event) => {handleChange(event)}}
                    /> 
                </section>
                <section className='form-group'>
                    <label htmlFor='email'>Email: </label>
                    <input 
                        type='email'
                        name='email'
                        id='email'
                        placeholder='Email (optional)'
                        value={formDetails.email}
                        onChange={(event) => handleChange(event)}
                    />
                </section>
                {error ? <h3>{error}</h3> : ''}
                <button className='submit-name-btn' onClick={event => submitForm(event)}>Submit</button>
            </div>
        </form>
    )
}

export default LoginForm;