(function(){

// main setup javascript goes here.

var canvasMain = document.getElementById("canvas")
canvasMsg = document.getElementById("msg"),
contextMain = canvasMain.getContext("2d"),
contextMsg = canvasMsg.getContext("2d");

// create a new entity with appearance and position components
var entity1 = new PACMAN.Entity();
entity1.addComponent( new PACMAN.Components.Appearance({colors:{r:20,g:10,b:10}}));
entity1.listComponents();

})();

/* pre ECS code
nextDirection = 37,

function setNextDirection(e){
  let direction = e.keyCode;

  if (direction == 37 ||
      direction == 38 ||
      direction == 39 ||
      direction == 40){

        nextDirection = direction;
        var heading = document.getElementById("heading");
        heading.innerHTML = "current direction: " + direction;
      }
}

//draws the player
function drawPlayer(){

}

//draws the ghosts
//mock ghosts as circles to start with
function drawGhost(){

}

//circles can be used for food and powerups
function drawCircle(){

}

function drawRectangle(x,y,width,height){
  contextMain.fillRect(x,y,width,height);
}

document.addEventListener("keydown", setNextDirection, false);
contextMain.fillStyle = "yellow";

drawRectangle(10,10,5,5);
})();
*/
