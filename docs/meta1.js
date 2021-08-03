var size1, size2;
var vmax = 37;
var vmin = 25;
let d = 45;
let a, b;
let x, y, r, r2, r3, k;

let button, button2, button3;
let buttontext;
let g = false;ac=true
var i = 2;
let bgcolor = 180;

var cir1 = { x: 65, y: 65 };
cir2 = { x: cir1.x + 2 * d, y: cir1.y };
cir3 = { x: cir1.x + 4 * d, y: cir1.y };
cir4 = { x: cir1.x + 6 * d, y: cir1.y };
cir5 = { x: cir1.x, y: cir1.y + 2 * d };
cir6 = { x: cir1.x + 2 * d, y: cir1.y + 2 * d };
cir7 = { x: cir1.x + 4 * d, y: cir1.y + 2 * d };
cir8 = { x: cir1.x + 6 * d, y: cir1.y + 2 * d };
cir9 = { x: cir1.x, y: cir1.y + 4 * d };
cir10 = { x: cir1.x + 2 * d, y: cir1.y + 4 * d };
cir11 = { x: cir1.x + 4 * d, y: cir1.y + 4 * d };
cir12 = { x: cir1.x + 6 * d, y: cir1.y + 4 * d };
cir13 = { x: cir1.x, y: cir1.y + 6 * d };
cir14 = { x: cir1.x + 2 * d, y: cir1.y + 6 * d };
cir15 = { x: cir1.x + 4 * d, y: cir1.y + 6 * d };
cir16 = { x: cir1.x + 6 * d, y: cir1.y + 6 * d };
var mid1 = { x: cir1.x + d, y: cir1.y - d };
mid2 = { x: mid1.x + 2 * d, y: mid1.y };
mid3 = { x: mid1.x + 4 * d, y: mid1.y };
mid4 = { x: mid1.x-2*d, y: mid1.y + 2 * d };
mid5 = { x: mid1.x, y: mid1.y + 2 * d };
mid6 = { x: mid1.x+ 2 * d, y: mid1.y + 2 * d };
mid7 = { x: mid1.x + 4 * d, y:mid1.y + 2 * d };
mid8 = { x: mid1.x+ 6 * d, y: mid1.y + 2 * d };
mid9 = { x: mid1.x-2*d, y: mid1.y + 4 * d };
mid10 = { x: mid1.x , y: mid1.y + 4 * d };
mid11 = {  x: mid1.x+2*d, y: mid1.y + 4 * d };
mid12 = { x: mid1.x+4*d, y: mid1.y + 4 * d };
mid13 = {x: mid1.x+6*d, y: mid1.y + 4 * d };
mid14 = {  x: mid1.x-2*d, y: mid1.y + 6 * d };
mid15 = {  x: mid1.x, y: mid1.y + 6 * d  };
mid16 = {  x: mid1.x+2*d, y: mid1.y + 6 * d  };
mid17 = {  x: mid1.x+4*d, y: mid1.y + 6 * d  };
mid18 = {  x: mid1.x+6*d, y: mid1.y + 6 * d  };
mid19 = {  x: mid1.x, y: mid1.y + 8 * d  };
mid20 = {  x: mid1.x+2*d, y: mid1.y +8 * d  };
mid21 = {  x: mid1.x+4*d, y: mid1.y + 8* d  };


function setup() {
  createCanvas(400, 400);
  frameRate(20);
  //i = int(random(1, 5.999));
  //console.log(i);
  buttontext = "grid view";

  size1 = createSlider(28, d, 37);
  size1.addClass("mySliders");
  //size2 = createSlider(0, 5, 0);
  //size2.addClass("mySliders");
  button = createButton(buttontext);
  //button.position(0, 0);
  button.mousePressed(showGrid);
  button.addClass("myButtons");
  button2 = createButton("→");
  button2.addClass("myButtons");
  button2.mousePressed(changeImage);
    button3 = createButton("^");
  button3.addClass("myButtons");
  button3.mousePressed(showArc);
}

