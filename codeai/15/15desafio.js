var plane = createSprite(50, 350);
plane.setAnimation("plane");
var rock = createSprite(150, 350);
rock.setAnimation("rock");
var rockdown = createSprite(350, 100);
rockdown.setAnimation("rock_down");

plane.velocityY = -9;
plane.velocityX = 3;

function draw() {
  background("lightblue");
  
  plane.velocityY = plane.velocityY + 0.25;
  
  drawSprites();
}