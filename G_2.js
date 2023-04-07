function setup() {
  createCanvas(1000, 1000);
  background(220,60, 40);
  
  
}

function draw() {
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