function draw() {
//console.log(mouseX,mouseY)
  //console.log(size1.value())
  background(bgcolor);
  r = size1.value();
  r2 = 2 * d - size1.value();
  r3 = sqrt(2) * d - r ;

//console.log(r3)
  //x=[65,155,245,335]
  // y=[65,155,245,335]
  //for(var x=65; x<width;x+=90){
  //for(var y=65;y<width;y+=90){
  fill(0);
  noStroke(0);

  if (i == 1) {
    draw1();
   newbase1();
    refill1();
  } else if (i == 2) {

    draw2();
      newbase2();
    refill2();
  } else if (i == 3) {
    newbase3();
    strokeWeight(3);
    draw3();
    refill3();
  } else if (i == 4) {
    newbase4();
    strokeWeight(3);
    draw4();
    refill4();
  } else if (i == 5) {
    newbase5();
    strokeWeight(3);
    draw5();
    refill5();
  }

  if (g) {
    grid1();
grid2()
  }

  //noLoop()
}
function base(x, y) {
  fill(0);
  noStroke();
  circle(x, y, r * 2);
}
function empty(x, y) {
noStroke();
  fill(bgcolor);
  //stroke(255, 0, 0);

  circle(x, y, r2 * 2);
}
function showGrid() {
  g = !g;
  buttontext = "show grid";
}
function changeImage() {
  if (i < 2) {
    i++;
  } else {
    i = 1;
  }
}
function showArc(){ac=!ac}
function newbase1() {
  empty(cir1.x, cir1.y, 2);
  base(cir2.x, cir2.y, 2);
  empty(cir3.x, cir3.y);
  empty(cir4.x, cir4.y);
  base(cir5.x, cir5.y);
  empty(cir6.x, cir6.y);

  base(cir7.x, cir7.y);
  base(cir8.x, cir8.y);
  empty(cir9.x, cir9.y);
  base(cir10.x, cir10.y);
  base(cir11.x, cir11.y);
  base(cir12.x, cir12.y);
  base(cir13.x, cir13.y);
  empty(cir14.x, cir14.y);
  empty(cir15.x, cir15.y);
  base(cir16.x, cir16.y);
}

function draw1() {
  //beginShape();
  fill(0);
  noStroke();
  //直
  if (ac) {
    quad(
      cir7.x - r * cos(PI / 4),
      cir7.y - r * cos(PI / 4),
      cir8.x + r * cos(PI / 4),
      cir8.y - r * cos(PI / 4),
      cir12.x + r * cos(PI / 4),
      cir12.y + r * cos(PI / 4),
      cir11.x - r * cos(PI / 4),
      cir11.y + r * cos(PI / 4)
    );
    quad(
      cir12.x - r * cos(PI / 4),
      cir12.y + r * cos(PI / 4),
      cir12.x + r * cos(PI / 4),
      cir12.y - r * cos(PI / 4),
      cir16.x + r * cos(PI / 4),
      cir16.y - r * cos(PI / 4),
      cir16.x - r * cos(PI / 4),
      cir16.y - r * cos(PI / 4)
    );
  } else {
    quad(
      cir7.x - r,
      cir7.y,
      cir8.x + r,
      cir8.y,
      cir12.x + r,
      cir12.y,
      cir11.x - r,
      cir11.y
    );
    quad(
      cir7.x,
      cir7.y - r,
      cir8.x,
      cir8.y - r,
      cir12.x,
      cir12.y + r,
      cir11.x,
      cir11.y + r
    );
    quad(
      cir12.x - r,
      cir12.y,
      cir12.x + r,
      cir12.y,
      cir16.x + r,
      cir16.y,
      cir16.x - r,
      cir16.y
    );
  }

  //直
  if (ac) {
    verticalspace();
  }
  //斜
  fill(0);
  noStroke();
  quad(
    cir2.x - r,
    cir2.y,
    cir5.x,
    cir5.y - r,
    cir5.x + r,
    cir5.y,
    cir2.x,
    cir2.y + r
  );
  quad(
    cir2.x,
    cir2.y + r,
    cir2.x + r,
    cir2.y,
    cir7.x,
    cir7.y - r,
    cir7.x - r,
    cir7.y
  );
  quad(
    cir5.x - r,
    cir5.y,
    cir10.x - r,
    cir10.y,
    cir10.x,
    cir10.y - r,
    cir5.x + r,
    cir5.y
  );
  quad(
    cir10.x - r,
    cir10.y,
    cir13.x,
    cir13.y - r,
    cir13.x + r,
    cir13.y,
    cir10.x,
    cir10.y + r
  );
  if (ac == false) {
    quad(
      cir11.x,
      cir11.y + r,
      cir11.x + r,
      cir11.y,
      cir16.x,
      cir16.y - r,
      cir16.x - r,
      cir16.y
    );
  }
  //斜

  //endShape(CLOSE);
}

