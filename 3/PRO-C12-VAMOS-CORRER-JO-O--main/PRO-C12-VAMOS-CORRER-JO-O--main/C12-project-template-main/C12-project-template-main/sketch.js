var path,boy, leftBoundary,rightBoundary;
var pathImg,boyImg;
var i;

function preload(){
  pathImg = loadImage (path.png)
  boyImg = loadAnimation ("Runner-1.png, Runner-2.png")
 
}

function setup(){
  
  createCanvas(400,400);
path = createSprite (200,200,20,20)
path.addImage("path.png", pathImg)
path.velocityY=-10
path.scale=1.2;

boy = createSprite(200,200,20,20)
boy.addAnimation("Runner-1.png, Runner-2.png", boyImg).
boy.scale=0.08;
  
// create left Boundary
leftBoundary=createSprite(0,0,100,800);
leftBoundary.visibility = false

//create right Boundary
rightBoundary=createSprite(410,0,100,800);
rightBoundary.visibility = false
}

function draw() {
  background(0);
  path.velocityY = 4;
  
  boy.x=mouse.x;
  
  edges= createEdgeSprites();
  boy.collide(edges[3]);
  boy.collide(leftBoundary)
  boy.collide(rightBoundary)
  
  //code to reset the background
  if(path.y > 400 ){
    path.y = height/2;
  }
  
  drawSprites();
}
