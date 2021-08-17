var brush, brslider, renew;
var x, y;
var distan;
function setup() {
  createCanvas(500, 500, SVG);
  background(255, 0);
  frameRate(35);
  x = width / 2;
  y = height / 2;
  brSlider = createSlider(-4.9, 12, -1.5, 0.01);
  brSlider.addClass("mySliders");
  renew = createButton("save");
  renew.mousePressed(reNew);
  renew.addClass("myButtons");
}

function draw() {
  brush = brSlider.value();

  let d = floor(random(4));

  // var k=5;k-=0.04
  // strokeWeight(k)

  // translate(width/2,height/2)
  distan = 2.2 + 0.3 * brush;
  //line(x,y,x+10,y+10)
  if (d == 0 && x < width - 12 * distan) {
    x = x + distan;
  } else if (d == 1 && y < height - 12 * distan) {
    y = y + distan;
  } else if (d == 2 && x > 12 * distan) {
    x = x - distan;
  } else if (d == 3 && y > 12 * distan) {
    y = y - distan;
  }
  // if (x>=width-distan||x<=distan){x=x-distan}
  // if(y>=height-distan||y<=distan){y=y-distan}

  let colo = noise(x * y) * 4;
  if (brush<0){colo=colo+brush*0.1}
  //colo=colo+3
  //print(colo)
  stroke(0);
  fill(0);

  ellipse(x, y, colo);
  v = brush*0.5 + 1;
  if (brush > 1.5) {
    ellipse(x + random(-v, v), y + random(-v, v), colo * 0.8);
    ellipse(x + random(-v, v), y + random(-v, v), colo * 0.6);
    ellipse(x + random(-v, v), y + random(-v, v), colo * 0.6);
  }
  if (brush > 5) {
    ellipse(x + random(-2 * v, 2 * v), y + random(-2 * v, 2 * v), colo * 0.5);
    ellipse(x + random(-2 * v, 2 * v), y + random(-2 * v, 2 * v), colo * 0.55);

    ellipse(
      x + random(-1.5 * v, 1.5 * v),
      y + random(-2 * v, 2 * v),
      colo * 0.55
    );
    ellipse(
      x + random(-1.5 * v, 1.5 * v),
      y + random(-2 * v, 2 * v),
      colo * 0.55
    );
  }
   if (brush > 9) {
    ellipse(x + random(-2.2 * v, 2.2 * v), y + random(-2.2* v, 2.2 * v), colo * 0.3);
    ellipse(x + random(-2.2 * v, 2.2 * v), y + random(-2.2* v, 2.2 * v), colo * 0.3);

    ellipse(
      x + random(-1.8 * v, 1.8 * v),
      y + random(-1.8 * v, 1.8 * v),
      colo * 0.3
    );
  
  }
}

function saving() {
  save("myRandom", SVG);
}
function reNew() {
  saving();
  background(255, 0);
  x = width / 2;
  y = height / 2;
}
