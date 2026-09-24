var coin = createSprite(200,10);
coin.setAnimation("coin_gold_1");
setCoin();

var bunny = createSprite(200,350);
bunny.setAnimation("bunny1_ready_1");

var score = 0;

function draw() {
  if (score < 10) {
    simpleBackground();
  } else {
    sillyBackground();
  }

  if(keyDown("left")){
    bunny.x = bunny.x - 2;
  }

  if(keyDown("right")){
    bunny.x = bunny.x + 2;
  }

  if(coin.y > 400){
    setCoin();
  }

  if(coin.isTouching(bunny)){
    score = score + 1;
    setCoin();
  }

  textSize(20);
  fill("black");
  text("Score: " + score, 10, 10, 100, 100);
  drawSprites();
}

function setCoin(){
  coin.x = randomNumber(20, 380);
  coin.y = 10;
  coin.velocityY = 3;
}

function simpleBackground(){
  background("white");
}

function sillyBackground(){
  background("hotpink");
  noStroke();
  fill("yellow");
  ellipse(randomNumber(0,400), randomNumber(0,400), 30, 30);
  fill("cyan");
  ellipse(randomNumber(0,400), randomNumber(0,400), 20, 20);
  fill("lime");
  ellipse(randomNumber(0,400), randomNumber(0,400), 25, 25);
}