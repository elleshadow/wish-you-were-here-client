import React, { useState } from 'react';
import '../styles/ImageCard.css';

// import './images/bed-2-icon.png';

const ImageCard = ({ url, id, className, deletePhoto, handleUsePhoto }) => {

const [buttonText, setButtonText] = useState("Use Photo")
const [buttonIsDisabled, setButtonIsDisabled] = useState(false)


    const sendPhotoToServer = (image) => {
        setButtonIsDisabled(true)
        setButtonText("sending...")
        handleUsePhoto(image)
    }

    return (
        <div className='img-card'>
        <img id={id} src={url}  className={className} alt='snapshot image' />
        <div className='img-btns'>
            <button className='btn' onClick={() => deletePhoto(id)}>❌</button>
            {/* <a download={`snapshot_${id}`} href={url} title='snapshot'>
                <img src='https://cdn-icons-png.flaticon.com/512/3580/3580083.png' alt='download arrow icon' />
            </a> */}
            <button 
            className='btn' 
            disabled={buttonIsDisabled}
            data-url={url} 
            onClick={(e) => {
                sendPhotoToServer(e.target.dataset.url)
                }}>{buttonText}</button>
        </div>
        </div>
    );
}

export default ImageCard;