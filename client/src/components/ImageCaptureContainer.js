import React, { useState, useRef, useEffect } from 'react';
import ImageAlbumContainer from './ImageAlbumContainer';
import "../styles/ImageCaptureContainer.css"

const ImageCaptureContainer = () => {
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
            video.play();
        })
        .catch(error => console.log(error));
    }
    useEffect(() => {getVideo()}, [videoRef]);

    const toggleCamera = () => {
        console.log("HERE")
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
        console.log(photo)
        photo.width = width;
        photo.height = height;

        let context = photo.getContext('2d');
        context.drawImage(video, 0, 0, width, height); // Screen shot of video from top left (0,0) and adjust height/width
        // console.log('context', context)
        setHasPhoto(true);
        // console.log('video Ref', videoRef)
        // console.log('photo Ref', photoRef)
        // window.location = document.getElementById("canvas").toDataURL('image/png');
        const myCanvas = document.querySelector('#canvasImg');
        const dataURI = myCanvas.toDataURL();
        setPhotos([...photos, dataURI]);
    }

    const clearPhoto = () => {
        let photo = photoRef.current;
        let context = photo.getContext('2d');
        document.querySelector(".preview").src = '';

        context.clearRect(0, 0, photo.width, photo.height);
        setPhotos([]);
        setHasPhoto(false);
    }

    const readURL = () => {
        setHasPhoto(true);
        let input = document.getElementById("icon-button-file")
        if (input.files[0]) {
            let reader = new FileReader()
            reader.onload = (event) => {
                document.querySelector(".preview").src = event.target.result;
            }
            reader.readAsDataURL(input.files[0])
        }
    }

    return (
        <section className='image-capture-container'>
                    <section className='polaroid-cam'>
                        <div className='camera-display'>
                            {!cameraOff ? <video ref={videoRef}></video> : <img className='no-video' src='https://cdn.britannica.com/21/78721-050-E0525C8E/stilton-cheese.jpg' />}
                            <button className="cheese btn" onClick={takePhoto}></button>
                        </div>
                        <div className='side-btns'>
                            <input 
                                // accept="image/png, image/jpeg" - use to limit to .png and .jpeg
                                className='file-input btn btn-styled'
                                accept="image/*" 
                                id="icon-button-file" 
                                type="file" 
                                capture="environment" 
                                onChange={(e) => readURL(e)}
                            />
                            <button className="btn btn-styled" onClick={toggleCamera}>{!cameraOff ? 'Camera Off' : 'Camera On'}</button>
                        {hasPhoto && <button className='btn btn-styled' onClick={clearPhoto}>Clear</button>}
                        </div>
                    </section>
                    <section className='photo-album-container'>
                        <div className={'result' + (hasPhoto ? 'hasPhoto' : '')}>
                            <canvas id='canvasImg' ref={photoRef}></canvas>
                            <img className="preview" src=""/>
                        </div>
                    </section>
                    {photos.length !==0 && <ImageAlbumContainer photos={photos} />}
                </section>
        )
}

export default ImageCaptureContainer;


{/* <section className='photo-album-container'>
<div className={'result' + (hasPhoto ? 'hasPhoto' : '')}>
    <canvas id='canvasImg' ref={photoRef}></canvas>
    <img className="preview" src=""/>
</div>
</section> */}