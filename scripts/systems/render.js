/*
  Draws any entity with appearance and position components
*/

PACMAN.systems.render = function systemsRender ( entities ){

  //clear the current main canvas

  PACMAN.context.clearRect(0, 0, PACMAN.map.width(), PACMAN.map.height());
  PACMAN.scoreContext.clearRect(0,0,PACMAN.map.width(), 40);

  // get all entities with an appearance and position components

  for(var entityId in entities){

    var currentEntity = entities[entityId];
    if ( currentEntity.components.appearance && currentEntity.components.position){

      //draw a circle based on the entity information
      PACMAN.context.beginPath();
      PACMAN.context.arc(currentEntity.components.position.x,
                  currentEntity.components.position.y,
                  currentEntity.components.appearance.size,
                  0,
                  2*Math.PI);
      PACMAN.context.fillStyle = "rgba(" + currentEntity.components.appearance.colors.r
                                         + ","
                                         + currentEntity.components.appearance.colors.g
                                         + ","
                                         + currentEntity.components.appearance.colors.b
                                         + ", 1)";
      PACMAN.context.fill();

    }
  }

  // draw score
  PACMAN.scoreContext.font = "18px serif";
  PACMAN.scoreContext.fillStyle = "rgba(" + currentEntity.components.appearance.colors.r
                                     + ","
                                     + currentEntity.components.appearance.colors.g
                                     + ","
                                     + currentEntity.components.appearance.colors.b
                                     + ", 1)";
  PACMAN.scoreContext.fillText("Score " + PACMAN.score, 20, 26);

}
