var w, h;
var k, b;
var v1, v2, v3, v4, v5, v6, v7, v8, v9;
function setup() {
  createCanvas(400, 400, SVG);
  w = width / 2;
  h = height / 2;

  //console.log(v1.x, v1.y, v2.x, v2.y);
  k = createSlider(1, 15, 2, 0.1);
 // k.addClass(mySliders);
  b = createButton("SAVE");
  b.mousePressed(savegraph);
 // b.addClass(myButton);
}

function draw() {
  frameRate(k.value());
  background("transparent");
  //noFill();
  fill(0);
  noStroke();

  v1 = { x: random([0, 1, 2]) * w, y: random([0, 1, 2]) * h };
  v2 = { x: random([0, 1, 2]) * w, y: random([0, 1, 2]) * h };
  v3 = { x: random([0, 1, 2]) * w, y: random([0, 1, 2]) * h };
  v4 = { x: random([0, 1, 2]) * w, y: random([0, 1, 2]) * h };
  v5 = { x: random([0, 1, 2]) * w, y: random([0, 1, 2]) * h };
  v6 = { x: random([0, 1, 2]) * w, y: random([0, 1, 2]) * h };
  v7 = { x: random([0, 1, 2]) * w, y: random([0, 1, 2]) * h };
  v8 = { x: random([0, 1, 2]) * w, y: random([0, 1, 2]) * h };
  v9 = { x: random([0, 1, 2]) * w, y: random([0, 1, 2]) * h };
  if (
    v1 == v2 ||
    v2 == v3 ||
    v3 == v4 ||
    v4 == v5 ||
    v5 == v6 ||
    v6 == v7 ||
    v7 == v8 ||
    v8 == v9 ||
    v9 == v1
  ) {
    refresh();
  }
  beginShape();
  vertex(v1.x, v1.y);
  vertex(v2.x, v2.y);
  vertex(v3.x, v3.y);
  bezierVertex(v2.x, v2.y, v2.x, v2.y, v1.x, v1.y);
  endShape();

  beginShape();
  vertex(v2.x, v2.y);
  vertex(v3.x, v3.y);
  vertex(v4.x, v4.y);
  bezierVertex(v3.x, v3.y, v3.x, v3.y, v2.x, v2.y);
  endShape();

  beginShape();
  vertex(v3.x, v3.y);
  vertex(v4.x, v4.y);
  vertex(v5.x, v5.y);
  bezierVertex(v4.x, v4.y, v4.x, v4.y, v3.x, v3.y);
  endShape();

  beginShape();
  vertex(v4.x, v4.y);
  vertex(v5.x, v5.y);
  vertex(v6.x, v6.y);
  bezierVertex(v5.x, v5.y, v5.x, v5.y, v4.x, v4.y);
  endShape();

  beginShape();
  vertex(v5.x, v5.y);
  vertex(v6.x, v6.y);
  vertex(v7.x, v7.y);
  bezierVertex(v6.x, v6.y, v6.x, v6.y, v5.x, v5.y);
  endShape();

  beginShape();
  vertex(v6.x, v6.y);
  vertex(v7.x, v7.y);
  vertex(v8.x, v8.y);
  bezierVertex(v7.x, v7.y, v7.x, v7.y, v6.x, v6.y);
  endShape();

  beginShape();
  vertex(v7.x, v7.y);
  vertex(v8.x, v8.y);
  vertex(v9.x, v9.y);
  bezierVertex(v8.x, v8.y, v8.x, v8.y, v7.x, v7.y);
  endShape();

  beginShape();
  vertex(v8.x, v8.y);
  vertex(v9.x, v9.y);
  vertex(v1.x, v1.y);
  bezierVertex(v9.x, v9.y, v9.x, v9.y, v8.x, v8.y);
  endShape();
  beginShape();
  vertex(v9.x, v9.y);
  vertex(v1.x, v1.y);
  vertex(v2.x, v2.y);
  bezierVertex(v1.x, v1.y, v1.x, v1.y, v9.x, v9.y);
  endShape();
  //save("round3.svg")
}
function refresh() {
  if (v1.x == 1) {
    v1.x = v1.x + random([-1, 1]);
  } else if (v1.x == 0) {
    v1.x = v1.x + random([1, 2]);
  } else if (v1.x == 2) {
    v1.x = v1.x + random([-1, -2]);
  }
  if (v3.x == 1) {
    v3.x = v3.x + random([-1, 1]);
  } else if (v3.x == 0) {
    v3.x = v3.x + random([1, 2]);
  } else if (v3.x == 2) {
    v3.x = v3.x + random([-1, -2]);
  }
  if (v5.x == 1) {
    v5.x = v5.x + random([-1, 1]);
  } else if (v5.x == 0) {
    v5.x = v5.x + random([1, 2]);
  } else if (v5.x == 2) {
    v5.x = v5.x + random([-1, -2]);
  }
  if (v7.x == 1) {
    v7.x = v7.x + random([-1, 1]);
  } else if (v7.x == 0) {
    v7.x = v7.x + random([1, 2]);
  } else if (v8.x == 2) {
    v7.x = v7.x + random([-1, -2]);
  }
}
function savegraph() {
  save("constanz-shapestudy-A.svg");
}
