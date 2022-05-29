import React, { useState } from 'react';
import '../styles/Dashboard.css';

function Dashboard({ userId }) {
    let image = ""

    const saveImg = (event) => {
        console.log("TARGET", event.target.value);
        console.log("TARGET", event.target.id.value);
    }

    const displayImg = (event) => {
        event.preventDefault()
        console.log("EVENT SUBMIT", event)
        console.log("TARGET SUBMIT", event.target.value);
        console.log("FILE????", document.getElementById("icon-button-file").files[0])
        image = document.getElementById("icon-button-file").files[0]
    }

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
            <form onSubmit={(event) => displayImg(event)}>
                <input 
                    // accept="image/png, image/jpeg" - use to limit to .png and .jpeg
                    accept="image/*" 
                    id="icon-button-file" 
                    type="file" 
                    capture="environment" 
                    onClick={(event) => {saveImg(event)}}
                    onChange={(e) => readURL(e)}
                />
                <button>SUBMIT</button>
            
            </form>
            {/* <img src="../../public/me.png"/> */}
            <img className="preview" src=""/>
        </section>
    )
}

export default Dashboard;