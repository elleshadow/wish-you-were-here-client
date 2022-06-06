import React from 'react';
import '../styles/NavBar.css';

const NavBar = (props) => {
    return (
        <nav className='navBar'>
            <div className='logo-title-box'>
                <img className='nav-logo' src='./app-logo.png'/>
                <h1 className='app-title medium'>Wish You Were Here</h1>
            </div>
            <form onClick={props.logOut}>
                <button className='logout-btn medium-small' type='submit'>Log Out</button>
            </form>
        </nav>
    );
};

export default NavBar;