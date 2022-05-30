import React from 'react';
import "../styles/ImageCard.css";

const ImageCard = ({ url, id, deletePhoto }) => {
    return (
        <div className='img-card'>
            <img id={id} src={url} />
            <button onClick={() => deletePhoto(id)}>❌</button>
        </div>
    );
}

export default ImageCard;