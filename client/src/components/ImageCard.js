import React, { useState, useRef, useEffect } from 'react';
import "../styles/ImageCard.css";

const ImageCard = ({ url, idx}) => {
    return (
        <div className='img-card'>
            <img src={url} />
        </div>
    );
}

export default ImageCard;