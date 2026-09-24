// Create your variables here
var score = 0;
var vidas = 3;
var velocidade = 4;
var fimDeJogo = false;

// Create your sprites here

function draw() {
  // draw background
  fundoJogo();
  
  // update sprites
  
  drawSprites();
}

// Create your functions here

function fundoJogo() {
  background("lightblue");
  noStroke();
  fill("forestgreen");
  rect(0, 350, 400, 50);
  fill("white");
  ellipse(80, 70, 60, 40);
  ellipse(300, 110, 70, 45);
}

function fundoFimDeJogo() {
  background("darkred");
  noStroke();
  fill("black");
  rect(0, 350, 400, 50);
}