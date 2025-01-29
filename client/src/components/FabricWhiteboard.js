import React, { useState, useEffect } from "react";
import { fabric } from 'fabric';
import { FabricJSCanvas, useFabricJSEditor } from "fabricjs-react";
import "../styles/FabricWhiteboard.css";

const FabricWhiteboard = (props) => {
  const [myPhoto, setMyPhoto] = useState(true);
  const [downloadURL, setDownloadURL] = useState('');
  const [canvas, setCanvas] = useState('');
  const [location, setLocation] = useState({
    left: 0,
    top: 0,
    scale: 0
  });

  const { selectedObjects, editor, onReady } = useFabricJSEditor();

  const initCanvas = () => {
    const canvas2 = new fabric.Canvas('canv', {
      height: 900,
      width: 1050,
    });
    fabric.Image.fromURL('../../turing-classroom.jpg', function(img) {
         canvas2.setBackgroundImage('../../turing-classroom.jpg', canvas2.renderAll.bind(canvas2), {
            scaleX: canvas2.width / img.width,
            scaleY: canvas2.height / img.height
         });
      }, { crossOrigin: 'Anonymous' });
    return canvas2
  };

  useEffect(() => {
     setCanvas(initCanvas());
  }, []);

  useEffect(() => {
     props.connectedUsers && props.connectedUsers.forEach((connectedUser, index) => {
      if(!connectedUser.photoLocation) return
      const {
        email,
        id,
        name,
        photo,
        photoLocation,
        photoURL,
        pronouns,
      } = connectedUser

      const {
        top,
        left,
        scale
      } = photoLocation

      if (id === props.myID && photo && photoURL && myPhoto) {
        fabric.Image.fromURL(photoURL, function(img) {
          var oImg = img.set({ left: left, top: top}).scale(scale);
            return editor.canvas.add(oImg);
        });
        setMyPhoto(false)
      }
      if(photo && photoURL) {
         addImage(photoURL, photoLocation)
       };
     });
  }, [canvas]);

  useEffect(() => {
    setCanvas(initCanvas());
  }, [props.connectedUsers]);

  const createDataURL = async () => {
    console.log("attempting DL")
    const me = props.connectedUsers.find(connectedUser => {
      return connectedUser.id === props.myID
    })
    console.log(me)
    const {
      id,
      photoLocation,
      photoURL
    } = me

      await addImage(photoURL, photoLocation);
      const dataURL = canvas.toDataURL();
      console.log(dataURL);
      downloadCanvas(dataURL)
      return dataURL;
  }

  const downloadCanvas = (canvasUrl) => {
        const linkWrapper = document.createElement('a');
        linkWrapper.href = canvasUrl;
        linkWrapper.download = `wish-you-were-here-${Date.now()}`;
        linkWrapper.click();
        linkWrapper.remove();
    }

  const addImage = async (URL, location) => {

     const {
        top,
        left,
        scale
      } = location

    await fabric.Image.fromURL(URL, function(img) {
      var oImg = img.set({ left: left, top: top}).scale(scale);
      canvas.add(oImg);
     canvas.renderAll()
    }, { crossOrigin: 'Anonymous' });
  };
    useEffect(() => {
      props.sendPhotoLocation(location)
    }, [location]);


const updateLocation = () => {

  if (!editor.canvas._objects[0]) {
    return
  } else {
    const scale =  editor.canvas._objects[0].scaleX
    const left = editor.canvas._objects[0].left
    const top = editor.canvas._objects[0].top

    const newLocation = {
      left,
      top,
      scale
    };
    setLocation(newLocation)
    };
  };

  return (
    <>
      <section onMouseUp={updateLocation} className="whiteboard-container">
        <FabricJSCanvas className="sample-canvas" onReady={onReady} />
        <canvas id="canv" />
      </section>
      <button className='save-snap medium' onClick={createDataURL}></button>
    </>
  );
};

export default FabricWhiteboard
