var r
var radius
var k
var a=1,b
var n
var n1,n2,n3
var m1,m2
var m=1
var sameButton,saveButton
var slider1,sliderm,slidern, sliderscl
var same=false
var colors=true

function sgn(value){
  if (value==0){return 0;}
    else if (value<0){return -1;}
 else    if (value>0){return 1;}
}

function setup() {
  createCanvas(650, 400,SVG);
 // slider1=createSlider(0,100,1/2,0.01)
   //slidern=createSlider(0,20,1,0.1)
   avsb=createInput('1');
   avsb.position(600, 15);
  slidern1=createSlider(0,20,1,0.1)
   slidern1.position(600, 40);
   slidern1.addClass('mySliders');
  slidern2=createSlider(0,20,1,0.1)
    slidern2.position(750, 40);
   slidern2.addClass('mySliders');
  slidern3=createSlider(-20,20,1,0.1)
     slidern3.position(600, 65);
   slidern3.addClass('mySliders');
   //sliderm=createSlider(0,100,1,0.01)
   sliderm1=createSlider(0,35,1,0.2)
   sliderm1.addClass('mySliders');
   sliderm2=createSlider(0,35,1,0.2)
   sliderm2.addClass('mySliders');
    sliderscl=createSlider(0,120,30,0.1)
     sliderscl.position(600, 90);
   sliderscl.addClass('mySliders');
  sameButton=createButton('symmetric')
  sameButton.mousePressed(samez)
  sameButton.position(170, 400);
  sameButton.addClass('myButtons');
    saveButton=createButton('SAVE')
  saveButton.mousePressed(savetheSVG)
  saveButton.addClass('myButtons');
      colorButton=createButton('COLOR')
  colorButton.mousePressed(changeView)
  colorButton.addClass('myButtons');
}


function draw() {
 // n=slider1.value()
 // n1=n2=n3=slidern.value()
  k=avsb.value()
  radius= sliderscl.value()
  b=k*a
  n1=slidern1.value()
   n2=slidern2.value()
   n3=slidern3.value()
  m1=sliderm1.value()
   m2=sliderm2.value()
  
  //m=sliderm.value()
  background(180,0);

//  noStroke()
  
  //console.log(m1,m2,m1/m2)
fill(0)
  
  textSize(16);
text('a:'+a+'  '+'b:'+b, 10, 20);
    text('n1:'+n1+' , '+'n2:'+n2, 10, 45);
  text('n:'+n3, 10, 70);
  text('scale:'+radius, 10, 95);
  if(same){m2=m1;text('symmetric:on',10,120)}else{text('symmetric:off',10,120)}
   text('segment1:'+m1+' , '+'segment2:'+m2, 10, height-5);
    translate(width / 1.85, height / 2);
  
  push();
  if(colors){noStroke();fill(0);}else{
  noFill();stroke(0);}
     beginShape();

  for (var angle = 0; angle < PI*2; angle += 0.002) {
    var r=superShape(angle)

   var x=radius*r*(cos(angle))
   var y=radius*r*(sin(angle))
   
    vertex(x, y);
  }
  
  endShape(CLOSE);
  pop();
  // //circle
  // beginShape();
  // for (var angle = 0; angle < PI * 2; angle += 0.002) {
  //   var x = r * cos(angle);
  //   var y = r * sin(angle);
 // r=120
  //   vertex(x, y);
  // }
  
  // endShape(CLOSE);
  
//   //superEllipse
//    beginShape();
//   for (var angle = 0; angle < PI * 2; angle += 0.002) {
    
//    var na=2/n
//    var x=pow(abs(cos(angle)),na)*a*sgn(cos(angle))
//    var y=pow(abs(sin(angle)),na)*b*sgn(sin(angle))
   
//     vertex(x, y);
//   }
  
//   endShape(CLOSE);
  
  
}
function superShape(theta){
  
  var part1=(1/a)*cos(theta*m1/4);
  part1=abs(part1);
  part1=pow(part1,n2);
  
  var part2=(1/b)*sin(theta*m2/4);
  part2=abs(part2);
  part2=pow(part2,n3)
  
  var part3=pow(part1+part2,1/n1);
  
  if(part3===0){return 0;}
  
  return (1/part3);
}
function samez(){same=!same}
function savetheSVG(){save('mysuperShape',SVG)}
function changeView(){colors=!colors}
