let slider;

function setup() { 
  createCanvas(1000, 1000);
  slider = createSlider(0, width, width/2);
  slider.size(400,50);
  slider.position(250,100);
} 

function draw() { 
  background(255,0,0);
  noStroke()
  fill(slider.value(), 0, 0)

  
  circle(400, 700, 80);
  circle(450, 710, 80);
  circle(500, 720, 80);
  circle(550, 710, 80);
  circle(600, 700, 80);
  circle(350, 650, 80);
  circle(340, 600, 80);
  circle(330, 550, 80);
  circle(340, 500, 80);
  circle(350, 450, 80);
  circle(400, 400, 80);
  circle(450, 390, 80);
  circle(500, 380, 80);
  circle(550, 390, 80);
  circle(600, 400, 80);
  circle(650, 650, 80);
  circle(650, 600, 80);
  circle(600, 600, 80);
  circle(550, 600, 80);
}