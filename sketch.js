var r=0,g=0,b=0,rf,gf,bf;
var stare=0;

function setup() {
  createCanvas(window.innerWidth,window.innerHeight);
  rf=random(255);
  gf=random(255);
  bf=random(255);
  textAlign(CENTER,CENTER);
  rectMode(CENTER);
}

function draw() {
  BG();
  switch(stare){
    case 0:titlu();break;
    case 1:pula();break;
    case 2:bravo();
  }
}

function BG(){
  background(r,g,b);
  r=lerp(r,rf,0.03);
  g=lerp(g,gf,0.03);
  b=lerp(b,bf,0.03);
  if((r>rf-1&&r<rf+1)&&(g>gf-1&&g<gf+1)&&(b>bf-1&&b<bf+1)){
    rf=random(255);
    gf=random(255);
    bf=random(255); 
  }
}

function titlu(){
  textSize(width/25);
  fill(0);
  stroke(255);
  strokeWeight(width/300);
  text("Cât de bine rupi pula?",width/2,height/10);
  noFill();
  rect(width/2,height/2,width/3,height/3,20);
  text("Continuare",width/2,height/2);
}

function pula(){
  fill(0);
  text("Apasă pe pulă și află",width/2,height/5);
  fill(200,155,100);
  rect(width/2,2*height/3,width/4,width/16);
  fill(150,100,50);
  ellipse(width/2+width/8,2*height/3-height/12,width/12);
  ellipse(width/2+width/8,2*height/3+height/12,width/12);
  fill(255,100,100);
  ellipse(width/2-width/8,2*height/3,width/10);
}

function bravo(){
  fill(0);
  textSize(width/25);
  text("Felicitări!\nRupi pula AVANSAT",width/2,height/3);
  textSize(width/50);
  text("RECORD:Prepeliță Mareana Dañela-EXPERIMENTAT",width/2,3*height/4);
}

function mousePressed(){
  switch(stare){
    case 0:if(mouseX>width/2-width/6&&mouseX<width/2+width/6&&mouseY<height/2+height/6&&mouseY>height/2-height/6)stare=1;break;
    case 1:stare=2;break;
  }
}








