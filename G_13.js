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

  noFill();
    stroke(80,90,190)
  strokeWeight(16);
arc(x, y, 620, 620, PI + QUARTER_PI, TWO_PI);
arc(x, y, 620, 620, PI, PI + QUARTER_PI);
arc(x, y, 620, 620, 20, PI + QUARTER_PI);
line(x,y, y,y);
  line(x, y, x, x);

  }
}