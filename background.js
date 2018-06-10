var x,y;
var dx=0, dy=0;
var m=100;
var mouseM=200;
var marginM=100;
var k=4;

function setup(){
  createCanvas(window.innerWidth,window.innerHeight);
  x=width/2;
  y=height/2;
  background(0);
  fill(255, 102, 153);
  noStroke();
}

function draw(){
  background(0);

  // var dLeft=-k*m*marginM/(x*x);
  // var dRight=k*m*marginM/((width-x)*(width-x));
  // var dUp=-k*m*marginM/(y*y);
  // var dDown=k*m*marginM/((height-y)*(height-y));
  //
  // dx+=dLeft+dRight
  // dy+=dUp+dDown



  if(mouseIsPressed){
    var dMouseX=m*mouseM/((mouseX-x)*(mouseX-x)+(mouseY-y)*(mouseY-y));
    var dMouseY=m*mouseM/((mouseX-x)*(mouseX-x)+(mouseY-y)*(mouseY-y));

    if(mouseX>x){
      dx+=dMouseX;
    }
    else{
      dx-=dMouseX;
    }
    if(mouseY>y){
      dy+=dMouseY;
    }
    else{
      dy-=dMouseY;
    }
    fill(255, 102, 153, 180);

    if (x>=mouseX) {
      if(y>=mouseY){
        rect(0,0,mouseX,mouseY);
      }
      else{
        rect(0,mouseY,mouseX,height);
      }
    }
    else{
      if(y>=mouseY){
        rect(mouseX,0,width,mouseY);
      }
      else{
        rect(mouseX,mouseY,width,height);
      }
    }

    fill(255, 102, 153);
  }
  else{
    fill(255);
  }
  x+=dx;
  y+=dy;

  if(x<0){
    x=0;
    dx=-dx*0.5;
  }
  else if(x>width){
    x=width;
    dx=-dx*0.5;
  }

  if(y<0){
    y=0;
    dy=-dy*0.5;
  }
  else if(y>height){
    y=height;
    dy=-dy*0.5;
  }


  stroke(255);
  line(0,mouseY,width,mouseY);
  line(mouseX,0,mouseX,height);

  noStroke();
  ellipse(x,y,20,20);
}
