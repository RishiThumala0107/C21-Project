var bullet, wall;
var speed, weight;
var thickness;

function setup() {
  createCanvas(1600,400);
  thickness=random(22,83)
  speed=random(55,90)
  weight=random(400,1500)
  bullet=createSprite(50,200,40,20)
  wall=createSprite(1200,200,thickness,height/2)
  wall.shapeColor=color(80,80,80)
  bullet.velocityX = speed
  speed=random(223,321)
  weight=random(30,52)
}

function draw() {
  background(255,255,255);  
  if(hasCollided(bullet, wall))
  {
    bullet.velocityX=0;
    var deformation=0.5 * weight * speed * speed/22509
    if(deformation>180)
    {
      bullet.shapeColor="white"
    }

    if(deformation<180 && deformation>100)
    {
      bullet.shapeColor=color(230,230,0)
    }

    if(deformation<100)
    {
      bullet.shapeColor=color(0,255,0)
    }0
  }
  drawSprites();
}

function hasCollided(bullet1, wall1)
{
bulletRightEdge=bullet1.x + bullet1.width;
wallLeftEdge=wall1.x;
if (bulletRightEdge>=wallLeftEdge)
{
  return true
}
return false;
}