var k;
var sc;
var vs;
var m, mp;
let vsChange;
let startx;
var mic, vol;
let w=400
function setup() {
  createCanvas(w, 2*w);
  mic = new p5.AudioIn();
  mic.start();
  sc = height / 45;
  k = 0.501 * sc;
  //vs=height/33
 //vsChange=createSlider(0.5,8,1,0.5)
  mp = 10;
}

function draw() {
  background(250);
  translate(width / 2, height / 2);
  //startx=5.5*sc
  vol = mic.getLevel();

  var vv = round(vol * 50) / 2;
  // console.log(vv)
  //stroke('#F92C16')
 vs = sc * (1 + vv);
  //vs = sc * (vsChange.value());
  mp += 0.05;
  m = (1 + vol * 40) * map(noise(mp), 0, 1, -1, 1);
  var h = hour();
  if (h > 12) {
    h = h - 12;
  }
  var min = minute();

  //var h0= h.charAt(0)
  //print(min)
  // m=random(-3,3)
  noFill();
  strokeWeight(1.2);

  //HOURS1
  if (h < 10) {
    number0(-6.5 * sc, 0.7 * vs + sc * 6);
  } else {
    number1(-6.5 * sc, 0.7 * vs + sc * 6);
  }
  //HOURS2
  if(h==0||h==10){number0(-3* sc, 0.7 * vs + sc * 6);}
  if(h==1||h==11){number1(-3* sc, 0.7 * vs + sc * 6);}
  if(h==2||h==12){number2(-3 * sc, 0.7 * vs + sc * 6);}
   if(h==3){number3(-3 * sc, 0.7 * vs + sc * 6);}
    if(h==4){number4(-3 * sc, 0.7 * vs + sc * 6);}
    if(h==5){number5(-3 * sc, 0.7 * vs + sc * 6);}
    if(h==6){number6(-3 * sc, 0.7 * vs + sc * 6);}
  dotdot(0, 0.7 * vs + sc * 6);
  dotdot(0, 0.7 * vs + sc * 6);
  //minute1
  if (min < 10) {
    number0(3 * sc, 0.7 * vs + sc * 6);
  } else if (min < 20) {
    number1(3 * sc, 0.7 * vs + sc * 6);
  } else if (min < 30) {
    number2(3 * sc, 0.7 * vs + sc * 6);
  } else if (min < 40) {
    number3(3 * sc, 0.7 * vs + sc * 6);
  }
   else if (min < 50) {
    number4(3 * sc, 0.7 * vs + sc * 6);
  }
     else if (min < 60) {
    number5(3 * sc, 0.7 * vs + sc * 6);
  }
  //minute2
   //HOURS2
  
  if(min==0||min==10||min==20||min==30||min==40||min==50){number0(6.5* sc, 0.7 * vs + sc * 6);}
  if(min==1||min==11||min==21||min==31||min==41||min==51){number1(6.5* sc, 0.7 * vs + sc * 6);}
  if(min==2||min==12||min==22||min==32||min==42||min==52){number2(6.5 * sc, 0.7 * vs + sc * 6);}
   if(min==3||min==13||min==23||min==33||min==43||min==53){number3(6.5* sc, 0.7 * vs + sc * 6);}
    if(min==4||min==14||min==24||min==34||min==44||min==54){number4(6.5 * sc, 0.7 * vs + sc * 6);}
    if(min==5||min==15||min==25||min==35||min==45||min==55){number5(6.5 * sc, 0.7 * vs + sc * 6);}
    if(min==6||min==16||min==26||min==36||min==46||min==56){number6(6.5 * sc, 0.7 * vs + sc * 6);}
      if(min==7||min==17||min==27||min==37||min==47||min==57){number7(6.5 * sc, 0.7 * vs + sc * 6);}
    if(min==8||min==18||min==28||min==38||min==48||min==58){number8(6.5 * sc, 0.7 * vs + sc * 6);}

   if(min==9||min==19||min==29||min==39||min==49||min==59){number9(6.5 * sc, 0.7 * vs + sc * 6);}

 //number9(6.5*sc,0.7*vs+sc*6)
}
function dotdot(x, y) {
  // for (i = x - sc/8; i < x + sc/8; i += 2 * k) {
  //   beginShape();
  //   vertex(i, y-sc + m);
  //   vertex(i + k, y-sc - m);
  //   vertex(i + 2 * k, y-sc + m);
  //   endShape();
  //   beginShape();
  //   vertex(i, y-sc - m);
  //   vertex(i + k, y-sc + m);
  //   vertex(i + 2 * k, y-sc - m);
  //   endShape();
  // }
  var cc = (3 * sc + 2 * vs) / 7;
  line(x - cc / 4 + m, y - cc / 4 - m, x + cc / 4 + m, y + cc / 4 - m);
  line(
    x - cc / 4 + m,
    y - cc / 4 - 2 * vs - m,
    x + cc / 4 - m,
    y + cc / 4 - 2 * vs - m
  );
  line(x - cc / 4 + m, y + cc / 4 - m, x + cc / 4 + m, y - cc / 4 - m);
  line(
    x - cc / 4 + m,
    y + cc / 4 - 2 * vs - m,
    x + cc / 4 + m,
    y - cc / 4 - 2 * vs - m
  );
}

