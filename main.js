let fireworks = [];
let boom;


function setup() {
  let canvas = createCanvas(windowWidth,  windowHeight - 5);
  
  // Move the canvas so it’s inside our <div id="sketch-holder">.
  canvas.parent('sketch-holder');

  boom =  new Firework(200, 200);

  background(0);
  }

function draw() {

  background(0);
  boom.display();
   
}