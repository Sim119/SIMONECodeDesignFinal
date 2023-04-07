function setup() {
  createCanvas(1000, 1000, WEBGL);
  background(200);
}

function draw() {
  stroke(mouseY, mouseX+50, mouseX-800);
  rotateX(frameCount * 0.04);
  rotateY(frameCount * 0.01);
   circle(500, 700, 50);
  circle(550, 700, 50);
  circle(450, 700, 50);
  circle(400, 650, 50);
  circle(400, 600, 50);
  circle(400, 550, 50);
  circle(400, 500, 50);
  circle(450, 450, 50);
  circle(500, 450, 50);
  circle(550, 450, 50);
  circle(600, 500, 50);
  circle(600, 650, 50);
  circle(600, 600, 50);
  circle(550, 600, 50);
}