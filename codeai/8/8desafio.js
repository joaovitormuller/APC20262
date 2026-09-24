var bolaX = 200;
var bolaY = 100;
var velocidadeY = 0;
var gravidade = 0.4;

noStroke();

function draw() {
  
  background("midnightblue");


  fill("white");
  ellipse(randomNumber(0,400), randomNumber(0,250), 3, 3);
  ellipse(randomNumber(0,400), randomNumber(0,250), 2, 2);


  fill("darkslategray");
  rect(0, 330, 400, 70);

  velocidadeY = velocidadeY + gravidade;
  bolaY = bolaY + velocidadeY;

  if (bolaY > 310) {
    bolaY = 310;
    velocidadeY = -12;
  }

  fill("orange");
  ellipse(bolaX, bolaY, 40, 40);


  fill("black");
  ellipse(bolaX, 332, 50 - (310 - bolaY) / 8, 8);

  
  fill("yellow");
  textSize(24);
  text("Bola pulando", 20, 40);

  fill("lightgray");
  textSize(12);
  text("altura: " + round(310 - bolaY), 20, 62);
}