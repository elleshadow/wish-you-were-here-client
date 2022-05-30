import React from 'react';
import ImageCard from './ImageCard';
import "../styles/ImageAlbumContainer.css";

const ImageAlbumContainer = ({ photos }) => {
    const imageCards = photos.map((image, idx) => {
        return (
            <ImageCard
                url={image}
                key={idx}
            />
        )
    })
    return (
        <div className="card-container">
            { imageCards }
        </div>
    );
}

export default ImageAlbumContainer;