import React from "react";
import '../styles/NavBar.css'


const NavBar = (props) => {
    return (
        <nav className="navBar">
            <form onClick={props.logOut}>
                <button className='logout-btn' type='submit'>Log Out</button>
            </form>
        </nav>
    )
}


export default NavBar;