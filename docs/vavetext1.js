let bgcolor = 180;
var inp, i, pt;
var cur
let myFont;
let points;
var bounds;
function preload() {
  myFont = loadFont("Poppins-Medium.ttf");
}
function setup() {
  createCanvas(600, 400);
  inp = createInput("");
  inp.position(350, 350);
  inp.size(50, 20);
  cur=createSlider(50,1000,700)
  cur.position(160, 350);
  cur.addClass('mySliders');
  //inp.input(myInputEvent);
}

function draw() {
  background(bgcolor);
  var word = inp.value();
  textAlign(CENTER);
  textFont(myFont);
  noFill();
  stroke(0);
  textSize(65);
  //text(word,200,200)

  var pt = myFont.textToPoints(word, 120, 220,150,{  sampleFactor: 1.5,
    simplifyThreshold: 0});
  var bounds = myFont.textBounds(word, 80, 220, 100);

 beginShape(POINTS);
  for (var i = 0; i < pt.length; i++) {
    var pts = pt[i];
    strokeWeight(2.5);
    vertex(pts.x+
        sin(cur.value()/100 * pts.y / bounds.h + millis() / 1000) * width / 30, pts.y);
    

  }
  endShape(CLOSE);
  
  
  
}
function myInputEvent() {
  //console.log('you are typing: ', this.value());
}
