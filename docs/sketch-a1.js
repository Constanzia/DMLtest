let x1, x2, x3, x4, x5, x6, y1, y2, y3, y4, y5, y6;
let j, q, k, n, p, v, m, l;
let r21, r34,button;
var co;
let bgcolor=180

function setup() {
 newA();
  button=createButton('NEW');
  button.mousePressed(newA);
  button.addClass("myButtons")
}

function draw() {
  background(bgcolor);
  noFill();
  strokeWeight(1);
  //stroke(130,100+co,100+0.2*co);
  co = co + 15;

  //x2=150;
  //y2=150;
  x1 = x2 + j;
  y1 = y2 + q;
  x3 = x2 + m;
  y3 = y2 + l;
  x4 = x1 + k;
  y4 = y1 + v;
  x5 = x21;
  y5 = r21;
  x6 = x34;
  y6 = r34;

  line(x1, y1, x2, y2);
  line(x2, y2, x3, y3);
  line(x3, y3, x4, y4);
  line(x5, y5, x6, y6);
  strokeWeight(10);

  point(x5, y5);

  //console.log(mouseX,mouseY);
}
function newA() {
  //saveFrames('ngroup', 'png', 1, 1);
  createCanvas(400, 400);
  frameRate(10);

  co = 0;
  x2 = random(20, 200);
  y2 = random(10, 200);

  j = random(-50, 50);
  q = random(50, 250);
  k = random(50, 250);
  n = random(0, 50);
  p = random(0, 50);
  v = random(0, int(0.2 * j));
  m = random(0, k);
  l = random(0, 20);
  r21 = random(y2, y2 + q);
  r34 = random(y2 + l, y2 + q + v);
  x21 = random(x2, x2 + j);
  x34 = random(x2 + m, x2 + j + k);
}
