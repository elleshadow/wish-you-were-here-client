import React, { useState, useEffect } from "react";
import { fabric } from 'fabric';
import { FabricJSCanvas, useFabricJSEditor } from "fabricjs-react";
import "../styles/FabricWhiteboard.css";


const FabricWhiteboard = (props) => {
  const [myPhoto, setMyPhoto] = useState(true);
  const [canvas, setCanvas] = useState('');
  const [location, setLocation] = useState({
    left: 0,
    top: 0,
    scale: 0
  });

  const { selectedObjects, editor, onReady } = useFabricJSEditor();
  
    const initCanvas = () => {
      return new fabric.Canvas('canv', {
        height: 1000,
        width: 1200,
        backgroundColor: 'transparent',
      })
    }
    
  useEffect(() => {
    console.log("setting canvas")
    setCanvas(initCanvas());
    console.log(canvas)
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
      } else if(id !== props.myID && photo && photoURL) {
         addImage(photoURL, photoLocation)
       }
     })
  }, [canvas])

  useEffect(() => {
    setCanvas(initCanvas());
  }, [props.connectedUsers])

  const addImage = (URL, location) => {

     const {
        top, 
        left, 
        scale
      } = location


    fabric.Image.fromURL(URL, function(img) {
      var oImg = img.set({ left: left, top: top}).scale(scale);
      canvas.add(oImg);
      canvas.renderAll()
    });
  }
    useEffect(() => {
      console.log(location)
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
    }
    setLocation(newLocation)
    }
  }



  return (
    <>
    <div onMouseUp={updateLocation}  className="whiteboard-container">
      <img className="whiteboard-bg" src="../../turing-classroom.jpg"/>


        <FabricJSCanvas className="sample-canvas" onReady={onReady} />
        <canvas id="canv" />

    </div>

    </>
  );
}


export default FabricWhiteboard