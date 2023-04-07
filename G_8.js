function setup(){
  createCanvas(1000, 1000);
  
}

function draw(){
  background(200,20,100);
  rectMode(CENTER);
  translate(width / 5, height / 10);
  translate(p5.Vector.fromAngle(millis() / 1000, 400));
  
  noFill();
  stroke(color(mouseX,mouseY,200));
  strokeWeight(16);
arc(500, 550, 320, 320, PI + QUARTER_PI, TWO_PI);
arc(500, 550, 320, 320, PI, PI + QUARTER_PI);
arc(500, 550, 320, 320, 20, PI + QUARTER_PI);
line(600,750, 565, 650);
  line(550, 650, 590, 650);
}