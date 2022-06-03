import React from 'react';
import '../styles/ImageCard.css';

// import './images/bed-2-icon.png';

const ImageCard = ({ url, id, className, deletePhoto }) => {
    return (
        <div className='img-card'>
        <img id={id} src={url} className={className} alt='snapshot image' />
        <div className='img-btns'>
            <button className='btn' onClick={() => deletePhoto(id)}>❌</button>
            <a download={`snapshot_${id}`} href={url} title='snapshot'>
                <img src='https://cdn-icons-png.flaticon.com/512/3580/3580083.png' alt='download arrow icon' />
            </a>
        </div>
        </div>
    );
}

export default ImageCard;