var trex, trex_Running;
var ground, groundImage, invisibleGround;
var clouds, cloudsGroup, cloudsImage;

function preload() {
  trex_Running = loadAnimation("trex1.png","trex2.png","trex3.png");
  groundImage = loadImage("ground2.png");
  cloudsImage = loadImage("cloud.png");
}

function setup() {
  createCanvas(400,400);

  trex = createSprite(100,180,100,100);
  trex.scale = 0.5;
  trex.addAnimation("running",trex_Running);

  ground = createSprite(200,200,400,400);
  ground.addImage(groundImage);
  ground.velocityX = -4;
  ground.x = ground.width/2;
  invisibleGround = createSprite(200,210,400,10);
  invisibleGround.visible = false;
}

function draw() {
  background("white");

  if(keyDown("space")&&(trex.y>100)){
    trex.velocityY = -10;
  }

  trex.velocityY = trex.velocityY + 0.8;

  if(ground.x<0){
    ground.x = ground.width/2;
  }

  trex.collide(invisibleGround);

  cloudsSpawn();
  drawSprites();
}

function cloudsSpawn() {
  if(frameCount % 60 == 0){
    clouds = createSprite(600,100,100,100);
    clouds.scale = 0.5;
    clouds.addImage(cloudsImage);
    clouds.y = Math.round(random(10,60));
    clouds.velocityX = -3;

    clouds.depth = trex.depth;
    trex.depth = trex.depth + 1;
  }
}