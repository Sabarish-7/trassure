class Game {
  constructor(){

  }

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      
      }
      form = new Form()
      form.display();
    

    player1 = createSprite(100,600);
    player1.addImage(players1);
    player1.scale=0.7
    player2 = createSprite(100,500);
    player2.addImage(players2);
    player2.scale=1.2 
    players = [player1, player2];
  }}

  play(){
    form.hide();
    image(bg1,0,0,1500,1000);
      
   Player.getPlayerInfo();
    if(allPlayers !== undefined){

      var index = 0;
      var x = 175 ;
      var y;
      for(var plr in allPlayers){
        index = index + 1 ;
        x = x + 200;
        x= displayWidth - allPlayers[plr].distance;
        players[index-1].x = x;

    }}
    drawSprites();

  
    if(keyIsDown(LEFT_ARROW) && player.index !== null){
      player.distance +=10
      player.update();
    }
    if(keyIsDown(RIGHT_ARROW) && player.index !== null){
      player.distance -=10
      player.update();
    }}}