function number0(x, y) {
  x=x+sc
  for (i = x - sc; i < x + sc; i += 2 * k) {
    beginShape();
    vertex(i, y + m);
    vertex(i + k, y - m);
    vertex(i + 2 * k, y + m);
    endShape();
    beginShape();
    vertex(i, y - m);
    vertex(i + k, y + m);
    vertex(i + 2 * k, y - m);
    endShape();
  }

  for (i = y; i < y + 4 * sc; i += 2 * k) {
    beginShape();
    vertex(x + m, i);
    vertex(x - m, i - k);
    vertex(x + m, i - k * 2);
    endShape();
    beginShape();
    vertex(x - m, i);
    vertex(x + m, i - k);
    vertex(x - m, i - k * 2);
    endShape();
  }

  for (i = y; i > y - 3 * vs; i -= 2 * k) {
    beginShape();
    vertex(x + m, i);
    vertex(x - m, i - k);
    vertex(x + m, i - k * 2);
    endShape();
    beginShape();
    vertex(x - m, i);
    vertex(x + m, i - k);
    vertex(x - m, i - k * 2);
    endShape();
  }

  for (i = y - 3 * vs; i > y - 3 * vs - 4 * sc; i -= 2 * k) {
    beginShape();
    vertex(x - m, i);
    vertex(x + m, i - k);
    vertex(x - m, i - k * 2);
    endShape();
    beginShape();
    vertex(x + m, i);
    vertex(x - m, i - k);
    vertex(x + m, i - k * 2);
    endShape();
  }

  for (i = y; i < y + 4 * sc; i += 2 * k) {
    beginShape();
    vertex(x - 2 * sc + m, i);
    vertex(x - 2 * sc - m, i - k);
    vertex(x - 2 * sc + m, i - k * 2);
    endShape();
    beginShape();
    vertex(x - 2 * sc - m, i);
    vertex(x - 2 * sc + m, i - k);
    vertex(x - 2 * sc - m, i - k * 2);
    endShape();
  }

  for (i = y; i > y - 3 * vs; i -= 2 * k) {
    beginShape();
    vertex(x - 2 * sc + m, i);
    vertex(x - 2 * sc - m, i - k);
    vertex(x - 2 * sc + m, i - k * 2);
    endShape();
    beginShape();
    vertex(x - 2 * sc - m, i);
    vertex(x - 2 * sc + m, i - k);
    vertex(x - 2 * sc - m, i - k * 2);
    endShape();
  }

  for (i = y - 3 * vs; i > y - 3 * vs - 4 * sc; i -= 2 * k) {
    beginShape();
    vertex(x - 2 * sc - m, i);
    vertex(x - 2 * sc + m, i - k);
    vertex(x - 2 * sc - m, i - k * 2);
    endShape();
    beginShape();
    vertex(x - 2 * sc + m, i);
    vertex(x - 2 * sc - m, i - k);
    vertex(x - 2 * sc + m, i - k * 2);
    endShape();
  }

  for (i = x - 2 * sc; i < x; i += 2 * k) {
    beginShape();
    vertex(i, y - 3 * vs - 4 * sc + m);
    vertex(i + k, y - 3 * vs - 4 * sc - m);
    vertex(i + k * 2, y - 3 * vs - 4 * sc + m);
    endShape();
    beginShape();
    vertex(i, y - 3 * vs - 4 * sc - m);
    vertex(i + k, y - 3 * vs - 4 * sc + m);
    vertex(i + k * 2, y - 3 * vs - 4 * sc - m);
    endShape();
  }

  for (i = x - 2 * sc; i < x; i += 2 * k) {
    beginShape();
    vertex(i, y + 3 * sc + m);
    vertex(i + k, y + 3 * sc - m);
    vertex(i + k * 2, y + 3 * sc + m);
    endShape();
    beginShape();
    vertex(i, y + 3 * sc - m);
    vertex(i + k, y + 3 * sc + m);
    vertex(i + k * 2, y + 3 * sc - m);
    endShape();
  }
}

//1
function number1(x, y) {
  for (i = x - sc; i < x + sc; i += 2 * k) {
    beginShape();
    vertex(i, y + m);
    vertex(i + k, y - m);
    vertex(i + 2 * k, y + m);
    endShape();
    beginShape();
    vertex(i, y - m);
    vertex(i + k, y + m);
    vertex(i + 2 * k, y - m);
    endShape();
  }

  for (i = y; i < y + 4 * sc; i += 2 * k) {
    beginShape();
    vertex(x + m, i);
    vertex(x - m, i - k);
    vertex(x + m, i - k * 2);
    endShape();
    beginShape();
    vertex(x - m, i);
    vertex(x + m, i - k);
    vertex(x - m, i - k * 2);
    endShape();
  }

  for (i = y; i > y - 3 * vs; i -= 2 * k) {
    beginShape();
    vertex(x + m, i);
    vertex(x - m, i - k);
    vertex(x + m, i - k * 2);
    endShape();
    beginShape();
    vertex(x - m, i);
    vertex(x + m, i - k);
    vertex(x - m, i - k * 2);
    endShape();
  }

  for (i = y - 3 * vs; i > y - 3 * vs - 4 * sc; i -= 2 * k) {
    beginShape();
    vertex(x - m, i);
    vertex(x + m, i - k);
    vertex(x - m, i - k * 2);
    endShape();
    beginShape();
    vertex(x + m, i);
    vertex(x - m, i - k);
    vertex(x + m, i - k * 2);
    endShape();
  }

  // for (i = x - sc; i < x; i += 2 * k) {
  //   beginShape();
  //   vertex(i, y - 3 * vs - 4 * sc + m);
  //   vertex(i + k, y - 3 * vs - 4 * sc - m);
  //   vertex(i + k * 2, y - 3 * vs - 4 * sc + m);
  //   endShape();
  //   beginShape();
  //   vertex(i, y - 3 * vs - 4 * sc - m);
  //   vertex(i + k, y - 3 * vs - 4 * sc + m);
  //   vertex(i + k * 2, y - 3 * vs - 4 * sc - m);
  //   endShape();
  // }

  // for (i = y - 3 * vs - 4 * sc; i < y - 3 * vs - 2 * sc; i += 2 * k) {
  //   beginShape();
  //   vertex(x - sc + m, i);
  //   vertex(x - sc - m, i + k);
  //   vertex(x - sc + m, i + k * 2);
  //   endShape();
  //   beginShape();
  //   vertex(x - sc - m, i);
  //   vertex(x - sc + m, i + k);
  //   vertex(x - sc - m, i + k * 2);
  //   endShape();
  // }
}

