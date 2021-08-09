let r, w, h, fr;
var a, b;
let g = false;
let rController, saveButton, gridButton;
var cir1, cir2, cir3, cir4, cir5, cir6, cir7, cir8, cir9, cir10;

function setup() {
  createCanvas(400, 400, SVG);

  w = width / 5;
  h = height / 5;
  rController = createSlider(6, 50, 15, 0.1);
  rController.addClass("mySliders");
  frController = createSlider(1 / 5, 20, 2, 0.1);
  frController.addClass("mySliders");
  gridButton = createButton("grid view");
  gridButton.addClass("myButtons");
  gridButton.mousePressed(gridShow);
  saveButton = createButton("SAVE");
  saveButton.addClass("myButtons");
  saveButton.mousePressed(saveGraphic);
}

function draw() {
  fr = frController.value();
  frameRate(fr);

  cir1 = {
    x: w / 2 + random([0, 1, 2, 3, 4]) * w,
    y: h / 2 + random([0, 1, 2, 3, 4]) * h,
  };
  cir2 = {
    x: cir1.x + random([-1, 0, 1]) * w,
    y: cir1.y + random([-1, 0, 1]) * h,
  };
  if (cir2.x < w / 2) {
    cir2.x = w * random([0.5, 1.5]);
  }
  if (cir2.x > width) {
    cir2.x = width - w * random([0.5, 1.5]);
  }
  if (cir2.y < h / 2) {
    cir2.y = h * random([0.5, 1.5]);
    //print(cir2.y)
  }
  if (cir2.y > height) {
    cir2.y = height - h * random([0.5, 1.5]);
    //print(cir2.y)
  }

  cir3 = {
    x: cir2.x + random([-1, 0, 1]) * w,
    y: cir2.y + random([-1, 0, 1]) * h,
  };
  if (cir3.x < w / 2) {
    cir3.x = w * random([0.5, 1.5]);
  }
  if (cir3.x > width) {
    cir3.x = width - w * random([0.5, 1.5]);
  }
  if (cir3.y < h / 2) {
    cir3.y = h * random([0.5, 1.5]);
    //print(cir3.y)
  }
  if (cir3.y > height) {
    cir3.y = height - h * random([0.5, 1.5]);
    //print(cir3.y)
  }
  cir4 = {
    x: cir3.x + random([-1, 0, 1]) * w,
    y: cir3.y + random([-1, 0, 1]) * h,
  };

  if (cir4.x < w / 2) {
    cir4.x = w * random([0.5, 1.5]);
  }
  if (cir4.x > width) {
    cir4.x = width - w * random([0.5, 1.5]);
  }
  if (cir4.y < h / 2) {
    cir4.y = h * random([0.5, 1.5]);
    //print(cir4.y)
  }
  if (cir4.y > height) {
    cir4.y = height - h * random([0.5, 1.5]);
    //print(cir4.y)
  }
  cir5 = {
    x: cir4.x + random([-1, 0, 1]) * w,
    y: cir4.y + random([-1, 0, 1]) * h,
  };

  if (cir5.x < w / 2) {
    cir5.x = w * random([0.5, 1.5]);
  }
  if (cir5.x > width) {
    cir5.x = width - w * random([0.5, 1.5]);
  }
  if (cir5.y < h / 2) {
    cir5.y = h * random([0.5, 1.5]);
    //print(cir5.y)
  }
  if (cir5.y > height) {
    cir5.y = height - h * random([0.5, 1.5]);
    //print(cir5.y)
  }
  cir6 = {
    x: cir5.x + random([-1, 0, 1]) * w,
    y: cir5.y + random([-1, 0, 1]) * h,
  };

  if (cir6.x < w / 2) {
    cir6.x = w * random([0.5, 1.5]);
  }
  if (cir6.x > width) {
    cir6.x = width - w * random([0.5, 1.5]);
  }
  if (cir6.y < h / 2) {
    cir6.y = h * random([0.5, 1.5]);
    //print(cir6.y)
  }
  if (cir6.y > height) {
    cir6.y = height - h * random([0.5, 1.5]);
    //print(cir6.y)
  }
  cir7 = {
    x: cir6.x + random([-1, 0, 1]) * w,
    y: cir6.y + random([-1, 0, 1]) * h,
  };

  if (cir7.x < w / 2) {
    cir7.x = w * random([0.5, 1.5]);
  }
  if (cir7.x > width) {
    cir7.x = width - w * random([0.5, 1.5]);
  }
  if (cir7.y < h / 2) {
    cir7.y = h * random([0.5, 1.5]);
    //print(cir7.y)
  }
  if (cir7.y > height) {
    cir7.y = height - h * random([0.5, 1.5]);
    //print(cir7.y)
  }
  cir8 = {
    x: cir7.x + random([-1, 0, 1]) * w,
    y: cir7.y + random([-1, 0, 1]) * h,
  };

  if (cir8.x < w / 2) {
    cir8.x = w * random([0.5, 1.5]);
  }
  if (cir8.x > width) {
    cir8.x = width - w * random([0.5, 1.5]);
  }
  if (cir8.y < h / 2) {
    cir8.y = h * random([0.5, 1.5]);
    //print(cir8.y)
  }
  if (cir8.y > height) {
    cir8.y = height - h * random([0.5, 1.5]);
    //print(cir8.y)
  }
  cir9 = {
    x: cir8.x + random([-1, 0, 1]) * w,
    y: cir8.y + random([-1, 0, 1]) * h,
  };
  if (cir9.x < w / 2) {
    cir9.x = w * random([0.5, 1.5]);
  }
  if (cir9.x > width) {
    cir9.x = width - w / 2;
  }
  if (cir9.y < h / 2) {
    cir9.y = h / 2;
    //print(cir9.y)
  }
  if (cir9.y > height) {
    cir9.y = height - h * random([0.5, 1.5]);
    //print(cir9.y)
  }
  cir10 = {
    x: cir9.x + random([-1, 0, 1]) * w,
    y: cir9.y + random([-1, 0, 1]) * h,
  };

  if (cir10.x < w / 2) {
    cir10.x = w * random([0.5, 1.5]);
    //print(cir10.x)
  }
  if (cir10.x > width) {
    cir10.x = width - w * random([0.5, 1.5]);
    //print(cir10.x)
  }
  if (cir10.y < h / 2) {
    cir10.y = h / 2;
    //print(cir10.y)
  }
  if (cir10.y > height) {
    cir10.y = height - h * random([0.5, 1.5]);
    //print(cir10.y)
  }
  cir11 = {
    x: cir10.x + random([-1, 0, 1]) * w,
    y: cir10.y + random([-1, 0, 1]) * h,
  };
  if (cir11.x < w / 2) {
    cir11.x = w * random([0.5, 1.5]);
  }
  if (cir11.x > width) {
    cir11.x = width - w * random([0.5, 1.5]);
  }
  if (cir11.y < h / 2) {
    cir11.y = h * random([0.5, 1.5]);
    //print(cir8.y)
  }
  if (cir11.y > height) {
    cir11.y = height - h * random([0.5, 1.5]);
    //print(cir8.y)
  }
  cir12 = {
    x: cir11.x + random([-1, 0, 1]) * w,
    y: cir11.y + random([-1, 0, 1]) * h,
  };
  if (cir12.x < w / 2) {
    cir12.x = w * random([0.5, 1.5]);
  }
  if (cir12.x > width) {
    cir12.x = width - w / 2;
  }
  if (cir12.y < h / 2) {
    cir12.y = h / 2;
    //print(cir9.y)
  }
  if (cir12.y > height) {
    cir12.y = height - h * random([0.5, 1.5]);
    //print(cir9.y)
  }
  cir13 = {
    x: cir12.x + random([-1, 0, 1]) * w,
    y: cir12.y + random([-1, 0, 1]) * h,
  };

  if (cir13.x < w / 2) {
    cir13.x = w * random([0.5, 1.5]);
    //print(cir10.x)
  }
  if (cir13.x > width) {
    cir13.x = width - w * random([0.5, 1.5]);
    //print(cir10.x)
  }
  if (cir13.y < h / 2) {
    cir13.y = h / 2;
    //print(cir10.y)
  }
  if (cir13.y > height) {
    cir13.y = height - h * random([0.5, 1.5]);
    //print(cir10.y)
  }
  background(180, 0);
  r = rController.value();

  noStroke();
  fill(0);

  //console.log(cir2,cir3,cir4,cir5,cir6,cir7,cir8,cir9,cir10)
  drawcircle();
  bridge();
  // if(!g){
  // save('myShape',SVG)}
  if (g) {
    grid();
  }
}

