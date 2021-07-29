let x1,x2,x3,x4,x5,x6,y1,y2,y3,y4,y5,y6
let j,q,k,n,p,v,m,l
let r21,r34
var co

function setup() {
  createCanvas(400, 400);
    frameRate(10); 
 
co=0;
   x2=random(20,200);
  y2=random(10,200);

  j=random(-50,50); 
  q=random(50,250);
  k=random(50,250);
  n=random(0,50); 
  p=random(0,50);
  v=random(0,int(0.2*j));
  m=random(0,j);
  l=random(0,20);
  r21=random(y2,(y2+q));
  r34=random((y2+l),(y2+q+v));
 
 
}

function draw() {
 background(250);
noFill();
strokeWeight(1);
//stroke(130,100+co,100+0.2*co);
 co=co+15;

  //x2=150;
  //y2=150;
  x1=x2+j;
  y1=y2+q;
  x3=x2+m;
  y3=y2+l;
  x4=x1+0.5*k;
  y4=y1+v;
  x5=x2-n
  y5=r21
  x6=x3+p
  y6=r34

line(x1,y1,x2,y2);
line(x2,y2,x3,y3);
line(x3,y3,x4,y4);
line(x5,y5,x6,y6);
  strokeWeight(10);
  
 
  point(x5,y5);

  
  //console.log(mouseX,mouseY);
}
function mousePressed(){
  //saveFrames('ngroup', 'png', 1, 1);
  setup();}