//2
function number2(x, y) {
  x=x-sc
  for (i = x; i > x - 2 * sc; i -= 2 * k) {
    beginShape();
    vertex(i, y - m);
    vertex(i + k, y + m);
    vertex(i + 2 * k, y - m);
    endShape();
    beginShape();
    vertex(i, y + m);
    vertex(i + k, y - m);
    vertex(i + 2 * k, y + m);
    endShape();
  }
  for (i = y + 2 * sc; i > y - sc; i -= 2 * k) {
    beginShape();
    vertex(x + m, i);
    vertex(x - m, i + k);
    vertex(x + m, i + 2 * k);
    endShape();
    beginShape();
    vertex(x - m, i);
    vertex(x + m, i + k);
    vertex(x - m, i + 2 * k);
    endShape();
  }
  for (i = y - sc; i > y - sc - 3 * vs; i -= 2 * k) {
    beginShape();
    vertex(x + m, i);
    vertex(x - m, i + k);
    vertex(x + m, i + 2 * k);
    endShape();
    beginShape();
    vertex(x - m, i);
    vertex(x + m, i + k);
    vertex(x - m, i + 2 * k);
    endShape();
  }
  for (i = x + sc; i > x - sc; i -= 2 * k) {
    beginShape();
    vertex(i, y - 3 * vs - m);
    vertex(i + k, y - 3 * vs + m);
    vertex(i + 2 * k, y - 3 * vs - m);
    endShape();
    beginShape();
    vertex(i, y - 3 * vs + m);
    vertex(i + k, y - 3 * vs - m);
    vertex(i + 2 * k, y - 3 * vs + m);
    endShape();
  }
  for (i = y - sc - 3 * vs; i > y - sc - 3 * vs - 4 * sc; i -= 2 * k) {
    beginShape();
    vertex(x + 2 * sc + m, i);
    vertex(x + 2 * sc - m, i + k);
    vertex(x + 2 * sc + m, i + 2 * k);
    endShape();
    beginShape();
    vertex(x + 2 * sc - m, i);
    vertex(x + 2 * sc + m, i + k);
    vertex(x + 2 * sc - m, i + 2 * k);
    endShape();
  }
  for (i = x + sc; i > x - sc; i -= 2 * k) {
    beginShape();
    vertex(i, y - 3 * vs - 4 * sc - m);
    vertex(i + k, y - 3 * vs - 4 * sc + m);
    vertex(i + 2 * k, y - 3 * vs - 4 * sc - m);
    endShape();
    beginShape();
    vertex(i, y - 3 * vs - 4 * sc + m);
    vertex(i + k, y - 3 * vs - 4 * sc - m);
    vertex(i + 2 * k, y - 3 * vs - 4 * sc + m);
    endShape();
  }
  for (i = x + sc; i > x - sc; i -= 2 * k) {
    beginShape();
    vertex(i, y + 3 * sc - m);
    vertex(i + k, y + 3 * sc + m);
    vertex(i + 2 * k, y + 3 * sc - m);
    endShape();
    beginShape();
    vertex(i, y + 3 * sc + m);
    vertex(i + k, y + 3 * sc - m);
    vertex(i + 2 * k, y + 3 * sc + m);
    endShape();
  }
  for (i = y + 2 * sc; i > y - sc; i -= 2 * k) {
    beginShape();
    vertex(x + 2 * sc + m, i);
    vertex(x + 2 * sc - m, i + k);
    vertex(x + 2 * sc + m, i + 2 * k);
    endShape();
    beginShape();
    vertex(x + 2 * sc - m, i);
    vertex(x + 2 * sc + m, i + k);
    vertex(x + 2 * sc - m, i + 2 * k);
    endShape();
  }
  for (i = y - 3 * vs - 3 * sc; i > y - 3 * vs - 5 * sc; i -= 2 * k) {
    beginShape();
    vertex(x + m, i);
    vertex(x - m, i + k);
    vertex(x + m, i + 2 * k);
    endShape();
    beginShape();
    vertex(x - m, i);
    vertex(x + m, i + k);
    vertex(x - m, i + 2 * k);
    endShape();
  }
}

