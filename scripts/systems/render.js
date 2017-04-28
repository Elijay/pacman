/*
  Draws any entity with appearance and position components
*/

PACMAN.systems.render = function systemsRender ( entities ){

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

}
