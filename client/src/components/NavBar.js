import React from "react";
import '../styles/NavBar.css'


const NavBar = (props) => {
    return (
        <nav className="navBar">
            <label>One</label>
            <label>Two</label>
            <form onClick={props.logOut}>
                        <button type='submit'>Log Out</button>
            </form>
        </nav>
    )
}


export default NavBar;