//3
function number3(x, y) {
  for (i = x + sc; i > x - sc; i -= 2 * k) {
    beginShape();
    vertex(i, y - m);
    vertex(i + k, y + m);
    vertex(i + 2 * k, y - m);
    endShape();
    beginShape();
    vertex(i, y + m);
    vertex(i + k, y - m);
    vertex(i + 2 * k, y + m);
    endShape();
  }
  for (i = y + 2 * sc; i > y - sc; i -= 2 * k) {
    beginShape();
    vertex(x + sc + m, i);
    vertex(x + sc - m, i + k);
    vertex(x + sc + m, i + 2 * k);
    endShape();
    beginShape();
    vertex(x + sc - m, i);
    vertex(x + sc + m, i + k);
    vertex(x + sc - m, i + 2 * k);
    endShape();
  }
  for (i = y - sc; i > y - sc - 3 * vs; i -= 2 * k) {
    beginShape();
    vertex(x + sc + m, i);
    vertex(x + sc - m, i + k);
    vertex(x + sc + m, i + 2 * k);
    endShape();
    beginShape();
    vertex(x + sc - m, i);
    vertex(x + sc + m, i + k);
    vertex(x + sc - m, i + 2 * k);
    endShape();
  }
  for (i = x; i > x - 2 * sc; i -= 2 * k) {
    beginShape();
    vertex(i, y - 3 * vs - m);
    vertex(i + k, y - 3 * vs + m);
    vertex(i + 2 * k, y - 3 * vs - m);
    endShape();
    beginShape();
    vertex(i, y - 3 * vs + m);
    vertex(i + k, y - 3 * vs - m);
    vertex(i + 2 * k, y - 3 * vs + m);
    endShape();
  }
  for (i = y - sc - 3 * vs; i > y - sc - 3 * vs - 4 * sc; i -= 2 * k) {
    beginShape();
    vertex(x + sc + m, i);
    vertex(x + sc - m, i + k);
    vertex(x + sc + m, i + 2 * k);
    endShape();
    beginShape();
    vertex(x + sc - m, i);
    vertex(x + sc + m, i + k);
    vertex(x + sc - m, i + 2 * k);
    endShape();
  }
  for (i = x; i > x - 2 * sc; i -= 2 * k) {
    beginShape();
    vertex(i, y - 3 * vs - 4 * sc - m);
    vertex(i + k, y - 3 * vs - 4 * sc + m);
    vertex(i + 2 * k, y - 3 * vs - 4 * sc - m);
    endShape();
    beginShape();
    vertex(i, y - 3 * vs - 4 * sc + m);
    vertex(i + k, y - 3 * vs - 4 * sc - m);
    vertex(i + 2 * k, y - 3 * vs - 4 * sc + m);
    endShape();
  }
  for (i = x; i > x - 2 * sc; i -= 2 * k) {
    beginShape();
    vertex(i, y + 3 * sc - m);
    vertex(i + k, y + 3 * sc + m);
    vertex(i + 2 * k, y + 3 * sc - m);
    endShape();
    beginShape();
    vertex(i, y + 3 * sc + m);
    vertex(i + k, y + 3 * sc - m);
    vertex(i + 2 * k, y + 3 * sc + m);
    endShape();
  }
  for (i = y - 3 * vs - 3 * sc; i > y - 3 * vs - 5 * sc; i -= 2 * k) {
    beginShape();
    vertex(x - sc + m, i);
    vertex(x - sc - m, i + k);
    vertex(x - sc + m, i + 2 * k);
    endShape();
    beginShape();
    vertex(x - sc - m, i);
    vertex(x - sc + m, i + k);
    vertex(x - sc - m, i + 2 * k);
    endShape();
  }
  for (i = y + 2 * sc; i > y - sc; i -= 2 * k) {
    beginShape();
    vertex(x - sc + m, i);
    vertex(x - sc - m, i + k);
    vertex(x - sc + m, i + 2 * k);
    endShape();
    beginShape();
    vertex(x - sc - m, i);
    vertex(x - sc + m, i + k);
    vertex(x - sc - m, i + 2 * k);
    endShape();
  }
}

