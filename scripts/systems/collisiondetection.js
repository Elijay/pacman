/*

Detects and handles collisions between entities

*/

PACMAN.systems.collisiondetection = function systemsCollisionDetection ( entities ){

  // determine user controlled entity
  /*
  var userControlledSprite;

  for(var entityId in entities){

    var currentEntity = entities[entityId];

    if (currentEntity.components.usercontrolled){

      // determine the entity that is user controlled
      userControlledSprite = currentEntity;

    }

  }
  */

  //performance cheat
  var userControlledSprite = entities[0];


  // check for collision against all entities with appearance and position components

  for(var entityId in entities){

    var currentEntity = entities[entityId];

    if ( currentEntity.components.appearance && currentEntity.components.position){

      if (userControlledSprite.ID == currentEntity.ID) {
        // do nothing - can't collide with itself
      } else {

        // mid point comparison
        var minimumDistance = userControlledSprite.components.appearance.size + currentEntity.components.appearance.size;
        var deltax = Math.abs(userControlledSprite.components.position.x - currentEntity.components.position.x);
        var deltay = Math.abs(userControlledSprite.components.position.y - currentEntity.components.position.y);

        if ((minimumDistance > deltax) && (minimumDistance > deltay)){
            // collision detected

            if (currentEntity.components.edible){

              delete PACMAN.entities[currentEntity.ID];
              PACMAN.score += currentEntity.components.edible.score;

            }

        }

      }

    }

  }


}
