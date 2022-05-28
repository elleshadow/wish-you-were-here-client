import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/LoginForm.css';

function LoginForm({ login, userId, error }) {
    const [formDetails, setFormDetails] = useState({ name: '', email: '', pronouns: '' });

    const submitForm = (event) => {
        login(formDetails);
        clearInputs();
    }

    const handleChange = (event) => {
        setFormDetails({ ...formDetails, [event.target.name]: event.target.value });
    }

    const clearInputs = () => {
        setFormDetails({ name: '', email: '', pronouns: '' });
    }

    return (
        <form className='form-container'>
            <div className='form-inner'>
                <h2 className='large'>Login</h2>
                <section className='form-group medium'>
                    <label htmlFor='name'>Name: </label>
                    <input 
                        className='input-login'
                        type='text'
                        name='name'
                        placeholder='Name'
                        value={formDetails.name}
                        onChange={(event) => {handleChange(event)}}
                    /> 
                </section>
                <section className='form-group medium'>
                    <label htmlFor='name'>Pronouns: </label>
                    <input 
                        className='input-login'
                        type='text'
                        name='pronouns'
                        placeholder='Pronouns (optional)'
                        value={formDetails.pronouns}
                        onChange={(event) => {handleChange(event)}}
                    /> 
                </section>
                <section className='form-group medium'>
                    <label htmlFor='email'>Email: </label>
                    <input 
                        className='input-login'
                        type='email'
                        name='email'
                        placeholder='Email (optional)'
                        value={formDetails.email}
                        onChange={(event) => handleChange(event)}
                    />
                </section>
                {error ? <h3 className='medium'>{error}</h3> : ''}
                <Link to={`/dashboard/${userId}`}>
                    <button className='submit-name-btn medium' onClick={event => submitForm(event)}>Submit</button>
                </Link>
            </div>
        </form>
    )
}

export default LoginForm;