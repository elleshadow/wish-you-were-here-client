import React, { useState, useRef, useEffect } from 'react';
import ImageAlbumContainer from './ImageAlbumContainer';
import { v4 as uuidV4 } from 'uuid';
import '../styles/ImageCaptureContainer.css';

const ImageCaptureContainer = (props) => {
    const videoRef = useRef(null);
    const photoRef = useRef(null);

    const [photos, setPhotos] = useState([]);
    const [hasPhoto, setHasPhoto] = useState(false);
    const [cameraOff, setCameraOff] = useState(false);

    const getVideo = () => {
        navigator.mediaDevices.getUserMedia({ video: { width: 1920, height: 1080 }}) 
        .then(videoStream => {
            let video = videoRef.current;
            video.srcObject = videoStream;
            var playPromise = video.play();
                if (playPromise !== undefined) {
                    playPromise.then(pause => {
                        video.pause();
                    })
                    .then(vid => {
                        video.play();
                    })
                    .catch(error => {

                    });
            };
        })
        .catch(error => {});
    };
    useEffect(() => {getVideo()}, [videoRef]);

    const toggleCamera = () => {
        if(!cameraOff){
            setCameraOff(true);
        } else {
            setCameraOff(false);
        };
        getVideo();
    };

    const takePhoto = () => {
        const width = 414;
        const height = width / (16/9);

        let video = videoRef.current;
        let photo = photoRef.current;
        photo.width = width;
        photo.height = height;

        let context = photo.getContext('2d');
        context.drawImage(video, 0, 0, width, height);
        setHasPhoto(true);

        const currentCanvas = document.querySelector('#canvasImg');
        const canvasUrl = currentCanvas.toDataURL('image/png', 0.5);
        if(cameraOff) {
            downloadCanvas(canvasUrl);
        }
        addPhoto(canvasUrl);
    }

    const downloadCanvas = (canvasUrl) => {
        const linkWrapper = document.createElement('a');
        linkWrapper.href = canvasUrl;
        linkWrapper.download = 'canvas-download';
        linkWrapper.click();
        linkWrapper.remove();
    }

    const addPhoto = (url) => {
        const newPhoto = {
            'url': url, 
            'id': uuidV4() 
        };
        setPhotos([...photos, newPhoto]);
    };

    const deletePhoto = (photoToDeleteId) => {
        const filteredPhotos = photos.filter(photo => photo.id !== photoToDeleteId);
        setPhotos(filteredPhotos);
    };

    const readFile = (url) => {
        const canvas = document.createElement('CANVAS');
        let ctx = canvas.getContext('2d');
        let img = new Image;
        img.onload = function() {
            ctx.drawImage(img,0,0); 
        };
        img.src = url;
        fetch(url)
        .then(response => response.blob())
        .then(function(blob) {
            const file = new File([blob], uuidV4(), {type: blob.type,});
            props.handleSendPhoto(file);
        });
    };

    // https://cdn.britannica.com/21/78721-050-E0525C8E/stilton-cheese.jpg

    return (
        <section className='image-capture-container'>
            <button className='btn btn-styled medium' onClick={toggleCamera}>{!cameraOff ? 'Camera Off' : 'Camera On'}</button>
            <section className='polaroid-cam'>
                <div className='camera-display'>
                    {!cameraOff ? <video ref={videoRef}></video> : <img className='no-video' src='./app-logo.png' />}
                    <button className='cheese btn' onClick={takePhoto}></button>
                </div>
            </section>
            {photos.length !== 0 && <ImageAlbumContainer handleUsePhoto={readFile} photos={photos} deletePhoto={deletePhoto} />}
            <section className='preview-stage hidden'>
                <canvas id='canvasImg' ref={photoRef}></canvas>
            </section>
        </section>
    );
};

export default ImageCaptureContainer;