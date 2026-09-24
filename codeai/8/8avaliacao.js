var salt = createSprite(200, 200);
salt.setAnimation("salt");
salt.rotation = 180;
salt.velocityY = -8;

function draw() {
  background("skyblue");

  salt.velocityY = salt.velocityY + 0.5;

  if (salt.y > 200) {
    salt.y = 200;
    salt.velocityY = -8;
  }

  drawSprites();
}