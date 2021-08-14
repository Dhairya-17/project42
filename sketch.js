var space,iss1,spacebg;
var spacecraft1,spacecraft2,spacecraft3;
var iss;
var spacecraft;
var hasDocked=false;
function preload(){

spacebg=loadImage("images/spacebg.jpg")
space=loadImage("images/spacecraft1.png")
spacecraft1=loadImage("images/spacecraft2.png")
spacecraft2=loadImage("images/spacecraft3.png")
spacecraft3=loadImage("images/spacecraft4.png")
iss1=loadImage("images/iss.png")

}




function setup() {
  createCanvas(800,400)
  

  iss=createSprite(400, 200, 50, 50)
  iss.addImage(iss1)
  iss.scale=0.8

  spacecraft=createSprite(400,350,50,50)
  spacecraft.addImage(space)
  spacecraft.scale=0.2;
}

function draw() {
  background(spacebg);  

  if(!hasDocked){

    spacecraft.x=spacecraft.x+random(-1,1);

    if(keyDown("LEFT_ARROW")){

      spacecraft.addImage(spacecraft2)
      spacecraft.x=spacecraft.x-3;
    }
    else{
      spacecraft.addImage(space)
    }

//for right key
    if(keyDown("RIGHT_ARROW")){

      spacecraft.addImage(spacecraft3)
      spacecraft.x=spacecraft.x+3;
    }
    

    //for down key
    if(keyDown("DOWN_ARROW")){

      spacecraft.addImage(spacecraft1)
     
    }
    
    //for up key
    if(keyDown("UP_ARROW")){

      
      spacecraft.y=spacecraft.y-3;
    }
    
   
    
  }
  if(spacecraft.y<=(iss.y+70)&& spacecraft.x<=(iss.x-10)){

     hasDocked=true;
     fill("white")
     textSize(20);
     text("Docking Successful!",460,360)
   }
  drawSprites();

}