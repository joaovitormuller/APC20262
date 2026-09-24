var x = 0;

function draw() {
  background("skyblue");
  fill("red");
  ellipse(x, 200, 60, 60);
  x = x + 3;
  
  if (x > 400) {
    x = 0;
  }
}