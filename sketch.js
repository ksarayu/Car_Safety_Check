var car, wall, speed, weight;

function setup() {
  createCanvas(1600,400);
  speed = random(55, 90);
  weight = random(400, 1500);
  car = createSprite(50, 200, 50, 50);
  car.shapeColor = "white";
  wall = createSprite(1500, 200 ,60, height/2);
  wall.shapeColor = ("blue");
  car.velocityX = speed;
}

function draw() {
  background("black"); 
  
  if (wall.x - car.x < (car.width + wall.width)/2){
    car.velocityX = 0;
    car.collide(wall);
    var deformation = 0.5 * weight * speed * speed/22509;
    if (deformation > 180){
      car.shapeColor = "red";
    }
    if (80 < deformation < 180){
      car.shapeColor = "yellow";
    }
    if (deformation < 80){
      car.shapeColor = "green";
    }
  }
  
  drawSprites();
}