function setup() { 
  createCanvas(1000, 1000);
  
}

let noiseScale=0.02;

function draw() {
  background(0,10);
  for (let x=0; x < width; x++) {
    let noiseVal = noise((mouseX+x)*noiseScale, mouseY*noiseScale);
    stroke(noiseVal*mouseX-200,mouseY-400,55);
    line(x, mouseY+noiseVal*80, x, height);
  }

  noFill();
  stroke(color(mouseX,mouseY,2));
  strokeWeight(76);
arc(500, 550, 320, 320, PI + QUARTER_PI, TWO_PI);
arc(500, 550, 320, 320, PI, PI + QUARTER_PI);
arc(500, 550, 320, 320, 20, PI + QUARTER_PI);

  line(mouseX, mouseY, 565, 650);
  
  line(550, 650, 590, 650);
}