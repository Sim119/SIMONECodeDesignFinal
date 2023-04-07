// Where is the circle
let x, y;

function setup() {
  createCanvas(1000, 1000);
  background(230);
  // Starts in the middle
  x = width / 2;
  y = height;
}

function draw() {
  
  
  // Draw a circle
  stroke(50);
  fill(100);
  rect(x, y, 34, 94);
  
  // Jiggling randomly on the horizontal axis
  x = x + random(-1, 1);
  // Moving up at a constant speed
  y = y - 1;
  
  // Reset to the bottom
  if (y < 0) {
    y = height;
    
    
      // Draw a circle
  stroke(50);
  fill(100);
  ellipse(x, y, 204, 204);
  
  // Jiggling randomly on the horizontal axis
  x = x + random(-1, 1);
  // Moving up at a constant speed
  y = y - 1;
  
  // Reset to the bottom
  if (y < 0) {
    y = height;
  }
}
}