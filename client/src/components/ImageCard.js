import React, { useState } from 'react';
import '../styles/ImageCard.css';

const ImageCard = ({ url, id, className, deletePhoto, handleUsePhoto }) => {

const [buttonText, setButtonText] = useState('Use Photo');
const [buttonIsDisabled, setButtonIsDisabled] = useState(false);


    const sendPhotoToServer = (image) => {
        setButtonIsDisabled(true);
        setButtonText('sending...');
        handleUsePhoto(image);
    }

    return (
        <div className='img-card'>
            <img id={id} src={url}  className={className} alt='snapshot image' />
            <section className='img-btns'>
                <button className='btn medium' onClick={() => deletePhoto(id)}>❌</button>
                <button
                className='save-btn btn medium'
                disabled={buttonIsDisabled}
                data-url={url}
                onClick={(e) => {
                    sendPhotoToServer(e.target.dataset.url);
                    }}></button>
            </section>
        </div>
    );
};

export default ImageCard;
