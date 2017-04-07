(function(){

// main setup javascript goes here.

var canvasMain = document.getElementById("canvas")
canvasMsg = document.getElementById("msg"),
contextMain = canvasMain.getContext("2d"),
contextMsg = canvasMsg.getContext("2d"),
nextDirection = 37,
levelMap = [];

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
