var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var player1,player2;


var form, player, game,players;
var bg1,bg2;


function preload(){
   bg1=loadImage("bg1.png")
   bg2=loadImage("bg2.jpg")
   players1=loadImage("player1.png")
   players2=loadImage("player2.png")
}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  background(bg2);
  if(playerCount === 2){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState === 2){
    game.end();
  }
}