//4
function number4(x, y) {
  x = x - sc;
  for (i = x + sc; i > x - sc; i -= 2 * k) {
    beginShape();
    vertex(i, y - m);
    vertex(i + k, y + m);
    vertex(i + 2 * k, y - m);
    endShape();
    beginShape();
    vertex(i, y + m);
    vertex(i + k, y - m);
    vertex(i + 2 * k, y + m);
    endShape();
  }
  for (i = y + 2 * sc; i > y - sc; i -= 2 * k) {
    beginShape();
    vertex(x + sc + m, i);
    vertex(x + sc - m, i + k);
    vertex(x + sc + m, i + 2 * k);
    endShape();
    beginShape();
    vertex(x + sc - m, i);
    vertex(x + sc + m, i + k);
    vertex(x + sc - m, i + 2 * k);
    endShape();
  }
  for (i = y - sc; i > y - sc - 3 * vs; i -= 2 * k) {
    beginShape();
    vertex(x + sc + m, i);
    vertex(x + sc - m, i + k);
    vertex(x + sc + m, i + 2 * k);
    endShape();
    beginShape();
    vertex(x + sc - m, i);
    vertex(x + sc + m, i + k);
    vertex(x + sc - m, i + 2 * k);
    endShape();
  }
  for (i = y - sc - 3 * vs; i > y - sc - 3 * vs - 4 * sc; i -= 2 * k) {
    beginShape();
    vertex(x + sc + m, i);
    vertex(x + sc - m, i + k);
    vertex(x + sc + m, i + 2 * k);
    endShape();
    beginShape();
    vertex(x + sc - m, i);
    vertex(x + sc + m, i + k);
    vertex(x + sc - m, i + 2 * k);
    endShape();
  }
  for (i = x + sc; i > x - 2 * sc; i -= 2 * k) {
    beginShape();
    vertex(i, y - vs - m);
    vertex(i + k, y - vs + m);
    vertex(i + 2 * k, y - vs - m);
    endShape();
    beginShape();
    vertex(i, y - vs + m);
    vertex(i + k, y - vs - m);
    vertex(i + 2 * k, y - vs + m);
    endShape();
  }
  for (i = y - sc - vs; i > y - sc - 3 * vs; i -= 2 * k) {
    beginShape();
    vertex(x - sc + m, i);
    vertex(x - sc - m, i + k);
    vertex(x - sc + m, i + 2 * k);
    endShape();
    beginShape();
    vertex(x - sc - m, i);
    vertex(x - sc + m, i + k);
    vertex(x - sc - m, i + 2 * k);
    endShape();
  }
  for (i = y - sc - 3 * vs; i > y - sc - 3 * vs - 4 * sc; i -= 2 * k) {
    beginShape();
    vertex(x - sc + m, i);
    vertex(x - sc - m, i + k);
    vertex(x - sc + m, i + 2 * k);
    endShape();
    beginShape();
    vertex(x - sc - m, i);
    vertex(x - sc + m, i + k);
    vertex(x - sc - m, i + 2 * k);
    endShape();
  }
}

//5
function number5(x, y) {
  // x=x+sc
  for (i = x + sc; i > x - sc; i -= 2 * k) {
    beginShape();
    vertex(i, y - m);
    vertex(i + k, y + m);
    vertex(i + 2 * k, y - m);
    endShape();
    beginShape();
    vertex(i, y + m);
    vertex(i + k, y - m);
    vertex(i + 2 * k, y + m);
    endShape();
  }
  for (i = y + 2 * sc; i > y - sc; i -= 2 * k) {
    beginShape();
    vertex(x + sc + m, i);
    vertex(x + sc - m, i + k);
    vertex(x + sc + m, i + 2 * k);
    endShape();
    beginShape();
    vertex(x + sc - m, i);
    vertex(x + sc + m, i + k);
    vertex(x + sc - m, i + 2 * k);
    endShape();
  }
  for (i = y - sc; i > y - sc - 3 * vs; i -= 2 * k) {
    beginShape();
    vertex(x + sc + m, i);
    vertex(x + sc - m, i + k);
    vertex(x + sc + m, i + 2 * k);
    endShape();
    beginShape();
    vertex(x + sc - m, i);
    vertex(x + sc + m, i + k);
    vertex(x + sc - m, i + 2 * k);
    endShape();
  }
  for (i = y - sc - 3 * vs; i > y - sc - 3 * vs - 4 * sc; i -= 2 * k) {
    beginShape();
    vertex(x - sc + m, i);
    vertex(x - sc - m, i + k);
    vertex(x - sc + m, i + 2 * k);
    endShape();
    beginShape();
    vertex(x - sc - m, i);
    vertex(x - sc + m, i + k);
    vertex(x - sc - m, i + 2 * k);
    endShape();
  }
  for (i = x - sc; i < x + sc; i += 2 * k) {
    beginShape();
    vertex(i, y - 3 * vs - 4 * sc + m);
    vertex(i + k, y - 3 * vs - 4 * sc - m);
    vertex(i + k * 2, y - 3 * vs - 4 * sc + m);
    endShape();
    beginShape();
    vertex(i, y - 3 * vs - 4 * sc - m);
    vertex(i + k, y - 3 * vs - 4 * sc + m);
    vertex(i + k * 2, y - 3 * vs - 4 * sc - m);
    endShape();
  }
  for (i = x - sc; i < x + sc; i += 2 * k) {
    beginShape();
    vertex(i, y - 3 * vs + m);
    vertex(i + k, y - 3 * vs - m);
    vertex(i + k * 2, y - 3 * vs + m);
    endShape();
    beginShape();
    vertex(i, y - 3 * vs - m);
    vertex(i + k, y - 3 * vs + m);
    vertex(i + k * 2, y - 3 * vs - m);
    endShape();
  }

  for (i = x - sc; i < x + sc; i += 2 * k) {
    beginShape();
    vertex(i, y + 3 * sc + m);
    vertex(i + k, y + 3 * sc - m);
    vertex(i + k * 2, y + 3 * sc + m);
    endShape();
    beginShape();
    vertex(i, y + 3 * sc - m);
    vertex(i + k, y + 3 * sc + m);
    vertex(i + k * 2, y + 3 * sc - m);
    endShape();
  }

  for (i = y + 2 * sc; i > y - sc; i -= 2 * k) {
    beginShape();
    vertex(x - sc + m, i);
    vertex(x - sc - m, i + k);
    vertex(x - sc + m, i + 2 * k);
    endShape();
    beginShape();
    vertex(x - sc - m, i);
    vertex(x - sc + m, i + k);
    vertex(x - sc - m, i + 2 * k);
    endShape();
  }
}

