var myFrameRate = 20; 
function setup() {
  createCanvas(1000, 1000);
  frameRate(myFrameRate);
}

function draw() {
  background(220,70,);

  var cycleSpeed = 1000.0; 
  var t = millis() / cycleSpeed;
  var nBlurFrames = 4;

  for (var i = 0; i < nBlurFrames; i++) {
    var delta = (200.0/myFrameRate)*i / nBlurFrames; 
    var x = 650 + 300.0 * sin(t+delta);
    var y = 550;
    
    angleMode(DEGREES);
  
  let a = atan2(mouseY - height / 2, mouseX - width / 2);
  
  fill(mouseX,70,124)
  noStroke()
  rect(560,620,400,100)
  
  fill(10,70,mouseX)
  noStroke()
  rect(800,620,100,400)
  
  fill(10,mouseX,124)
  noStroke()
  translate(width / 2, height / 2);
  rotate(a)
  ellipse(120,330,200,200);
  }
}