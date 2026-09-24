var x = 200;
var y = 380;
var alvoX = 200;
var alvoY = 50;
var pontos = 0;

function draw() {
  background("navy");

  if (keyDown("left")) {
    x = x - 4;
  }

  if (keyDown("right")) {
    x = x + 4;
  }

  if (keyDown("up")) {
    y = y - 4;
  }

  if (keyDown("down")) {
    y = y + 4;
  }

  noStroke();
  fill("gold");
  ellipse(alvoX, alvoY, 25, 25);

  fill("cyan");
  ellipse(x, y, 30, 30);

  if (x > alvoX - 28 && x < alvoX + 28 && y > alvoY - 28 && y < alvoY + 28) {
    pontos = pontos + 1;
    alvoX = randomNumber(30, 370);
    alvoY = randomNumber(30, 370);
  }

  fill("white");
  textSize(18);
  text("Pontos: " + pontos, 15, 30);
}