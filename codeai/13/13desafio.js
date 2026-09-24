var alien = createSprite(50,200);
alien.setAnimation("alien");
alien.velocityX = 0;
alien.velocityY = -3;

function draw() {
  if (alien.y < 50) {
    alien.velocityY = 0;
    alien.velocityX = 3;
  }
  if (alien.x > 350) {
    alien.velocityX = 0;
    alien.velocityY = 3;
  }
  if (alien.y > 350) {
    alien.velocityY = 0;
    alien.velocityX = -3;
  }
  if (alien.x < 50) {
    alien.velocityX = 0;
    alien.velocityY = -3;
  }
  drawSprites();
}