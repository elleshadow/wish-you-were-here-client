import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { v4 as uuidV4 } from 'uuid';
import '../styles/LoginForm.css';

function LoginForm({ login, userId, error }) {
    const [formDetails, setFormDetails] = useState({ name: '', email: '', pronouns: '' });

    const submitForm = (event) => {
        event.preventDefault();
        login({
            'id': uuidV4(),
            'name': formDetails.name,
            'pronouns': formDetails.pronouns,
            'email': formDetails.email
        });
        clearInputs();
    };

    const handleChange = (event) => {
        setFormDetails({ ...formDetails, [event.target.name]: event.target.value });
    };

    const clearInputs = () => {
        setFormDetails({ name: '', email: '', pronouns: '' });
    };

    return (
            <section className='form-page'>
                <form className='form-container'>
                    <div className='form-inner'>
                        <div className='login-title-box'>
                            <h3 className='login-title medium-large'>Wish You Were Here</h3>
                            <img className='login-logo' src='./app-logo.png'/>
                        </div>
                        {/* <h2 className='login-header mid-medium'>Login</h2> */}
                        <section className='form-group medium'>
                            <label className='login-label' htmlFor='name'>Name: </label>
                            <input 
                                className='input-login medium-small'
                                type='text'
                                name='name'
                                placeholder='Name'
                                value={formDetails.name}
                                onChange={(event) => {handleChange(event)}}
                            /> 
                        </section>
                        <section className='form-group medium'>
                            <label className='login-label' htmlFor='name'>Pronouns: </label>
                            <input 
                                className='input-login medium-small'
                                type='text'
                                name='pronouns'
                                placeholder='Pronouns (optional)'
                                value={formDetails.pronouns}
                                onChange={(event) => {handleChange(event)}}
                            /> 
                        </section>
                        {error ? <h3 className='medium'>{error}</h3> : ''}
                        <Link to={`/dashboard`}>
                            <button className='submit-name-btn medium' onClick={event => submitForm(event)}>Login</button>
                        </Link>
                    </div>
                </form>
            </section>
         );
    };

export default LoginForm;