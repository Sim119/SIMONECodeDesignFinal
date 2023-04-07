let radius = 150;
let angle = 0;
let speed = 0.05;

let centerX = 50
let centerY = 50

function setup(){
  createCanvas(1000, 1000);
}

function draw(){
  background(mouseX,mouseY,mouseX+20)
  translate(centerX,centerY)
  rotate(angle)
  noStroke()
  fill(89,186,200)
  square(270, 740, 100);
  square(390, 740, 100);
  square(510, 740, 100);
  square(630, 620, 100);
  square(150, 620, 100);
  square(510, 500, 100);
  square(630, 500, 100);
  square(150, 500, 100);
  square(150, 380, 100);
  square(630, 260, 100);
  square(150, 260, 100);
  square(270, 140, 100);
  square(390, 140, 100);
  square(510, 140, 100);
  angle = angle + speed;
}