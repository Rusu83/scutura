var x=0;
var a=12, b=3;
var v=0;

function setup() {
  createCanvas(window.innerWidth,window.innerHeight);
}


function draw() {
  background(0,40,40);
  ellipse(x,height/2,50,50);
  v=f/(a+b);
  x+=v;
  if (keyIsDown(DOWN_ARROW))
    f=15;
  else
    f=0;
}
