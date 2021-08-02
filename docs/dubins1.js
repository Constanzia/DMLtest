
var i,size1,vmax,vmin
let k,a,b
let x,y,r
let button;
let buttontext
let g=true

var cir1= {x:65,y:65}
    cir2= {x:cir1.x+90,y:cir1.y}
    cir3= {x:cir1.x+180,y:cir1.y}
    cir4= {x:cir1.x+270,y:cir1.y}
    cir5= {x:cir1.x,y:cir1.y+90}
    cir6= {x:cir1.x+90,y:cir1.y+90}
    cir7= {x:cir1.x+180,y:cir1.y+90}
    cir8= {x:cir1.x+270,y:cir1.y+90}
     cir9= {x:cir1.x,y:cir1.y+180}
    cir10= {x:cir1.x+90,y:cir1.y+180}
    cir11= {x:cir1.x+180,y:cir1.y+180}
    cir12= {x:cir1.x+270,y:cir1.y+180}
   cir13= {x:cir1.x,y:cir1.y+270}
    cir14= {x:cir1.x+90,y:cir1.y+270}
    cir15= {x:cir1.x+180,y:cir1.y+270}
    cir16= {x:cir1.x+270,y:cir1.y+270}
;



function setup() {
  createCanvas(400, 400);
  frameRate(20)

buttontext='grid view'

   k=random(15,45)

   v=random([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,0])
 // console.log(v)
  size1=createSlider(5,45,34)
  //size1.position(40, 80);
  size1.addClass("mySliders");
 button = createButton(buttontext);
  //button.position(0, 0);
  button.mousePressed(showGrid);
   button.addClass("myButtons");
}

function draw() {
//console.log(size1.value())
  background(255);
r=size1.value();
  //x=[65,155,245,335]
 // y=[65,155,245,335]
 //for(var x=65; x<width;x+=90){
   //for(var y=65;y<width;y+=90){
     fill(0)
      noStroke(0)

  
  
  
  
  // circle([x],[y],2*r)
newbase1();
  //console.log(ssl.x)
strokeWeight(3)
  
  //shape
draw1();
  
  //shape
  refill1();
 // if(r<=27){
 // empty(cir11.x,cir11.y,2*r); 
       //   }else{ }




     // }
    //console.log(cos(PI/8.0)) ;
 // }

   if(g){grid1()}
   
//noLoop()
  

  
}
function base(x,y,scale){
 
  fill(0);

  circle(x,y,scale);
  
}
function empty(x,y,scale){
 noStroke();
  fill(255);
//strokeWeight(1);

  circle(x,y,scale);
  
}
function showGrid() {
g=!g;
buttontext=('show grid')
}


function newbase1(){base(cir1.x,cir1.y,2*r);
base(cir2.x,cir2.y,2*r);
empty(cir3.x,cir3.y,2*r);
empty(cir4.x,cir4.y,2*r);
empty(cir5.x,cir5.y,2*r);
empty(cir6.x,cir6.y,2*r);
empty(cir7.x,cir7.y,2*r);
base(cir8.x,cir8.y,2*r);
base(cir9.x,cir9.y,2*r);
empty(cir10.x,cir10.y,2*r);
//base(cir11.x,cir11.y,2*r);
empty(cir12.x,cir12.y,2*r);
empty(cir13.x,cir13.y,2*r);
empty(cir14.x,cir14.y,2*r);
empty(cir15.x,cir15.y,2*r);
base(cir16.x,cir16.y,2*r);}