function refill1() {
  if (ac) {
    circle(mid12.x, mid12.y, 2 * r3 + 2);
  } else {
    // fill(bgcolor);circle(mid12.x, mid12.y, 2 * r3);
    fill(0);
    circle(303, 275, 15);
  }
  //fill(bgcolor);
  //noStroke();
  //arc(cir6.x, cir6.y, 2 * r2, 2 * r2, PI, 0, OPEN);
  //base(cir6.x, cir6.y);
}
function newbase2() {
  empty(cir1.x, cir1.y, 2);
  empty(cir2.x, cir2.y, 2);
  base(cir3.x, cir3.y);
  empty(cir4.x, cir4.y);
  base(cir5.x, cir5.y);
  empty(cir6.x, cir6.y);
  empty(cir7.x, cir7.y);
  base(cir8.x, cir8.y);
  base(cir9.x, cir9.y);
  empty(cir10.x, cir10.y);
  base(cir11.x, cir11.y);
  base(cir12.x, cir12.y);
  empty(cir13.x, cir13.y);
  base(cir14.x, cir14.y);
  empty(cir15.x, cir15.y);
  base(cir16.x, cir16.y);
}

function draw2() {
  fill(0);
  noStroke();
  //直
  if (ac) {
    quad(
      cir8.x - r * cos(PI / 4),
      cir8.y + r * cos(PI / 4),
      cir8.x + r * cos(PI / 4),
      cir8.y - r * cos(PI / 4),
      cir16.x + r * cos(PI / 4),
      cir16.y - r * cos(PI / 4),
      cir16.x - r * cos(PI / 4),
      cir16.y - r * cos(PI / 4)
    );
    quad(
      cir5.x - r * cos(PI / 4),
      cir5.y + r * cos(PI / 4),
      cir5.x + r * cos(PI / 4),
      cir5.y - r * cos(PI / 4),
      cir9.x + r * cos(PI / 4),
      cir9.y - r * cos(PI / 4),
      cir9.x - r * cos(PI / 4),
      cir9.y - r * cos(PI / 4)
    );
  } else { quad(
      cir5.x - r,
      cir5.y,
      cir5.x + r ,
      cir5.y ,
      cir9.x + r ,
      cir9.y,
      cir9.x - r,
      cir9.y 
    );
          quad(
      cir8.x - r,
      cir8.y,
      cir8.x + r ,
      cir8.y ,
      cir16.x + r ,
      cir16.y,
      cir16.x - r,
      cir16.y 
    );
  }

  //直
  if (ac) {
    verticalspace();
  }
  //斜
  fill(0);
  noStroke();

  quad(
    cir9.x,
    cir9.y + r,
    cir9.x + r,
    cir9.y,
    cir14.x,
    cir14.y - r,
    cir14.x - r,
    cir14.y
  );
  quad(
    cir11.x,
    cir11.y + r,
    cir11.x + r,
    cir11.y,
    cir16.x,
    cir16.y - r,
    cir16.x - r,
    cir16.y
  );
  quad(
    cir3.x,
    cir3.y + r,
    cir3.x + r,
    cir3.y,
    cir8.x,
    cir8.y - r,
    cir8.x - r,
    cir8.y
  );
  quad(
    cir8.x - r,
    cir8.y,
    cir11.x,
    cir11.y - r,
    cir11.x + r,
    cir11.y,
    cir8.x,
    cir8.y + r
  );
  quad(
    cir11.x - r,
    cir11.y,
    cir14.x,
    cir14.y - r,
    cir14.x + r,
    cir14.y,
    cir11.x,
    cir11.y + r
  );
  //斜

  //endShape(CLOSE);
}