function number6(x, y) {
  x = x + sc;
  for (i = x + sc; i > x - sc; i -= 2 * k) {
    beginShape();
    vertex(i, y - m);
    vertex(i + k, y + m);
    vertex(i + 2 * k, y - m);
    endShape();
    beginShape();
    vertex(i, y + m);
    vertex(i + k, y - m);
    vertex(i + 2 * k, y + m);
    endShape();
  }
  for (i = y + 2 * sc; i > y - sc; i -= 2 * k) {
    beginShape();
    vertex(x + sc + m, i);
    vertex(x + sc - m, i + k);
    vertex(x + sc + m, i + 2 * k);
    endShape();
    beginShape();
    vertex(x + sc - m, i);
    vertex(x + sc + m, i + k);
    vertex(x + sc - m, i + 2 * k);
    endShape();
  }
  for (i = y - sc; i > y - sc - 3 * vs; i -= 2 * k) {
    beginShape();
    vertex(x + sc + m, i);
    vertex(x + sc - m, i + k);
    vertex(x + sc + m, i + 2 * k);
    endShape();
    beginShape();
    vertex(x + sc - m, i);
    vertex(x + sc + m, i + k);
    vertex(x + sc - m, i + 2 * k);
    endShape();
  }
  for (i = y - 3 * sc - 3 * vs; i > y - 5 * sc - 3 * vs; i -= 2 * k) {
    beginShape();
    vertex(x + sc + m, i);
    vertex(x + sc - m, i + k);
    vertex(x + sc + m, i + 2 * k);
    endShape();
    beginShape();
    vertex(x + sc - m, i);
    vertex(x + sc + m, i + k);
    vertex(x + sc - m, i + 2 * k);
    endShape();
  }
  for (i = y + 2 * sc; i > y - sc; i -= 2 * k) {
    beginShape();
    vertex(x - sc + m, i);
    vertex(x - sc - m, i + k);
    vertex(x - sc + m, i + 2 * k);
    endShape();
    beginShape();
    vertex(x - sc - m, i);
    vertex(x - sc + m, i + k);
    vertex(x - sc - m, i + 2 * k);
    endShape();
  }
  for (i = y - sc; i > y - sc - 3 * vs; i -= 2 * k) {
    beginShape();
    vertex(x - sc + m, i);
    vertex(x - sc - m, i + k);
    vertex(x - sc + m, i + 2 * k);
    endShape();
    beginShape();
    vertex(x - sc - m, i);
    vertex(x - sc + m, i + k);
    vertex(x - sc - m, i + 2 * k);
    endShape();
  }
  for (i = y - sc - 3 * vs; i > y - sc - 3 * vs - 4 * sc; i -= 2 * k) {
    beginShape();
    vertex(x - sc + m, i);
    vertex(x - sc - m, i + k);
    vertex(x - sc + m, i + 2 * k);
    endShape();
    beginShape();
    vertex(x - sc - m, i);
    vertex(x - sc + m, i + k);
    vertex(x - sc - m, i + 2 * k);
    endShape();
  }
  for (i = x - sc; i < x + sc; i += 2 * k) {
    beginShape();
    vertex(i, y + 3 * sc + m);
    vertex(i + k, y + 3 * sc - m);
    vertex(i + k * 2, y + 3 * sc + m);
    endShape();
    beginShape();
    vertex(i, y + 3 * sc - m);
    vertex(i + k, y + 3 * sc + m);
    vertex(i + k * 2, y + 3 * sc - m);
    endShape();
  }
  for (i = x - sc; i < x + sc; i += 2 * k) {
    beginShape();
    vertex(i, y - 3 * vs + m);
    vertex(i + k, y - 3 * vs - m);
    vertex(i + k * 2, y - 3 * vs + m);
    endShape();
    beginShape();
    vertex(i, y - 3 * vs - m);
    vertex(i + k, y - 3 * vs + m);
    vertex(i + k * 2, y - 3 * vs - m);
    endShape();
  }
  for (i = x - sc; i < x + sc; i += 2 * k) {
    beginShape();
    vertex(i, y - 4 * sc - 3 * vs + m);
    vertex(i + k, y - 4 * sc - 3 * vs - m);
    vertex(i + k * 2, y - 4 * sc - 3 * vs + m);
    endShape();
    beginShape();
    vertex(i, y + -4 * sc - 3 * vs - m);
    vertex(i + k, y - 4 * sc - 3 * vs + m);
    vertex(i + k * 2, y - 4 * sc - 3 * vs - m);
    endShape();
  }
}

