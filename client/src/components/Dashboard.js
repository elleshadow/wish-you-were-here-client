import React, { useState } from 'react';
import '../styles/Dashboard.css';

function Dashboard({ userId }) {

    const readURL = (e) => {
        let input = document.getElementById("icon-button-file")
        if (input.files[0]) {
            let reader = new FileReader()
            reader.onload = (event) => {
                document.querySelector(".preview").src = event.target.result
            }
            reader.readAsDataURL(input.files[0])
        }
    }

    return (
        <section>
            <h1 className='large'>{`Hello ${userId}!`}</h1>
            <input 
                // accept="image/png, image/jpeg" - use to limit to .png and .jpeg
                accept="image/*" 
                id="icon-button-file" 
                type="file" 
                capture="environment" 
                onChange={(e) => readURL(e)}
            />
            <img className="preview" src=""/>
        </section>
    )
}

export default Dashboard;