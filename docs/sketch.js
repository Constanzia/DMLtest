let x1,x2,x3,x4,y1,y2,y3,y4,j,q,k,n,p,v
var co

function setup() {
  createCanvas(400, 400);
    frameRate(1); 
co=0;
  j=random(-50,50); 
  q=random(50,220);
  k=random(50,170);
  n=random(-50,50); 
  p=random(-50,100);
  v=random(0,int(0.2*j));
  x2=random(20,200);
  y2=random(10,200);
}

function draw() {
 background(250);
noFill();
strokeWeight(1);
 //stroke(200,100,100+co);
 co=co+10;

  //x2=150;
  //y2=150;
  x1=x2+j
  y1=y2+q
  x3=x2+k
  y3=y2+0.5*n;
  x4=x3+p
   y4=y1+v;

line(x1,y1,x2,y2);
line(x2,y2,x4,y4);
line(x3,y3,x4,y4);
  //strokeWeight(10);
  
  point(x1,y1);
  point(x2,y2);
  point(x3,y3);
  point(x4,y4);
if (y4>= width){
  y4=width-3;}
  if (y2>= width){
  y2=width-3;}
   if (y3<=0){
  y3=y3+20;}
   if (x4>= width){
  x4=width-3;}
   if (y3>=y2+0.5*(y1-y2)){
  y3=y3-20;}
  if (x1<= 2){
  x1=x1+20;}
  
  //console.log(mouseX,mouseY);
}
function mousePressed(){
  saveFrames('ngroup', 'png', 1, 1);
  setup();}
