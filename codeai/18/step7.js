// Create your variables here
var score = 0;
var vidas = 3;
var velocidade = 4;
var fimDeJogo = false;

// Create your sprites here
var jogador = createSprite(80, 320);
jogador.setAnimation("cuteanimals_puma2_1");
jogador.scale = 0.15;

var obstaculo = createSprite(400, 325);
obstaculo.setAnimation("pieceBlack_border07_1");
obstaculo.scale = 0.6;
resetObstaculo();

function draw() {
  // draw background
  if (vidas > 0) {
    fundoJogo();
  } else {
    fundoFimDeJogo();
  }
  
  // update sprites
  
  drawSprites();
  
  placarScore();
  placarVidas();
}

// Create your functions here

function resetObstaculo() {
  obstaculo.x = 420;
  obstaculo.y = 325;
  obstaculo.velocityX = -velocidade;
}

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

function placarScore() {
  fill("black");
  textSize(20);
  text("Pontos: " + score, 15, 30);
}

function placarVidas() {
  fill("black");
  textSize(20);
  text("Vidas: " + vidas, 290, 30);
}