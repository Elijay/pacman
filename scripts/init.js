(function(){

//create entities
//the systems array controls the order that the systems are applied
var systems = [
  PACMAN.systems.physics,
  PACMAN.systems.render
  ],
  mrpacman = new PACMAN.Entity();

var getRandomNumber = function(min,max){
  var min = Math.ceil(min);
  var max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

var keyPressed = function(e){
  var keyD = e.keyCode;
  PACMAN.systems.userInput(keyD, PACMAN.entities);
};

/*
var addPills = function(){
  //create 20 random pills
  for(var i = 0; i < 20; i++){
    var pill = new PACMAN.Assemblages.RenderedCircle();

    //coordinates are two random numbers between 10 and 390 inclusive
    //for now ignore the fact that there could be two on one space

    pill.components.position.x = getRandomNumber(0, 19) * 20 + 10;
    pill.components.position.y = getRandomNumber(0, 19) * 20 + 10;
    pill.listComponents();
    PACMAN.entities[pill.ID] = pill;

  }
};
*/

//activate systems to process all entities
var runSystems = function(){
  for(var i = 0; i < systems.length; i++){
    systems[i](PACMAN.entities);
  }
};

//start setup initial state

//create pacman
mrpacman.addComponent( new PACMAN.comps.Appearance({colors:{r:213,g:255,b:12}, size:10}));
mrpacman.addComponent( new PACMAN.comps.Position({x:10,y:10}));
mrpacman.addComponent( new PACMAN.comps.UserControlled());
mrpacman.addComponent( new PACMAN.comps.Velocity());
mrpacman.listComponents();
PACMAN.entities[mrpacman.ID] = mrpacman;

//add pills at random locations
//addPills();

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
requestAnimationFrame(gameLoop);

})();
