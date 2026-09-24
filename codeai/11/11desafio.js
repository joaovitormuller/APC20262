var x = 200;
var y = 200;

function draw() {
  background("black");

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
  fill("cyan");
  ellipse(x, y, 40, 40);
}