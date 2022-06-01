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
    <div className="whiteboard">
      <h1>Whiteboard</h1>
      <button onClick={onAddCircle}>Add circle</button>
      <button onClick={onAddRectangle}>Add Rectangle</button>
      <FabricJSCanvas className="sample-canvas" onReady={onReady} />
    </div>
  );
}


export default FabricWhiteboard