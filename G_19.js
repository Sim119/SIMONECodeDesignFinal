function setup(){
  createCanvas(1000, 1000);
  
}

function draw(){
  background(50,60);
  
  
  noStroke();
  fill(mouseX,mouseY,mouseY-800)
  circle(mouseX,mouseY,300);
  
  
  noStroke()
  fill(50,150,50);
  circle(400, 700, mouseY-500);
  circle(450, 710, mouseY-500);
  circle(500, 720, mouseX-500);
  circle(550, 710, mouseY-500);
  circle(600, 700, mouseX-500);
  circle(350, 650, mouseY-500);
  circle(340, 600, mouseY-500);
  circle(330, 550, mouseX-500);
  circle(340, 500, mouseY-500);
  circle(350, 450, mouseX-500);
  circle(400, 400, mouseY-500);
  circle(450, 390, mouseY-500);
  circle(500, 380, mouseX-500);
  circle(550, 390, mouseX-500);
  circle(600, 400, mouseY-500);
  circle(650, 650, mouseX-500);
  circle(650, 600, mouseY-500);
  circle(600, 600, mouseY-500);
  circle(550, 600, mouseX-500);

  
}