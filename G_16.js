let t = 0; // time variable

function setup() {
  createCanvas(1000, 1000);
  noStroke();
  fill(40, 200, 40);
}

function draw() {
  background(mouseY,mouseX,mouseX-50, 10,); // translucent background (creates trails)

  // make a x and y grid of ellipses
  fill(mouseX,mouseY,mouseY-50)
  for (let x = 0; x <= width; x = x + 30) {
    for (let y = 0; y <= height; y = y + 30) {
      // starting point of each circle depends on mouse position
      const xAngle = map(mouseX, 0, width, -4 * PI, 4 * PI, true);
      const yAngle = map(mouseY, 0, height, -4 * PI, 4 * PI, true);
      // and also varies based on the particle's location
      const angle = xAngle * (x / width) + yAngle * (y / height);

      // each particle moves in a circle
      const myX = x + 20 * cos(2 * PI * t + angle);
      const myY = y + 20 * sin(2 * PI * t + angle);

      ellipse(myX, myY, 10); // draw particle
    }
  }
t = t + 0.004; // update time
  
angleMode(DEGREES);
  
  let a = atan2(mouseY - height / 2, mouseX - width / 2);
  
  fill(10,70,124)
  stroke(10,70,124)
  rect(560,620,400,100)
  
  fill(10,70,124)
  stroke(10,70,124)
  rect(800,620,100,400)
  
  fill(10,70,124)
  stroke(10,70,124)
  translate(width / 2, height / 2);
  rotate(a)
  ellipse(120,330,200,200);
  

  
}