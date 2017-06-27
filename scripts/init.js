(function(){

//create entities
//the systems array controls the order that the systems are applied
var systems = [
  PACMAN.systems.physics,
  PACMAN.systems.render
  ],
  mrpacman = new PACMAN.Entity();

  var drawTile = function(tile, atlas, x, y){

    PACMAN.bgContext.drawImage(
      atlas,
      (tile - 1) * PACMAN.map.tileSize,
      0,
      PACMAN.map.tileSize,
      PACMAN.map.tileSize,
      x,
      y,
      PACMAN.map.tileSize,
      PACMAN.map.tileSize
    );
  };

var renderMap = function(){

    var img = new Image();
    img.src = PACMAN.map.atlas;

    img.onload = function(){

      for (var col = 0; col < PACMAN.map.cols; col++){

        for (var row = 0; row < PACMAN.map.rows; row++){

          var tile = PACMAN.map.getTile(col, row);
          var x = col * PACMAN.map.tileSize;
          var y = row * PACMAN.map.tileSize;

          if (tile !== 0){

            drawTile(tile, img, x, y);

          } else{

            //drawing pill - needs to be centred
            x = x + PACMAN.map.tileSize / 2;
            y = y + PACMAN.map.tileSize / 2;

            drawTreat(x, y);

          }

        }

      }

    }

};

var drawTreat = function(x, y){

  var pill = new PACMAN.Assemblages.RenderedCircle();
  pill.components.position.x = x;
  pill.components.position.y = y;
  pill.components.appearance.size = 2;
  PACMAN.entities[pill.ID] = pill;

};

var getRandomNumber = function(min,max){
  var min = Math.ceil(min);
  var max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

var keyPressed = function(e){
  var keyD = e.keyCode;
  PACMAN.systems.userInput(keyD, PACMAN.entities);
};

//activate systems to process all entities
var runSystems = function(){
  for(var i = 0; i < systems.length; i++){
    systems[i](PACMAN.entities);
  }
};

//start setup initial state

//create pacman
mrpacman.addComponent( new PACMAN.comps.Appearance({colors:{r:213,g:255,b:12}, size:10}));
mrpacman.addComponent( new PACMAN.comps.Position({x:30,y:30}));
mrpacman.addComponent( new PACMAN.comps.UserControlled());
mrpacman.addComponent( new PACMAN.comps.Velocity());
mrpacman.listComponents();
PACMAN.entities[mrpacman.ID] = mrpacman;

//calculate start position and render everything
runSystems();

//end setup initial state

//user input listener
//updates velocity (direction vector) based on key the user presses
document.addEventListener("keydown", keyPressed, false);

//show grid for debugging positioning
createDebugGrid();

var numLoops = 0;
var fps = 30;
var timeStep = 1000 / fps;
var prevTime = 0;

//game loop
function gameLoop(timestamp) {

  //cap updates at desired fps
  if (timestamp < prevTime + timeStep){

     requestAnimationFrame(gameLoop);

  } else{

    //for testing, cap loops at 1000
      if (numLoops < 1000){

        runSystems();
        numLoops++;
        prevTime = timestamp;
        requestAnimationFrame(gameLoop);

      }

  }

}

//start the game
renderMap();
requestAnimationFrame(gameLoop);

})();
