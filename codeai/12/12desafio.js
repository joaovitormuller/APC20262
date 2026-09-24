var bee = createSprite(200, 200);
bee.setAnimation("bee");
bee.scale = 0.5;

function draw(){
  background("skyblue");
  bee.x = World.mouseX;
  bee.y = World.mouseY;
  drawSprites();
}