//7
function number7(x, y) {
  for (i = x + sc; i > x - sc; i -= 2 * k) {
    beginShape();
    vertex(i, y - m);
    vertex(i + k, y + m);
    vertex(i + 2 * k, y - m);
    endShape();
    beginShape();
    vertex(i, y + m);
    vertex(i + k, y - m);
    vertex(i + 2 * k, y + m);
    endShape();
  }
  for (i = y + 2 * sc; i > y - sc; i -= 2 * k) {
    beginShape();
    vertex(x + sc + m, i);
    vertex(x + sc - m, i + k);
    vertex(x + sc + m, i + 2 * k);
    endShape();
    beginShape();
    vertex(x + sc - m, i);
    vertex(x + sc + m, i + k);
    vertex(x + sc - m, i + 2 * k);
    endShape();
  }
  for (i = y - sc; i > y - sc - 3 * vs; i -= 2 * k) {
    beginShape();
    vertex(x + sc + m, i);
    vertex(x + sc - m, i + k);
    vertex(x + sc + m, i + 2 * k);
    endShape();
    beginShape();
    vertex(x + sc - m, i);
    vertex(x + sc + m, i + k);
    vertex(x + sc - m, i + 2 * k);
    endShape();
  }
  for (i = y - sc - 3 * vs; i > y - sc - 3 * vs - 4 * sc; i -= 2 * k) {
    beginShape();
    vertex(x + sc + m, i);
    vertex(x + sc - m, i + k);
    vertex(x + sc + m, i + 2 * k);
    endShape();
    beginShape();
    vertex(x + sc - m, i);
    vertex(x + sc + m, i + k);
    vertex(x + sc - m, i + 2 * k);
    endShape();
  }

  for (i = x ; i > x - 2*sc; i -= 2 * k) {
    beginShape();
    vertex(i, y - 3 * vs - 4 * sc - m);
    vertex(i + k, y - 3 * vs - 4 * sc + m);
    vertex(i + 2 * k, y - 3 * vs - 4 * sc - m);
    endShape();
    beginShape();
    vertex(i, y - 3 * vs - 4 * sc + m);
    vertex(i + k, y - 3 * vs - 4 * sc - m);
    vertex(i + 2 * k, y - 3 * vs - 4 * sc + m);
    endShape();
  }
    for (i = y - 3*sc - 3 * vs; i > y - sc - 3 * vs - 4 * sc; i -= 2 * k) {
    beginShape();
    vertex(x - sc + m, i);
    vertex(x - sc - m, i + k);
    vertex(x - sc + m, i + 2 * k);
    endShape();
    beginShape();
    vertex(x - sc - m, i);
    vertex(x - sc + m, i + k);
    vertex(x - sc - m, i + 2 * k);
    endShape();
  }
}


//8

function number8(x, y) {
  //x = x + sc;
  for (i = x-sc; i > x - 3*sc; i -= 2 * k) {
    beginShape();
    vertex(i, y - m);
    vertex(i + k, y + m);
    vertex(i + 2 * k, y - m);
    endShape();
    beginShape();
    vertex(i, y + m);
    vertex(i + k, y - m);
    vertex(i + 2 * k, y + m);
    endShape();
  }
  for (i = y + 2 * sc; i > y - sc; i -= 2 * k) {
    beginShape();
    vertex(x + sc + m, i);
    vertex(x + sc - m, i + k);
    vertex(x + sc + m, i + 2 * k);
    endShape();
    beginShape();
    vertex(x + sc - m, i);
    vertex(x + sc + m, i + k);
    vertex(x + sc - m, i + 2 * k);
    endShape();
  }
  for (i = y - sc; i > y - sc - 3 * vs; i -= 2 * k) {
    beginShape();
    vertex(x + sc + m, i);
    vertex(x + sc - m, i + k);
    vertex(x + sc + m, i + 2 * k);
    endShape();
    beginShape();
    vertex(x + sc - m, i);
    vertex(x + sc + m, i + k);
    vertex(x + sc - m, i + 2 * k);
    endShape();
  }
  for (i = y -  sc - 3 * vs; i > y - 5 * sc - 3 * vs; i -= 2 * k) {
    beginShape();
    vertex(x + sc + m, i);
    vertex(x + sc - m, i + k);
    vertex(x + sc + m, i + 2 * k);
    endShape();
    beginShape();
    vertex(x + sc - m, i);
    vertex(x + sc + m, i + k);
    vertex(x + sc - m, i + 2 * k);
    endShape();
  }
  for (i = y + 2 * sc; i > y - sc; i -= 2 * k) {
    beginShape();
    vertex(x - sc + m, i);
    vertex(x - sc - m, i + k);
    vertex(x - sc + m, i + 2 * k);
    endShape();
    beginShape();
    vertex(x - sc - m, i);
    vertex(x - sc + m, i + k);
    vertex(x - sc - m, i + 2 * k);
    endShape();
  }
  for (i = y - sc; i > y - sc - 3 * vs; i -= 2 * k) {
    beginShape();
    vertex(x - sc + m, i);
    vertex(x - sc - m, i + k);
    vertex(x - sc + m, i + 2 * k);
    endShape();
    beginShape();
    vertex(x - sc - m, i);
    vertex(x - sc + m, i + k);
    vertex(x - sc - m, i + 2 * k);
    endShape();
  }
  for (i = y - sc - 3 * vs; i > y - sc - 3 * vs - 4 * sc; i -= 2 * k) {
    beginShape();
    vertex(x - sc + m, i);
    vertex(x - sc - m, i + k);
    vertex(x - sc + m, i + 2 * k);
    endShape();
    beginShape();
    vertex(x - sc - m, i);
    vertex(x - sc + m, i + k);
    vertex(x - sc - m, i + 2 * k);
    endShape();
  }
  for (i = x - sc; i < x + sc; i += 2 * k) {
    beginShape();
    vertex(i, y + 3 * sc + m);
    vertex(i + k, y + 3 * sc - m);
    vertex(i + k * 2, y + 3 * sc + m);
    endShape();
    beginShape();
    vertex(i, y + 3 * sc - m);
    vertex(i + k, y + 3 * sc + m);
    vertex(i + k * 2, y + 3 * sc - m);
    endShape();
  }
  for (i = x - sc; i < x + sc; i += 2 * k) {
    beginShape();
    vertex(i, y - 3 * vs + m);
    vertex(i + k, y - 3 * vs - m);
    vertex(i + k * 2, y - 3 * vs + m);
    endShape();
    beginShape();
    vertex(i, y - 3 * vs - m);
    vertex(i + k, y - 3 * vs + m);
    vertex(i + k * 2, y - 3 * vs - m);
    endShape();
  }
  for (i = x - sc; i < x + sc; i += 2 * k) {
    beginShape();
    vertex(i, y - 4 * sc - 3 * vs + m);
    vertex(i + k, y - 4 * sc - 3 * vs - m);
    vertex(i + k * 2, y - 4 * sc - 3 * vs + m);
    endShape();
    beginShape();
    vertex(i, y + -4 * sc - 3 * vs - m);
    vertex(i + k, y - 4 * sc - 3 * vs + m);
    vertex(i + k * 2, y - 4 * sc - 3 * vs - m);
    endShape();
  }
}



