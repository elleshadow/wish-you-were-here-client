import React, { useState, useEffect } from "react";
import { fabric } from 'fabric';
import { FabricJSCanvas, useFabricJSEditor } from "fabricjs-react";
import "../styles/FabricWhiteboard.css";


const FabricWhiteboard = (props) => {
  const [canvas, setCanvas] = useState('');

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
       console.log(connectedUser.id === props.myID)
       console.log(props)
       console.log(connectedUser.id, props.myID)
      if (connectedUser.id === props.myID && connectedUser.url) {
        fabric.Image.fromURL(connectedUser.url, function(img) {
          var oImg = img.set({ left: 0, top: 0}).scale(0.25);
            return editor.canvas.add(oImg);
        });
      } else if(connectedUser.url) {
         console.log("userURL", connectedUser.url, index)
         addImage(connectedUser.url, connectedUser.location, connectedUser.scale)
       }
     })
  }, [canvas, props.connectedUsers])

  const addImage = (URL) => {
    // let object 

    fabric.Image.fromURL(URL, function(img) {
      var oImg = img.set({ left: 2, top: 50}).scale(0.25);
      canvas.add(oImg);
      canvas.renderAll()
    });
  }

  return (
    <>
    <div className="whiteboard-container">
      <img className="whiteboard-bg" src="https://images.rawpixel.com/image_1000/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvcC1zODMtcGFpLTY2MzQtY2FyZC0wMWEuanBn.jpg"/>


        <FabricJSCanvas className="sample-canvas" onReady={onReady} />
        <canvas id='canv' />

    </div>

    </>
  );
}


export default FabricWhiteboard