/*

changes direction of entity based on user input

*/

PACMAN.systems.physics = function systemsPhysics(entities){

  var IsOutsideCanvas = function(entity){

    var newx = currentEntity.components.position.x + currentEntity.components.velocity.x * 20;
    var newy = currentEntity.components.position.y + currentEntity.components.velocity.y * 20;

    if(newx < 0 || newx > 400 || newy < 0 || newy > 400){
      return true;
    } else {

      return false;

    }

  };

  var canMoveInDirection = function(entity){

    return !IsOutsideCanvas(entity);
    // include collision detection here

  };

  var moveTowardsPoint = function(entity){

    if ((entity.components.position.x == entity.components.velocity.targetx) && (entity.components.position.y == entity.components.velocity.targety)){
      return true;
    } else{

      //update position
      entity.components.position.x += Math.sign(entity.components.velocity.targetx - entity.components.position.x) * 2;
      entity.components.position.y += Math.sign(entity.components.velocity.targety - entity.components.position.y) * 2;

    //overshot the target
    //if ((entity.components.velocity.x * (entity.components.velocity.targetx - entity.components.position.x) < 0) || (entity.components.velocity.y * entity.components.velocity.targety - entity.components.position.y < 0)){

    //entity.components.position.x = entity.components.velocity.targetx;
    //entity.components.position.y = entity.components.velocity.targety;
    //  return true;
    //}

      return false;
    }
  };

  for(var entityId in entities){

    var currentEntity = entities[entityId];
    if ( currentEntity.components.position && currentEntity.components.velocity && currentEntity.components.appearance){

      var hasTarget = function(){
        if((currentEntity.components.velocity.targetx == 0) && (currentEntity.components.velocity.targety == 0)){

          return false;

        } else{

          return true;

        };

      };

      // if no current target and collision detection allows, set new target
      if (!hasTarget() && canMoveInDirection(currentEntity.components.velocity)){
        // this should be general 'getNextTile' function
        currentEntity.components.velocity.targetx = currentEntity.components.position.x + currentEntity.components.velocity.x * 20;
        currentEntity.components.velocity.targety = currentEntity.components.position.y + currentEntity.components.velocity.y * 20;
      }

      if (hasTarget()){
          if(moveTowardsPoint(currentEntity)){

            currentEntity.components.velocity.targetx = 0;
            currentEntity.components.velocity.targety = 0;
          };

      }

    }

  }



}
