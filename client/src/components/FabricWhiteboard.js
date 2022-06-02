import React, { useState, useEffect } from "react";
import { fabric } from 'fabric';
import { FabricJSCanvas, useFabricJSEditor } from "fabricjs-react";
import "../styles/FabricWhiteboard.css";


const FabricWhiteboard = (props) => {
  const [canvas, setCanvas] = useState('');
  const [location, setLocation] = useState({
    left: 0,
    top: 0,
    scale: 0
  });

  const [timer, setTimer] = useState(0);

  const { selectedObjects, editor, onReady } = useFabricJSEditor();
  
    const initCanvas = () => {
      return new fabric.Canvas('canv', {
        height: 800,
        width: 800,
        backgroundColor: 'transparent',
      })
    }
    
  useEffect(() => {
    console.log("setting canvas")
    setCanvas(initCanvas());
    console.log(canvas)
  }, []);

  useEffect(() => {
    console.log("running")
    console.log(canvas)
     props.connectedUsers && props.connectedUsers.forEach((connectedUser, index) => {
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

      if (id === props.myID && photo && photoURL) {
        fabric.Image.fromURL(photoURL, function(img) {
          var oImg = img.set({ left: left, top: top}).scale(scale);
            return editor.canvas.add(oImg);
        });
      } else if(photo && photoURL) {
         console.log("userURL", photoURL, index)
         addImage(photoURL, photoLocation)
       }
       console.log("Multiple ME", editor.canvas._objects)
       console.log("Multiple ME", editor.canvas._objects.length)
     })
  }, [canvas, props.connectedUsers])

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
  if (!editor.canvas._objects[0].ownMatrixCache.value) return
  const [scale, , , ,left,top] =  editor.canvas._objects[0].ownMatrixCache.value
  const newLocation = {
    left,
    top,
    scale
  }
  setLocation(newLocation)
   }



  return (
    <>
    <div onMouseUp={updateLocation}  className="whiteboard-container">
      <img className="whiteboard-bg" src="https://images.rawpixel.com/image_1000/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvcC1zODMtcGFpLTY2MzQtY2FyZC0wMWEuanBn.jpg"/>


        <FabricJSCanvas className="sample-canvas" onReady={onReady} />
        <canvas id='canv' />

    </div>

    </>
  );
}


export default FabricWhiteboard