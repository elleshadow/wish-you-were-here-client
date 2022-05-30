import React from 'react';
import ImageCard from './ImageCard';
import "../styles/ImageAlbumContainer.css";

const ImageAlbumContainer = ({ photos, deletePhoto }) => {
    const imageCards = photos.map((image) => {
        return (
            <ImageCard
                url={image.url}
                id={image.id}
                key={image.id}
                deletePhoto={deletePhoto}
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