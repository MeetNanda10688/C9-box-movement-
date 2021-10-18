var box ;

function setup(){
  createCanvas(600,200)

  box = createSprite (300,100,30,30);
  box.shapeColor = "red";
}

function draw(){
  background("skyblue")

  if(keyIsDown(RIGHT_ARROW)){
    box.x = box.x + 5; //box.position.x = box.position.y + 5;
  }

  if(keyIsDown(LEFT_ARROW)) {
    box.x = box.x -5 ;
  }

  if(keyIsDown(UP_ARROW)){
    box.y = box.y -5 ; 
  }

  if(keyIsDown(DOWN_ARROW)){
    box.y = box.y + 5 ; 
  }
  drawSprites();
}