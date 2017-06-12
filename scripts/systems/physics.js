/*

changes direction of entity based on user input

*/

PACMAN.systems.physics = function systemsPhysics(entities){

  var isOutsideCanvas = function(newx, newy, size){

    if (newx < size || newx > 400 - size || newy < size || newy > 400 - size){
      return true;
    } else {
      return false;
    }

  };

  for(var entityId in entities){

    var currentEntity = entities[entityId];
    if ( currentEntity.components.position && currentEntity.components.velocity && currentEntity.components.appearance){


      //check if this is allowed based on physical constraints
      //update position based on velocity

      var newx = currentEntity.components.position.x + currentEntity.components.velocity.x * 2;
      var newy = currentEntity.components.position.y + currentEntity.components.velocity.y * 2;
      var sizeOffset = currentEntity.components.appearance.size;

      if (!isOutsideCanvas(newx, newy, sizeOffset)){
        currentEntity.components.position.x = newx;
        currentEntity.components.position.y = newy;
      }
    }

  }



}
