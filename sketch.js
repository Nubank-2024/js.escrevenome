//variaveis da bolinha
let xbolinha = 300;
let ybolinha = 200;
let diametro = 13;
let raio = diametro /2;
let colidiu = false;

//variaveis da raquete
let xRaquete = 5;
let yRaquete = 150;
let raqueteComprimento = 10;
let raqueteAltura = 90;


//velocidade da bolinha
let velocidadeXBolinha = 6;
let velocidadeYBolinha = 6;


//variaveis do oponente
let xRaqueteOponente = 585;
let yRaqueteOponente = 150;
let velocidadeYOponente;

//placar do jogo
let meuspontos = 0;
let pontosDoOponente = 0;

//chance de errar
let chanceDeErrar = 0;




function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  mostraBolinha();
  movimentaBolinha();
  MostraRaquete(xRaquete, yRaquete);
  MostraRaquete(xRaqueteOponente, yRaqueteOponente);
  verificaColisaoBorda();
  movimentaMinhaRaquete();
  movimentaRaqueteOponente();
  verificaColisaoRaquete(xRaquete, yRaquete);
  verificaColisaoRaquete(xRaqueteOponente, yRaqueteOponente)
  IncluirPlacar();
  MarcarPonto();
}


function mostraBolinha() {
  circle(xbolinha, ybolinha, diametro)
}


function movimentaBolinha(){
  xbolinha += velocidadeXBolinha;
  ybolinha += velocidadeYBolinha;
}
  

function verificaColisaoBorda(){
  
  
  if (xbolinha + raio > width || xbolinha - raio < 0) {
    velocidadeXBolinha  *= -1;
  }
  if (ybolinha + raio > width || ybolinha - raio < 0) {
    velocidadeYBolinha  *= -1;
  }
}  
  
function MostraRaquete(x,y) {
    rect(x, y, raqueteComprimento, raqueteAltura);
}
  
  
function movimentaMinhaRaquete() {
    if(keyIsDown(UP_ARROW)) {
      yRaquete -= 10;
    }
    if(keyIsDown(DOWN_ARROW)) {
      yRaquete += 10;
    }
}

function verificaColisaoRaquete() {
    if(xbolinha - raio < xRaquete + raqueteComprimento && ybolinha - raio < yRaquete + raqueteAltura && ybolinha + raio > yRaquete) {
      velocidadeXBolinha *= -1;
    }
}
function verificaColisaoRaquete(x,y) {
  colidiu = collideRectCircle(x, y, raqueteComprimento, raqueteAltura, xbolinha, ybolinha, raio);
  if (colidiu) {
    velocidadeXBolinha *= -1;
  }
}

function movimentaRaqueteOponente() {
  if(keyIsDown(87)){
    yRaqueteOponente -= 10;
  }
  if(keyIsDown(83)){
    yRaqueteOponente += 10;
  }
}

function IncluirPlacar() {
  stroke(255)
  textAlign(CENTER);
  textSize(16);
  fill(color(255,140, 0));
  rect(150, 10, 40, 20);
  fill(255);
  text(meuspontos, 170, 26);
  fill(color(255,140, 0));
  rect(450, 10, 40, 20);
  fill(255);
  text(pontosDoOponente, 470, 26);
}

function MarcarPonto() {
  if(xbolinha > 590) {
    meuspontos += 1;
  }
  if(ybolinha < 10) {
    pontosDoOponente += 1;
  }
}