function refill2() {
  fill(0);
  beginShape();
  vertex(326, 160);
  vertex(340, 334);
  vertex(244, 247);
  endShape(CLOSE);
}
function grid1() {
  k = 2;
  for (a = 65; a <= width; a += 90) {
    for (b = 65; b <= height; b += 90) {
      strokeWeight(2)
      stroke(bgcolor - 100);
      //noStroke();
      noFill()
      circle(a,b,r*2)
     /* circle(a - r, b, k);
      circle(a + r, b, k);
      circle(a, b + r, k);
      circle(a, b - r, k);

      circle(a + r * cos(PI / 8.0), b + r * sin(PI / 8.0), k);
      circle(a + r * cos(PI / 8.0), b - r * sin(PI / 8.0), k);
      circle(a - r * cos(PI / 8.0), b + r * sin(PI / 8.0), k);
      circle(a - r * cos(PI / 8.0), b - r * sin(PI / 8.0), k);

      circle(a + r * sin(PI / 8.0), b - r * cos(PI / 8.0), k);
      circle(a - r * sin(PI / 8.0), b - r * cos(PI / 8.0), k);
      circle(a - r * sin(PI / 8.0), b + r * cos(PI / 8.0), k);
      circle(a + r * sin(PI / 8.0), b + r * cos(PI / 8.0), k);

      circle(a + r * cos(PI / 4.0), b + r * sin(PI / 4.0), k);
      circle(a + r * cos(PI / 4.0), b - r * sin(PI / 4.0), k);
      circle(a - r * cos(PI / 4.0), b - r * sin(PI / 4.0), k);
      circle(a - r * cos(PI / 4.0), b + r * sin(PI / 4.0), k);
      */
    }
  }
}
function grid2() {
  k = 1.6;
  for (a = 20; a <= width+45; a += 90) {
    for (b = -70; b <= height+45; b += 90) {
      fill(bgcolor - 100);
      noStroke();
      circle(a - r3, b, k);
      circle(a + r3, b, k);
      circle(a, b + r3, k);
      circle(a, b - r3, k);

      circle(a + r3 * cos(PI / 8.0), b + r3 * sin(PI / 8.0), k);
      circle(a + r3 * cos(PI / 8.0), b - r3 * sin(PI / 8.0), k);
      circle(a - r3 * cos(PI / 8.0), b + r3 * sin(PI / 8.0), k);
      circle(a - r3 * cos(PI / 8.0), b - r3 * sin(PI / 8.0), k);

      circle(a + r3 * sin(PI / 8.0), b - r3 * cos(PI / 8.0), k);
      circle(a - r3 * sin(PI / 8.0), b - r3 * cos(PI / 8.0), k);
      circle(a - r3 * sin(PI / 8.0), b + r3 * cos(PI / 8.0), k);
      circle(a + r3 * sin(PI / 8.0), b + r3 * cos(PI / 8.0), k);

      circle(a + r3 * cos(PI / 4.0), b + r3 * sin(PI / 4.0), k);
      circle(a + r3 * cos(PI / 4.0), b - r3 * sin(PI / 4.0), k);
      circle(a - r3 * cos(PI / 4.0), b - r3 * sin(PI / 4.0), k);
      circle(a - r3 * cos(PI / 4.0), b + r3 * sin(PI / 4.0), k);
    }
  }
}
function verticalspace() {
  noStroke();
  fill(bgcolor);
  circle(mid1.x, mid1.y, 2 * r3);
  circle(mid2.x, mid2.y, 2 * r3);
  circle(mid3.x, mid3.y, 2 * r3);
  circle(mid4.x, mid4.y, 2 * r3);
  circle(mid5.x, mid5.y, 2 * r3);
  circle(mid6.x, mid6.y, 2 * r3);
  circle(mid7.x, mid7.y, 2 * r3);
  circle(mid8.x, mid8.y, 2 * r3);
  circle(mid9.x, mid9.y, 2 * r3);
  circle(mid10.x, mid10.y, 2 * r3);
  circle(mid11.x, mid11.y, 2 * r3);
  circle(mid12.x, mid12.y, 2 * r3);
  circle(mid13.x, mid13.y, 2 * r3);
  circle(mid14.x, mid14.y, 2 * r3);
  circle(mid15.x, mid15.y, 2 * r3);
  circle(mid16.x, mid16.y, 2 * r3);
  circle(mid17.x, mid17.y, 2 * r3);
  circle(mid18.x, mid18.y, 2 * r3);
  circle(mid19.x, mid19.y, 2 * r3);
  circle(mid20.x, mid20.y, 2 * r3);
  circle(mid21.x, mid21.y, 2 * r3);
}
