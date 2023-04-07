function setup(){
  createCanvas(1000, 1000);
  
  
}

function draw(){
  background(150);

noFill();
  stroke(color(mouseX,mouseY,200));
  strokeWeight(6);
arc(500, 550, 320, 320, PI + QUARTER_PI, TWO_PI);
arc(500, 550, 320, 320, PI, PI + QUARTER_PI);
arc(500, 550, 320, 320, 20, PI + QUARTER_PI);

  line(mouseX, mouseY, 565, 650);
  
  line(550, 650, 590, 650);
}