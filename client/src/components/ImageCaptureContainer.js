import React, { useState, useRef, useEffect } from 'react';
import ImageAlbumContainer from './ImageAlbumContainer';
import '../styles/ImageCaptureContainer.css'

const ImageCaptureContainer = (props) => {
    const videoRef = useRef(null);
    const photoRef = useRef(null);

    const [photos, setPhotos] = useState([])
    const [hasPhoto, setHasPhoto] = useState(false);
    const [cameraOff, setCameraOff] = useState(false);

    const getVideo = () => {
        navigator.mediaDevices.getUserMedia({ video: { width: 1920, height: 1080 }}) // width and height are scalable TO these params || input what type of media we want
        .then(videoStream => {
            // var vidTrack = videoStream.getVideoTracks();
            let video = videoRef.current;
            video.srcObject = videoStream;
            if(cameraOff) {
                // videoStream.getVideoTracks()[0].stop();
                // vidTrack.forEach(track => track.enabled = false);
            } else {
                // vidTrack.forEach(track => track.enabled = true);
                // video.play();
            }

            var playPromise = video.play();

                if (playPromise !== undefined) {
                    playPromise.then(pause => {
                        video.pause()
                    })
                    .then(vid => {
                        video.play()
                    })
                    .catch(error => {
                    console.log(error)
                    });
                }

        })
        .catch(error => console.log(error));
    }
    useEffect(() => {getVideo()}, [videoRef]);

    const toggleCamera = () => {
        if(!cameraOff){
            setCameraOff(true);
        } else {
            setCameraOff(false);
        }
        getVideo();
    }

    const takePhoto = () => {
        const width = 414;
        const height = width / (16/9); // get a 16 by 9 ratio

        let video = videoRef.current;
        let photo = photoRef.current;
        photo.width = width;
        photo.height = height;

        let context = photo.getContext('2d');
        context.drawImage(video, 0, 0, width, height); // Screen shot of video from top left (0,0) and adjust height/width
        setHasPhoto(true);

        const currentCanvas = document.querySelector('#canvasImg');
        // Convert canvas to a data URL (URI)
        const canvasUrl = currentCanvas.toDataURL('image/png', 0.5); //file type and quality 50%
        // Create an anchor and set the href value to our data URL
        if(cameraOff) {
            // HAVE IMAGE CANVAS DOWNLOAD
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
            'id': Date.now() // replace with more robust randomized ID
        }
        setPhotos([...photos, newPhoto]);
    }

    const clearPhoto = () => {
        let photo = photoRef.current;
        let context = photo.getContext('2d');
        document.querySelector('.preview').src = '';

        context.clearRect(0, 0, photo.width, photo.height);
        setPhotos([]);
        setHasPhoto(false);
    }

    const deletePhoto = (photoToDeleteId) => {
        const filteredPhotos = photos.filter(photo => photo.id !== photoToDeleteId);
        setPhotos(filteredPhotos);
    }

    const readURL = () => {
        setHasPhoto(true);
        let input = document.getElementById('icon-button-file')
        if (input.files[0]) {
            let reader = new FileReader()
            reader.onload = (event) => {
                document.querySelector('.preview').src = event.target.result;
                addPhoto(event.target.result);
                props.handleSendPhoto(input.files[0])
            }
            reader.readAsDataURL(input.files[0])
        }
    }


    return (
        <section className='image-capture-container'>
            <section className='polaroid-cam'>
                <div className='camera-display'>
                    {!cameraOff ? <video ref={videoRef}></video> : <img className='no-video' src='https://cdn.britannica.com/21/78721-050-E0525C8E/stilton-cheese.jpg' />}
                    <button className='cheese btn' onClick={takePhoto}></button>
                </div>
            </section>
            <section className='controls'>
                <div className='side-btns'>
                    <button className='btn btn-styled' onClick={toggleCamera}>{!cameraOff ? 'Camera Off' : 'Camera On'}</button>
                    {hasPhoto && <button className='btn btn-styled' onClick={clearPhoto}>Clear</button>}
                    <input 
                        accept='image/png, image/jpeg' 
                        className='file-input btn btn-styled'
                        id='icon-button-file' 
                        type='file' 
                        capture='environment' 
                        onChange={readURL}
                    />
                </div>
                <div className='preview-stage'>
                    <h2 className='medium'>Image Preview:</h2>
                    <canvas id='canvasImg' ref={photoRef}></canvas>
                    <img className='preview' src=''/>
                </div>
            </section>
            {photos.length !== 0 && <ImageAlbumContainer photos={photos} deletePhoto={deletePhoto} />}
        </section>
    )
}

export default ImageCaptureContainer;