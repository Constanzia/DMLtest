let cs 
function setup() {
  createCanvas(windowWidth,windowHeight);
cs= createElement('h6', '.');
}

function draw() {
  background(255);
 clear();
//blendMode(LIGHTEST);
  fill(200)
  noStroke()
 //circle(mouseX,mouseY,30);

cs.style('background-color', 'white');
  cs.style('color', 'white');
  cs.style('border-radius','800px')
    cs.style('width','35px')
      cs.style('height','35px')
cs.style('mix-blend-mode', 'exclusion');
cs.position(mouseX, mouseY+0.8*windowHeight);
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
