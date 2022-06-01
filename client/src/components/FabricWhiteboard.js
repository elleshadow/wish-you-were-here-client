import React from "react";
import { fabric } from 'fabric';
import { FabricJSCanvas, useFabricJSEditor } from "fabricjs-react";
import "../styles/FabricWhiteboard.css";


const FabricWhiteboard = () => {

  const { selectedObjects, editor, onReady } = useFabricJSEditor();
  fabric.Image.fromURL('https://api-wish-you-were-here.herokuapp.com/without-background/Alex2.jpg', function(img) {
    var oImg = img.set({ left: 0, top: 0}).scale(0.25);
    editor.canvas.add(oImg);
  });

  const onAddCircle = () => {
    editor.addCircle();
  };

  const onAddRectangle = () => {
    editor.addRectangle();
  };

  return (
    <div className="whiteboard-container">
      <img className="whiteboard-bg" src="https://images.rawpixel.com/image_1000/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvcC1zODMtcGFpLTY2MzQtY2FyZC0wMWEuanBn.jpg"/>
      <div className="whiteboard">
        <FabricJSCanvas className="sample-canvas" onReady={onReady} />
      </div>
    </div>
  );
}


export default FabricWhiteboard