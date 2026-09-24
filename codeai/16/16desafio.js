var goldCoin = createSprite(51,50);
goldCoin.setAnimation("gold_coin");
goldCoin.velocityX = 2;
goldCoin.velocityY = 2;
goldCoin.debug = true;

var silverCoin = createSprite(350,350);
silverCoin.setAnimation("silver_coin");
silverCoin.velocityX = -2;
silverCoin.velocityY = -2;
silverCoin.debug = true;

function draw() {
  background("darkgreen");
  goldCoin.bounce(silverCoin);
  drawSprites();
}