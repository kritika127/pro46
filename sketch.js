var table
var player1
var computer

function preload(){
table=loadImage("assets/table.png");
player1=loadImage("assets/right.png");
compt=loadImage("assets/left.png") ; 
ball1=loadImage("assets/ball.png");
}
function setup() {
  createCanvas(windowWidth,windowHeight);

//  table1=createSprite(width,height);
  //table1.addImage(table);
  //table1.scale=2.5
  player=createSprite(988,395);
  player.addImage(player1);
  player.scale=3
  player.debug=true;
  player.setCollider("circle",-20,-20,10)
  computer=createSprite(394,394);
  computer.addImage(compt);
  computer.scale=3
  computer.debug=true
  computer.setCollider("circle",-10,-20,20)
  ball=createSprite(419,336);
  ball.addImage(ball1);
  ball.scale=0.05
  ball.velocityX=8
  ball.y=random(260,500)
}
function draw() {
  background(table);
  if(ball.y>260&&ball.y<500)
  {
  computer.y=ball.y;
  }

  if(keyDown("UP_ARROW")&&player.y>260){
    player.y-=5
  }
  if(keyDown("DOWN_ARROW")&&player.y<500){
    player.y+=5
  }
  if(keyDown("LEFT_ARROW")){
    ball.y+=5
  }
  if(keyDown("RIGHT_ARROW")){
   ball.y-=5
  }
  if(ball.isTouching(player)){
    ball.velocityX=-1*ball.velocityX
  }
  if(ball.isTouching(computer)){
    ball.velocityX=-1*ball.velocityX
  }
  fill("black")
  text(mouseX+","+mouseY,mouseX,mouseY)  
  drawSprites();
}