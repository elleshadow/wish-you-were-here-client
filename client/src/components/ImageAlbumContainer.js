import React from 'react';
import ImageCard from './ImageCard';
import '../styles/ImageAlbumContainer.css';

const ImageAlbumContainer = ({ photos, deletePhoto, handleUsePhoto }) => {
    const imageCards = photos.map((image) => {
        return (
            <ImageCard
                url={image.url}
                id={image.id}
                className='sample-image'
                key={image.id}
                deletePhoto={deletePhoto}
                handleUsePhoto={handleUsePhoto}
            />
        );
    });
    return (
        <div className='card-container'>
            { imageCards }
        </div>
    );
};

export default ImageAlbumContainer;