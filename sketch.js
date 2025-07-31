import Brick from "./Brick.js";

/*
p5 has to use this instance format due to imports being used

p5 is now like a class now with methods to call :3

link to example:
https://editor.p5js.org/dark_fox/sketches/wIYv7WKyl
*/

const sketch = (p) => {
  let CANVAS_WIDTH = 700;
  let CANVAS_HEIGHT = 700;
  let htmlBody;
  let canvas;
  let canvasContainer;
  let widthRatio = CANVAS_WIDTH/window.innerWidth;
  let heightRatio = CANVAS_HEIGHT/window.innerHeight;

  let brick;

  p.setup = () => {
    canvas = p.createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
    console.log("Canvas: ", canvas);
    canvas.parent("p5-div")
    /* shorthand for document.getElementById("p5-div").appendChild(canvas.elt);
    .elt is used because it gets the DOM element 
    */
    htmlBody = document.querySelector("body");
    canvasContainer = document.getElementById("p5-div");


    console.log("Window Height: ",window.innerHeight);

    // center x = half the screen size
    canvas.position(window.innerWidth/2 - CANVAS_WIDTH/2, window.innerHeight/2 - CANVAS_HEIGHT/2);

    console.log("canvas position: ", canvas.position());

    p.describe("what?");
    brick = new Brick(50, 50, 100, 50, 'red');
    console.log('Setup done');
  };

  p.draw = () => {
    p.background(220);
    brick.draw(p);
  };

  p.windowResized = () => {
    console.log("windowResized is RUnning");
    canvas.position(window.innerWidth/2 - CANVAS_WIDTH/2, window.innerHeight/2 - CANVAS_HEIGHT/2);
  }
};


new p5(sketch);