//8

function number9(x, y) {
 // x = x - sc;
  for (i = x+sc; i > x-sc ; i -= 2 * k) {
    beginShape();
    vertex(i, y - m);
    vertex(i + k, y + m);
    vertex(i + 2 * k, y - m);
    endShape();
    beginShape();
    vertex(i, y + m);
    vertex(i + k, y - m);
    vertex(i + 2 * k, y + m);
    endShape();
  }
  for (i = y + 2 * sc; i > y - sc; i -= 2 * k) {
    beginShape();
    vertex(x + sc + m, i);
    vertex(x + sc - m, i + k);
    vertex(x + sc + m, i + 2 * k);
    endShape();
    beginShape();
    vertex(x + sc - m, i);
    vertex(x + sc + m, i + k);
    vertex(x + sc - m, i + 2 * k);
    endShape();
  }
  for (i = y - sc; i > y - sc - 2 * vs; i -= 2 * k) {
    beginShape();
    vertex(x + sc + m, i);
    vertex(x + sc - m, i + k);
    vertex(x + sc + m, i + 2 * k);
    endShape();
    beginShape();
    vertex(x + sc - m, i);
    vertex(x + sc + m, i + k);
    vertex(x + sc - m, i + 2 * k);
    endShape();
  }
  for (i = y -  sc - 2 * vs; i > y - 5 * sc - 3 * vs; i -= 2 * k) {
    beginShape();
    vertex(x + sc + m, i);
    vertex(x + sc - m, i + k);
    vertex(x + sc + m, i + 2 * k);
    endShape();
    beginShape();
    vertex(x + sc - m, i);
    vertex(x + sc + m, i + k);
    vertex(x + sc - m, i + 2 * k);
    endShape();
  }
  for (i = y + 2 * sc; i > y - sc; i -= 2 * k) {
    beginShape();
    vertex(x - sc + m, i);
    vertex(x - sc - m, i + k);
    vertex(x - sc + m, i + 2 * k);
    endShape();
    beginShape();
    vertex(x - sc - m, i);
    vertex(x - sc + m, i + k);
    vertex(x - sc - m, i + 2 * k);
    endShape();
  }
 
  for (i = y - sc - 2 * vs; i > y - sc - 3 * vs - 4 * sc; i -= 2 * k) {
    beginShape();
    vertex(x - sc + m, i);
    vertex(x - sc - m, i + k);
    vertex(x - sc + m, i + 2 * k);
    endShape();
    beginShape();
    vertex(x - sc - m, i);
    vertex(x - sc + m, i + k);
    vertex(x - sc - m, i + 2 * k);
    endShape();
  }
  for (i = x - sc; i < x + sc; i += 2 * k) {
    beginShape();
    vertex(i, y + 3 * sc + m);
    vertex(i + k, y + 3 * sc - m);
    vertex(i + k * 2, y + 3 * sc + m);
    endShape();
    beginShape();
    vertex(i, y + 3 * sc - m);
    vertex(i + k, y + 3 * sc + m);
    vertex(i + k * 2, y + 3 * sc - m);
    endShape();
  }
  for (i = x - sc; i < x + sc; i += 2 * k) {
    beginShape();
    vertex(i, y - 2 * vs + m);
    vertex(i + k, y - 2 * vs - m);
    vertex(i + k * 2, y - 2 * vs + m);
    endShape();
    beginShape();
    vertex(i, y - 2 * vs - m);
    vertex(i + k, y - 2 * vs + m);
    vertex(i + k * 2, y - 2 * vs - m);
    endShape();
  }
  for (i = x - sc; i < x + sc; i += 2 * k) {
    beginShape();
    vertex(i, y - 4 * sc - 3 * vs + m);
    vertex(i + k, y - 4 * sc - 3 * vs - m);
    vertex(i + k * 2, y - 4 * sc - 3 * vs + m);
    endShape();
    beginShape();
    vertex(i, y + -4 * sc - 3 * vs - m);
    vertex(i + k, y - 4 * sc - 3 * vs + m);
    vertex(i + k * 2, y - 4 * sc - 3 * vs - m);
    endShape();
  }
}
