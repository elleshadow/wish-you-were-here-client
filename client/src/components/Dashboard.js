import React, { useState, useRef, useEffect } from 'react';
import '../styles/Dashboard.css';

function Dashboard({ userId }) {
    const videoRef = useRef(null);
    const photoRef = useRef(null);

    const [hasPhoto, setHasPhoto] = useState(false);

    const getVideo = () => {
        navigator.mediaDevices.getUserMedia({ video: { width: 1920, height: 1080 }}) // width and height are scalable TO these params
        .then(videoFeed => {
            let video = videoRef.current;
            video.srcObject = videoFeed;
            video.play();
        })
        .catch(error => console.log(error));
    }
    const takePhoto = () => {
        const width = 414;
        const height = width / (16/9); // get a 16 by 9 ratio

        let video = videoRef.current;
        let photo = photoRef.current;
        photo.width = width;
        photo.height = height;

        let context = photo.getContext('2d');
        context.drawImage(video, 0, 0, width, height);
        setHasPhoto(true);
    }

    const clearPhoto = () => {
        let photo = photoRef.current;
        let context = photo.getContext('2d');

        context.clearRect(0, 0, photo.width, photo.height);
        setHasPhoto(false);

    }
    useEffect(() => {getVideo()}, [videoRef]);

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
        <section className='image-capture-container'>
            {/* <h1 className='large'>{`Hello ${userId}!`}</h1> */}
            <section className='live-photo'>
                <div className='camera-display'>
                    <video ref={videoRef}></video>
                    <button className="cheese btn" onClick={takePhoto}></button>
                </div>
                <div className={'result' + (hasPhoto ? 'hasPhoto' : '')}>
                    <canvas ref={photoRef}></canvas>
                    <button onClick={clearPhoto}>Clear</button>
                </div>
            </section>
            <section className='upload-photo'>
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
        </section>
    )
}

export default Dashboard;