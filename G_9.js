function setup(){
  createCanvas(1000, 1000);
  background(89,186,200)
}

function draw(){
  noStroke();
  fill(mouseX,255,mouseY)
  square(30, 20, 100);
  square(150, 20, 100);
  square(270, 20, 100);
  square(390, 20, 100);
  square(510, 20, 100);
  square(630, 20, 100);
  square(750, 20, 100);
  square(870, 20, 100);
  
  square(30, 140, 100);
  square(150, 140, 100);
  fill(89,186,200)
  square(270, 140, 100);
  square(390, 140, 100);
  square(510, 140, 100);
 fill(mouseY,255,mouseX)
  square(630, 140, 100);
  square(750, 140, 100);
  square(870, 140, 100);
  
   square(30, 260, 100);
  fill(89,186,200)
  square(150, 260, 100);
  fill(255,mouseY,mouseX)
  square(270, 260, 100);
  square(390, 260, 100);
  square(510, 260, 100);
  fill(89,186,200)
  square(630, 260, 100);
 fill(255,mouseX,mouseY)
  square(750, 260, 100);
  square(870, 260, 100);
  
  square(30, 380, 100);
  fill(89,186,200)
  square(150, 380, 100);
  fill(255,mouseX-50,mouseY+25)
  square(270, 380, 100);
  square(390, 380, 100);
  square(510, 380, 100);
  square(630, 380, 100);
  square(750, 380, 100);
  square(870, 380, 100);
  
  square(30, 500, 100);
fill(89,186,200)
  square(150, 500, 100);
fill(mouseX+100,255,mouseY-70)
  square(270, 500, 100);
  square(390, 500, 100);
 fill(89,186,200)
  square(510, 500, 100);
  square(630, 500, 100);
 fill(255,mouseY+70,mouseX)
  square(750, 500, 100);
  square(870, 500, 100);
  
  square(30, 620, 100);
fill(89,186,200)
  square(150, 620, 100);
fill(mouseX,255,mouseY+20)
  square(270, 620, 100);
  square(390, 620, 100);
  square(510, 620, 100);
fill(89,186,200)
  square(630, 620, 100);
 fill(mouseX-60,mouseY,255)
  square(750, 620, 100);
  square(870, 620, 100);
  
  square(30, 740, 100);
  square(150, 740, 100);
fill(89,186,200)
  square(270, 740, 100);
  square(390, 740, 100);
  square(510, 740, 100);
fill(255,mouseX,mouseY)
  square(630, 740, 100);
  square(750, 740, 100);
  square(870, 740, 100);
}
