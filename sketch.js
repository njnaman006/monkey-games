//https://njnaman006.github.io/trex/
var PLAY = 1;
var END = 0;
var gameState = PLAY;
var monkey , monkey_running
var ground
var banana ,bananaImage
var obstacle, obstacleImage
var obstaclegroup,bananagroup
var survivaltime=0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  
monkey=createSprite(50,200,10,10);
  monkey.addAnimation("monkey",monkey_running);
  monkey.scale=0.1;
  
  ground=createSprite(230,230,1000,5);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  
  bananagroup=new Group();
  obstaclegroup=new Group();
}

function draw() {
  background("white");
if(gameState===PLAY){
  textSize(30);
  fill("black");
  survivaltime=Math.ceil(frameCount/30);
  text("Survival Time:"+survivaltime,100,50);
  food();
  spawnobstacle();
  monkey.collide(ground);
  if(ground.x<10){
    ground.x=ground.width/2
  }
  if(keyDown("space")&&monkey.y>=140){
    monkey.velocityY=-8;
  }
  monkey.velocityY=monkey.velocityY+0.5;
}else if (gameState===END){
 ground.velocityX = 0;
 monkey.velocityY = 0; 
 obstaclegroup.setVelocityXEach(0);  bananagroup.setVelocityXEach(0);  obstaclegroup.setLifetimeEach(-1);  bananagroup.setLifetimeEach(-1);
 bananagroup.destroyEach();
 obstaclegroup.destroyEach();
}
  if(obstaclegroup.isTouching(monkey)){
    gameState=END;
}
  
  drawSprites();  
}
function food(){
  if(frameCount%120===0){
  banana=createSprite(Math.random,140,0,20,20);
  banana.x=Math.round(random(160,220));
  banana.addImage("banana",bananaImage);
  banana.scale=0.1;
  banana.velocityX=-4;
  banana.lifetime=200;
  bananagroup.add(banana);
  }
}
function spawnobstacle(){
  if(frameCount%170===0){
  obstacle=createSprite(Math.random,209,20,20);
  obstacle.x=Math.round(random(200,300));
  obstacle.addImage("a",obstacleImage);
  obstacle.scale=0.1;
  obstacle.velocityX=-4;
  obstacle.lifetime=200;
  obstaclegroup.add(obstacle);
  }
}
 


