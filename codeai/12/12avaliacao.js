var backdrop = createSprite(200,200);
backdrop.setAnimation("sky");
var creature = createSprite(200,250);
creature.setAnimation("creature");
creature.scale = 0.2;

function draw() {
  if (mouseDown("leftButton")) {
    creature.rotation = randomNumber(-5,5);
  }
  drawSprites();

  if (!mouseDown("leftButton")) {
    fill("black");
    textSize(40);
    text("Press the mouse to shake the creature.", 20, 50, 360, 100);
  }
}
