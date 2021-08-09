let r, w, h, fr;
var a, b;
let g = false;
let rController, saveButton, gridButton;
var rec1, rec2, rec3, rec4, rec5, rec6, rec7, rec8, rec9, rec10;

function setup() {
  createCanvas(400, 400, SVG);

  w = width / 5;
  h = height / 5;
  r=w
  // rController = createSlider(6, 50, 15, 0.1);
  // rController.addClass("mySliders");
  frController = createSlider(1 / 5, 20, 5, 0.1);
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

  rec1 = {
    x: w / 2 + random([0, 1, 2, 3, 4]) * w,
    y: h / 2 + random([0, 1, 2, 3, 4]) * h,
  };
  rec2 = {
    x: rec1.x + random([-1, 0, 1]) * w,
    y: rec1.y + random([-1, 0, 1]) * h,
  };
  if (rec2.x < w / 2) {
    rec2.x = w * random([0.5, 1.5]);
  }
  if (rec2.x > width) {
    rec2.x = width - w * random([0.5, 1.5]);
  }
  if (rec2.y < h / 2) {
    rec2.y = h * random([0.5, 1.5]);
    //print(rec2.y)
  }
  if (rec2.y > height) {
    rec2.y = height - h * random([0.5, 1.5]);
    //print(rec2.y)
  }
   if (rec2.x !=rec1.x) {
    rec2.y = rec1.y;
  }
 if (rec2.y !=rec1.y) {
    rec2.x = rec1.x;
  }
  
  rec3 = {
    x: rec2.x + random([-1, 0, 1]) * w,
    y: rec2.y + random([-1, 0, 1]) * h,
  };
  if (rec3.x < w / 2) {
    rec3.x = w * random([0.5, 1.5]);
  }
  if (rec3.x > width) {
    rec3.x = width - w * random([0.5, 1.5]);
  }
  if (rec3.y < h / 2) {
    rec3.y = h * random([0.5, 1.5]);
    //print(rec3.y)
  }
  if (rec3.y > height) {
    rec3.y = height - h * random([0.5, 1.5]);
    //print(rec3.y)
  }
    if (rec3.x !=rec2.x) {
    rec3.y = rec2.y;
  }
 if (rec3.y !=rec2.y) {
    rec3.x = rec2.x;
  }
  rec4 = {
    x: rec3.x + random([-1, 0, 1]) * w,
    y: rec3.y + random([-1, 0, 1]) * h,
  };

  if (rec4.x < w / 2) {
    rec4.x = w * random([0.5, 1.5]);
  }
  if (rec4.x > width) {
    rec4.x = width - w * random([0.5, 1.5]);
  }
  if (rec4.y < h / 2) {
    rec4.y = h * random([0.5, 1.5]);
    //print(rec4.y)
  }
  if (rec4.y > height) {
    rec4.y = height - h * random([0.5, 1.5]);
    //print(rec4.y)
  }
    if (rec4.x !=rec3.x) {
    rec4.y = rec3.y;
  }
 if (rec4.y !=rec3.y) {
    rec4.x = rec3.x;
  }
  rec5 = {
    x: rec4.x + random([-1, 0, 1]) * w,
    y: rec4.y + random([-1, 0, 1]) * h,
  };

  if (rec5.x < w / 2) {
    rec5.x = w * random([0.5, 1.5]);
  }
  if (rec5.x > width) {
    rec5.x = width - w * random([0.5, 1.5]);
  }
  if (rec5.y < h / 2) {
    rec5.y = h * random([0.5, 1.5]);
    //print(rec5.y)
  }
  if (rec5.y > height) {
    rec5.y = height - h * random([0.5, 1.5]);
    //print(rec5.y)
  }
    if (rec5.x !=rec4.x) {
    rec5.y = rec4.y;
  }
 if (rec5.y !=rec4.y) {
    rec5.x = rec4.x;
  }
  rec6 = {
    x: rec5.x + random([-1, 0, 1]) * w,
    y: rec5.y + random([-1, 0, 1]) * h,
  };

  if (rec6.x < w / 2) {
    rec6.x = w * random([0.5, 1.5]);
  }
  if (rec6.x > width) {
    rec6.x = width - w * random([0.5, 1.5]);
  }
  if (rec6.y < h / 2) {
    rec6.y = h * random([0.5, 1.5]);
    //print(rec6.y)
  }
  if (rec6.y > height) {
    rec6.y = height - h * random([0.5, 1.5]);
    //print(rec6.y)
  }
      if (rec6.x !=rec5.x) {
    rec6.y = rec5.y;
  }
 if (rec6.y !=rec5.y) {
    rec6.x = rec5.x;
  }
  rec7 = {
    x: rec6.x + random([-1, 0, 1]) * w,
    y: rec6.y + random([-1, 0, 1]) * h,
  };

  if (rec7.x < w / 2) {
    rec7.x = w * random([0.5, 1.5]);
  }
  if (rec7.x > width) {
    rec7.x = width - w * random([0.5, 1.5]);
  }
  if (rec7.y < h / 2) {
    rec7.y = h * random([0.5, 1.5]);
    //print(rec7.y)
  }
  if (rec7.y > height) {
    rec7.y = height - h * random([0.5, 1.5]);
    //print(rec7.y)
  }
        if (rec7.x !=rec6.x) {
    rec7.y = rec6.y;
  }
 if (rec7.y !=rec6.y) {
    rec7.x = rec6.x;
  }
  rec8 = {
    x: rec7.x + random([-1, 0, 1]) * w,
    y: rec7.y + random([-1, 0, 1]) * h,
  };

  if (rec8.x < w / 2) {
    rec8.x = w * random([0.5, 1.5]);
  }
  if (rec8.x > width) {
    rec8.x = width - w * random([0.5, 1.5]);
  }
  if (rec8.y < h / 2) {
    rec8.y = h * random([0.5, 1.5]);
    //print(rec8.y)
  }
  if (rec8.y > height) {
    rec8.y = height - h * random([0.5, 1.5]);
    //print(rec8.y)
  }
        if (rec8.x !=rec7.x) {
    rec8.y = rec7.y;
  }
 if (rec8.y !=rec7.y) {
    rec8.x = rec7.x;
  }
  rec9 = {
    x: rec8.x + random([-1, 0, 1]) * w,
    y: rec8.y + random([-1, 0, 1]) * h,
  };
  if (rec9.x < w / 2) {
    rec9.x = w * random([0.5, 1.5]);
  }
  if (rec9.x > width) {
    rec9.x = width - w / 2;
  }
  if (rec9.y < h / 2) {
    rec9.y = h / 2;
    //print(rec9.y)
  }
  if (rec9.y > height) {
    rec9.y = height - h * random([0.5, 1.5]);
    //print(rec9.y)
  }
        if (rec9.x !=rec8.x) {
    rec9.y = rec8.y;
  }
 if (rec9.y !=rec8.y) {
    rec9.x = rec8.x;
  }
  rec10 = {
    x: rec9.x + random([-1, 0, 1]) * w,
    y: rec9.y + random([-1, 0, 1]) * h,
  };

  if (rec10.x < w / 2) {
    rec10.x = w * random([0.5, 1.5]);
    //print(rec10.x)
  }
  if (rec10.x > width) {
    rec10.x = width - w * random([0.5, 1.5]);
    //print(rec10.x)
  }
  if (rec10.y < h / 2) {
    rec10.y = h / 2;
    //print(rec10.y)
  }
  if (rec10.y > height) {
    rec10.y = height - h * random([0.5, 1.5]);
    //print(rec10.y)
  }
        if (rec10.x !=rec9.x) {
    rec10.y = rec9.y;
  }
 if (rec10.y !=rec9.y) {
    rec10.x = rec9.x;
  }
  rec11 = {
    x: rec10.x + random([-1, 0, 1]) * w,
    y: rec10.y + random([-1, 0, 1]) * h,
  };
  if (rec11.x < w / 2) {
    rec11.x = w * random([0.5, 1.5]);
  }
  if (rec11.x > width) {
    rec11.x = width - w * random([0.5, 1.5]);
  }
  if (rec11.y < h / 2) {
    rec11.y = h * random([0.5, 1.5]);
    //print(rec8.y)
  }
  if (rec11.y > height) {
    rec11.y = height - h * random([0.5, 1.5]);
    //print(rec8.y)
  }
        if (rec11.x !=rec10.x) {
    rec11.y = rec10.y;
  }
 if (rec11.y !=rec10.y) {
    rec11.x = rec10.x;
  }
  rec12 = {
    x: rec11.x + random([-1, 0, 1]) * w,
    y: rec11.y + random([-1, 0, 1]) * h,
  };
  if (rec12.x < w / 2) {
    rec12.x = w * random([0.5, 1.5]);
  }
  if (rec12.x > width) {
    rec12.x = width - w / 2;
  }
  if (rec12.y < h / 2) {
    rec12.y = h / 2;
    //print(rec9.y)
  }
  if (rec12.y > height) {
    rec12.y = height - h * random([0.5, 1.5]);
    //print(rec9.y)
  }
        if (rec12.x !=rec11.x) {
    rec12.y = rec11.y;
  }
 if (rec12.y !=rec11.y) {
    rec12.x = rec11.x;
  }
  rec13 = {
    x: rec12.x + random([-1, 0, 1]) * w,
    y: rec12.y + random([-1, 0, 1]) * h,
  };

  if (rec13.x < w / 2) {
    rec13.x = w * random([0.5, 1.5]);
    //print(rec10.x)
  }
  if (rec13.x > width) {
    rec13.x = width - w * random([0.5, 1.5]);
    //print(rec10.x)
  }
  if (rec13.y < h / 2) {
    rec13.y = h / 2;
    //print(rec10.y)
  }
  if (rec13.y > height) {
    rec13.y = height - h * random([0.5, 1.5]);
    //print(rec10.y)
  }
        if (rec13.x !=rec12.x) {
    rec13.y = rec12.y;
  }
 if (rec13.y !=rec12.y) {
    rec13.x = rec12.x;
  }
  background(180, 0);
  // r = rController.value();

  noStroke();
  fill(0);

  //console.log(rec2,rec3,rec4,rec5,rec6,rec7,rec8,rec9,rec10)
 drawsquare()
  //bridge();
  // if(!g){
  // save("myShape-rect",SVG)}
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
      rectMode(CENTER)
     square(i, j, r);
    }
  }
}
function gridShow() {
  g = !g;
}
function saveGraphic() {
  save("myShape-rect", SVG);
}
function drawsquare() {
  noStroke();
  //strokeWeight(0.4);
  rectMode(CENTER);

  square(rec1.x, rec1.y, r);
  square(rec2.x, rec2.y, r);
  square(rec3.x, rec3.y, r);
  square(rec4.x, rec4.y, r);
  square(rec5.x, rec5.y, r);
  square(rec6.x, rec6.y, r);
  square(rec7.x, rec7.y, r);
  square(rec8.x, rec8.y, r);
  square(rec9.x, rec9.y, r);
  square(rec10.x, rec10.y, r);
  square(rec11.x, rec11.y, r);
  square(rec12.x, rec12.y, r);
  square(rec13.x, rec13.y, r);
}
