function setup() {
  createCanvas(1000, 1000);
}

function draw() {
  background(mouseY-20, 9,mouseX-20, 75);
  let s = 'G. G. G. G. G. G. G. G. G.  ';
  textFont("Work Sans");
  cursor('https://res.cloudinary.com/dgksx9vlc/image/upload/v1642596128/cursor_isnod6.png', 64,64);
  textSize(width*0.20);
  for(i=0;i<20;i++) {
    if(i%2==0)
      fill(mouseX,125,mouseY);
    else
      fill(mouseY,125,mouseX);
    
    // fill(i*20,0,0);
    
    distX = mouseX - (width/2);
    x = map(distX,0, width/2, 0, 10);
    distY = mouseY - (height/2);
    y = map(distY,0, height/2, 0, 10);
    
    text(s, 150+i*x, 150+i*y, width-200, height-200); // Text wraps within text box 
  }
}