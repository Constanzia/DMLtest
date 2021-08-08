let bgcolor = 180;
var inp, i, pt0, pt1, pt2, pt3, pt4, pt5, pt6, pt7,pt8;
var cur;
let myFont;
let points;
var bounds;
let k,
  sf = 0.5;
function preload() {
  myFont = loadFont("BaseMonoWideBoldItalic_6011.ttf");
}
function setup() {
  createCanvas(windowWidth*4/5, windowHeight);
  inp = createInput("WAVETEXT");
  inp.position(width / 2 + 180, (7 * height) / 8+10);
  inp.size(120, 10);
  cur = createSlider(50, 1100, 600, 0.3);
  cur.position(width / 2 - 100, (7 * height) / 8);
  cur.addClass("mySliders");
  //inp.input(myInputEvent);
}

function draw() {
  background(bgcolor);
  k = height / 11;
  var word = inp.value();
  textAlign(CENTER);
  textFont(myFont);
  //noFill();
  noStroke(0);
  fill(0);
  textSize(65);
  //text(word,200,200)

  var pt0 = myFont.textToPoints(
    word.charAt(0),
    width / 11,
    height / 3,
    height / 8,
    { sampleFactor: sf, simplifyThreshold: 0 }
  );
  var bounds = myFont.textBounds(word, width / 11, 220, 100);
  var pt1 = myFont.textToPoints(
    word.charAt(1),
    width / 11 + k,
    height / 3,
    height / 8,
    { sampleFactor: sf, simplifyThreshold: 0 }
  );
  var pt2 = myFont.textToPoints(
    word.charAt(2),
    width / 11 + 2 * k,
    height / 3,
    height / 8,
    { sampleFactor: sf, simplifyThreshold: 0 }
  );
  var pt3 = myFont.textToPoints(
    word.charAt(3),
    width / 11 + 3 * k,
    height / 3,
    height / 8,
    { sampleFactor: sf, simplifyThreshold: 0 }
  );
  var pt4 = myFont.textToPoints(
    word.charAt(4),
    width / 11 + 4 * k,
    height / 3,
    height / 8,
    { sampleFactor: sf, simplifyThreshold: 0 }
  );
  var pt5 = myFont.textToPoints(
    word.charAt(5),
    width / 11 + 5 * k,
    height / 3,
    height / 8,
    { sampleFactor: sf, simplifyThreshold: 0 }
  );
  var pt6 = myFont.textToPoints(
    word.charAt(6),
    width / 11 + 6 * k,
    height / 3,
    height / 8,
    { sampleFactor: sf, simplifyThreshold: 0 }
  );
  var pt7 = myFont.textToPoints(
    word.charAt(7),
    width / 11 + 7 * k,
    height / 3,
    height / 8,
    { sampleFactor: sf, simplifyThreshold: 0 }
  );
   var pt8 = myFont.textToPoints(
    word.charAt(8),
    width / 11 + 8 * k,
    height / 3,
    height / 8,
    { sampleFactor: sf, simplifyThreshold: 0 }
  );

  beginShape();
  for (var i = 0; i < pt0.length; i++) {
    var pt0s = pt0[i];
    strokeWeight(2.5);
    vertex(
      pt0s.x +
        (sin(((cur.value() / 100) * pt0s.y) / bounds.h + millis() / 1000) *
          width) /
          30,
      pt0s.y
    );
  }
  endShape(CLOSE);

  beginShape();
  for (var i1 = 0; i1 < pt1.length; i1++) {
    var pt1s = pt1[i1];
    strokeWeight(2.5);
    vertex(
      pt1s.x +
        (sin(((cur.value() / 100) * pt1s.y) / bounds.h + millis() / 1000) *
          width) /
          30,
      pt1s.y
    );
  }
  endShape(CLOSE);

  beginShape();
  for (var i2 = 0; i2 < pt2.length; i2++) {
    var pt2s = pt2[i2];
    strokeWeight(2.5);
    vertex(
      pt2s.x +
        (sin(((cur.value() / 100) * pt2s.y) / bounds.h + millis() / 1000) *
          width) /
          30,
      pt2s.y
    );
  }
  endShape(CLOSE);

  beginShape();
  for (var i3 = 0; i3 < pt3.length; i3++) {
    var pt3s = pt3[i3];
    strokeWeight(2.5);
    vertex(
      pt3s.x +
        (sin(((cur.value() / 100) * pt3s.y) / bounds.h + millis() / 1000) *
          width) /
          30,
      pt3s.y
    );
  }
  endShape(CLOSE);
  beginShape();
  for (var i4 = 0; i4 < pt4.length; i4++) {
    var pt4s = pt4[i4];
    strokeWeight(2.5);
    vertex(
      pt4s.x +
        (sin(((cur.value() / 100) * pt4s.y) / bounds.h + millis() / 1000) *
          width) /
          30,
      pt4s.y
    );
  }
  endShape(CLOSE);
  beginShape();
  for (var i5 = 0; i5 < pt5.length; i5++) {
    var pt5s = pt5[i5];
    strokeWeight(2.5);
    vertex(
      pt5s.x +
        (sin(((cur.value() / 100) * pt5s.y) / bounds.h + millis() / 1000) *
          width) /
          30,
      pt5s.y
    );
  }
  endShape(CLOSE);
  beginShape();
  for (var i6 = 0; i6 < pt6.length; i6++) {
    var pt6s = pt6[i6];
    strokeWeight(2.5);
    vertex(
      pt6s.x +
        (sin(((cur.value() / 100) * pt6s.y) / bounds.h + millis() / 1000) *
          width) /
          30,
      pt6s.y
    );
  }
  endShape(CLOSE);
  beginShape();
  for (var i7 = 0; i7 < pt7.length; i7++) {
    var pt7s = pt7[i7];
    strokeWeight(2.5);
    vertex(
      pt7s.x +
        (sin(((cur.value() / 100) * pt7s.y) / bounds.h + millis() / 1000) *
          width) /
          30,
      pt7s.y
    );
  }
  endShape(CLOSE);
    beginShape();
  for (var i8 = 0; i8 < pt8.length; i8++) {
    var pt8s = pt8[i8];
    strokeWeight(2.5);
    vertex(
      pt8s.x +
        (sin(((cur.value() / 100) * pt8s.y) / bounds.h + millis() / 1000) *
          width) /
          30,
      pt8s.y
    );
  }
  endShape(CLOSE);
  // let see= 'qaser';
  //console.log(inp.value().charAt(0))
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  //console.log('you are typing: ', this.value());
}
