var x=0;

function setup() {
  createCanvas(window.innerWidth,window.innerHeight);
}


function draw() {
  background(0,40,40);
  ellipse(x,height/2,50,50);
  if (keyIsDown(DOWN_ARROW)) {
    x += 5;
  }
}
