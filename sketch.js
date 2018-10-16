var ok=0;

function setup() {
  createCanvas(window.innerWidth,window.innerHeight);
  textSize(height/5);
}

function draw() {
  if(ok==0){
    background(40,50,120);
  }
  else{
    background(120,0,0);
    text("Pe mă-ta să \no scuturi așa",width/2,height/2);
  }
}

function deviceShaken(){
  ok=1;
}
