var carWeight, carSpeed, carDeformation;
var car;
var wall;

function setup() {
  createCanvas(1600,400);
  
  carWeight = random(400,1500);
  carSpeed = random(30,95);
  carDeformation = 0.5 * carWeight * carSpeed * carSpeed / 22500;
  
  car = createSprite(200,200,25,25);
  car.shapeColor = rgb(255,255,255);

  wall = createSprite(1600,200,60,400);
  wall.shapeColor = rgb(80,80,80);
}

function draw() {
  background(0,0,0);

  if(carDeformation < 100) {
    car.velocityX = 10;
  }
  
  if(carDeformation > 100 && carDeformation < 180) {
    car.velocityX = 14;
  }

  if(carDeformation > 180) {
    car.velocityX = 18;
  }
  
  if(carDeformation < 100 && wall.x - car.x < wall.width/2 + car.width/2) {
    car.shapeColor = rgb(0,255,0);
    car.velocityX = 0;
  }

  if(carDeformation > 100 && carDeformation < 180 && wall.x - car.x < wall.width/2 + car.width/2) {
    car.shapeColor = rgb(230,230,0);
    car.velocityX = 0;
  }

  if(carDeformation > 180 && wall.x - car.x < wall.width/2 + car.width/2) {
    car.shapeColor = rgb(255,0,0);
    car.velocityX = 0;
  }

  console.log(carWeight);
  console.log(carSpeed);
  console.log(carDeformation);
  
  drawSprites();
}