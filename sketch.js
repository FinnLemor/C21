var fixedRect, movingRect;
var obj1,obj2,obj3,obj4

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "pink";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = false;

  obj1 = createSprite(100,100,50,50)
  obj1.shapeColor = "indigo"
  obj2 = createSprite(200,100,50,50)
  obj2.shapeColor = "indigo"
  obj3 = createSprite(300,100,50,50)
  obj3.shapeColor = "indigo"
  obj4 = createSprite(400,100,50,50)
  obj4.shapeColor = "indigo"
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if (isTouching(movingRect,obj2)){
    movingRect.shapeColor = "skyblue";
    obj2.shapeColor = "skyblue";
  }
  else{
    movingRect.shapeColor = "purple";
    obj2.shapeColor = "purple";
  }

  drawSprites();
}