function grid() {
  noFill();
  stroke(210);
  strokeWeight(1);
  translate(width / 2, height / 2);
  for (var i = 0 - 5 * w; i < width; i += w) {
    for (var j = 0 - 5 * h; j < width; j += h) {
      circle(i, j, r);
    }
  }
}
function gridShow() {
  g = !g;
}
function saveGraphic() {
  save("myShape", SVG);
}
function drawcircle() {
  noStroke();
  //strokeWeight(0.4);
  circle(cir1.x, cir1.y, r);
  circle(cir2.x, cir2.y, r);
  circle(cir3.x, cir3.y, r);
  circle(cir4.x, cir4.y, r);
  circle(cir5.x, cir5.y, r);
  circle(cir6.x, cir6.y, r);
  circle(cir7.x, cir7.y, r);
  circle(cir8.x, cir8.y, r);
  circle(cir9.x, cir9.y, r);
  circle(cir10.x, cir10.y, r);
  circle(cir11.x, cir11.y, r);
  circle(cir12.x, cir12.y, r);
  circle(cir13.x, cir13.y, r);
}
function bridge() {
  noStroke();
  // stroke(0);
  // strokeWeight(0.2);
  // strokeJoin(BEVEL);
  // line(cir1.x, cir1.y, cir2.x, cir2.y);
  // line(cir2.x, cir2.y, cir3.x, cir3.y);
  // line(cir3.x, cir3.y, cir4.x, cir4.y);
  // line(cir4.x, cir4.y, cir5.x, cir5.y);
  // line(cir5.x, cir5.y, cir6.x, cir6.y);
  // line(cir6.x, cir6.y, cir7.x, cir7.y);
  // line(cir7.x, cir7.y, cir8.x, cir8.y);
  // line(cir8.x, cir8.y, cir9.x, cir9.y);
  // line(cir9.x, cir9.y, cir10.x, cir10.y);
  // line(cir10.x, cir10.y, cir11.x, cir11.y);
  // line(cir11.x, cir11.y, cir12.x, cir12.y);
  // line(cir12.x, cir12.y, cir13.x, cir13.y);

  connect(cir1,  cir2);
  connect(cir2, cir3);
  connect(cir3, cir4);
  connect(cir4, cir5);
  connect(cir5, cir6);
  connect(cir6, cir7);
  connect(cir7, cir8);
  connect(cir8, cir9);
  connect(cir9, cir10);
  connect(cir10, cir11);
  connect(cir11, cir12);
  connect(cir12, cir13);
}

