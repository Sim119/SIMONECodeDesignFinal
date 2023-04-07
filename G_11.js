

function setup(){
  createCanvas(1000, 1000);
  background(210)
}

function draw(){
  
  translate(centerX,centerY)
  rotate(angle)
  
  fill(89,186,200,mouseY)
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
  
    translate(centerX,centerY)
  rotate(angle)
  
  fill(79,56,200,mouseX)
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