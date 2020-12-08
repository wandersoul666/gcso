var car,wall,speed,weight


function setup() {

  createCanvas(800,400);
  car = createSprite (50,200,20,40);
  wall = createSprite (500,200,30,80);
car.shapeColor = "blue";
wall.shapeColor = "blue";
speed = random (50,250)
weight = random(20,70)
car.velocityX = speed
}

function draw() {
  background(255,255,255);  
if (wall.x-car.x < wall.width/2+car.width/2)
{
  car.velocityX = 0
  a=weight*speed*speed/22590
  if (a<100)
  {
    car.shapeColor ="red"
  }
  if (a<100&&a>180)
  {
    car.shapeColor ="yellow"
  }
  if (a>180)
  {
    car.shapeColor ="green"
  }
}

  drawSprites();
}  