function innerTangent(a, b) {
  var dx, dy, d, a1, a2, i1x, i1y, i2x, i2y, i3x, i3y, i4x, i4y;
  let x1 = a.x,
    y1 = a.y,
    x2 = b.x,
    y2 = b.y;
  dx = x2 - x1;
  dy = y2 - y1;
  d = dist(x1, y1, x2, y2);

  a1 = atan2(dy, dx);
  a2 = acos(r / d);

  i1x = x1 + r/2 * cos(a1 + a2);
  i1y = y1 + r/2 * sin(a1 + a2);
  i2x = x2 +r/2 * cos(a1 + a2 + PI);
  i2y = y2 + r/2 * sin(a1 + a2 + PI);
  i3x = x1 +r/2 * cos(a1 - a2);
  i3y = y1 + r/2 * sin(a1 - a2);
  i4x = x2 +r/2 * cos(a1 - a2 + PI);
  i4y = y2 + r/2 * sin(a1 - a2 + PI);

  var container = {
    x1: i1x,
    y1: i1y,
    x2: i2x,
    y2: i2y,
    x3: i3x,
    y3: i3y,
    x4: i4x,
    y4: i4y,
  };

  return container;
}
function connect(a, b) {
  var dot = innerTangent(a, b);
  // line(dot.x1, dot.y1, dot.x2, dot.y2);
  // line(dot.x3, dot.y3,dot.x4, dot.y4);
  beginShape();
  vertex(dot.x1, dot.y1);
  vertex(dot.x3, dot.y3);
  vertex(dot.x4, dot.y4);
  vertex(dot.x2, dot.y2);
  endShape(CLOSE);
}