function draw1(){beginShape();
var vmax=38
var vmin=25
                 
vertex(cir1.x,cir1.y-r);
vertex(cir2.x,cir2.y-r);
vertex(cir2.x+r*sin(PI/8.0),cir2.y-r*cos(PI/8.0));
vertex(cir8.x+r*sin(PI/8.0),cir8.y-r*cos(PI/8.0));
                 
if(r<vmin){vertex(cir8.x+r*cos(PI/12.0),cir8.y+r*sin(PI/12.0));}else if(r>vmax){vertex(cir8.x+r*cos(PI/3.0),cir8.y+r*sin(PI/3.0));}else
{vertex(cir8.x+r*cos(PI/4.0),cir8.y+r*sin(PI/4.0));}
                 
if(r<vmin){vertex(cir12.x-r*cos(PI/12.0),cir12.y-r*sin(PI/12.0));}else if(r>vmax)
{vertex(cir12.x-r*cos(PI/3.0),cir12.y-r*sin(PI/3.0));}else
{vertex(cir12.x-r*cos(PI/4.0),cir12.y-r*sin(PI/4.0));}
                 
if(r<vmin){
  vertex(cir12.x-r*cos(PI/12.0),cir12.y+r*sin(PI/12.0));
}else if(r>vmax)
{vertex(cir12.x-r*cos(PI/3.0),cir12.y+r*sin(PI/3.0));}  
else{vertex(cir12.x-r*sin(PI/4.0),cir12.y+r*cos(PI/4.0));}
                 
                
if(r<vmin){ vertex(cir16.x+r*cos(PI/12.0),cir16.y-r*sin(PI/12.0)); }  else if(r>vmax){vertex(cir16.x+r*cos(PI/3.0),cir16.y-r*sin(PI/3.0));}else{           
vertex(cir16.x+r*cos(PI/4.0),cir16.y-r*sin(PI/4.0));}
                 
vertex(cir16.x-r*sin(PI/4.0),cir16.y+r*cos(PI/4.0));
vertex(cir10.x+r*sin(PI/4.0),cir10.y-r*cos(PI/4.0));

if(r<vmin){ vertex(cir10.x-r*sin(PI/12.0),cir10.y-r*cos(PI/12.0)); }  else if(r>vmax)
{vertex(cir10.x-r*sin(PI/3.0),cir10.y-r*cos(PI/3.0));}else{           
vertex(cir10.x-r*sin(PI/4.0),cir10.y-r*cos(PI/4.0));}

if(r<vmin){ vertex(cir9.x+r*sin(PI/12.0),cir9.y+r*cos(PI/12.0)); }  else if(r>vmax)
{vertex(cir9.x+r*sin(PI/3.0),cir9.y+r*cos(PI/3.0));}else{           
vertex(cir9.x+r*sin(PI/4.0),cir9.y+r*cos(PI/4.0));}
                 
if(r<vmin){ vertex(cir9.x-r*sin(PI/12.0),cir9.y-r*cos(PI/12.0)); }else{           
vertex(cir9.x,cir9.y-r);}
                 
if(r<vmin){ vertex(cir7.x+r*sin(PI/12.0),cir7.y+r*cos(PI/12.0)); }else{           
vertex(cir7.x,cir7.y+r);}

if(r<vmin){ vertex(cir7.x+r*sin(PI/8.0),cir7.y-r*cos(PI/8.0)); }else{           
vertex(cir7.x,cir7.y-r);}
                 
if(r<vmin){ vertex(cir1.x-r*sin(PI/12.0),cir1.y+r*cos(PI/12.0)); }else{           
vertex(cir1.x,cir1.y+r);}
/*
vertex(cir9.x+r*sin(PI/4.0),cir9.y+r*cos(PI/4.0));
vertex(cir9.x,cir9.y-r);
vertex(cir7.x,cir7.y+r);
vertex(cir7.x,cir7.y-r);
vertex(cir1.x,cir1.y+r);
//vertex(cir1.x-r*sin(PI/8.0),cir1.y+r*cos(PI/8.0));*/
endShape(CLOSE);}

function refill1(){empty(cir7.x,cir7.y,2*r); 
empty(cir12.x,cir12.y,2*r); 
  empty(cir10.x,cir10.y,2*r); }

function grid1(){
  k=2
  for (a=65;a<=width;a+=90) {
     for (b=65;b<=width;b+=90){
fill(255,0,0)
       noStroke()
circle(a-r,b,k)
circle(a+r,b,k)
circle(a,b+r,k)
circle(a,b-r,k)
circle(a+r*cos(PI/8.0),b+r*sin(PI/8.0),k)
circle(a+r*cos(PI/8.0),b-r*sin(PI/8.0),k)
circle(a-r*cos(PI/8.0),b+r*sin(PI/8.0),k)
circle(a-r*cos(PI/8.0),b-r*sin(PI/8.0),k)
circle(a+r*sin(PI/8.0),b-r*cos(PI/8.0),k)
circle(a-r*sin(PI/8.0),b-r*cos(PI/8.0),k)
circle(a-r*sin(PI/8.0),b+r*cos(PI/8.0),k)
circle(a+r*sin(PI/8.0),b+r*cos(PI/8.0),k)
     
circle(a+r*cos(PI/4.0),b+r*sin(PI/4.0),k)
circle(a+r*cos(PI/4.0),b-r*sin(PI/4.0),k)
circle(a-r*cos(PI/4.0),b-r*sin(PI/4.0),k)
circle(a-r*cos(PI/4.0),b+r*sin(PI/4.0),k)
     
circle(a+r*cos(PI/2.0),b+r*sin(PI/2.0),k)
circle(a+r*cos(PI/2.0),b-r*sin(PI/2.0),k)
circle(a-r*cos(PI/2.0),b-r*sin(PI/2.0),k)
circle(a-r*cos(PI/2.0),b+r*sin(PI/2.0),k)
 
     }}
}
