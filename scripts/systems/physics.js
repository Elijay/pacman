/*

changes direction of entity based on user input

*/

PACMAN.systems.physics = function systemsPhysics(entities){


  var IsOutsideCanvas = function(entity, newx, newy){

    if(newx < 0 || newx > 400 || newy < 0 || newy > 400){

      return true;

    } else {

      return false;

    }

  };


  var canMoveInDirection = function(entity, directionx, directiony){

    // potential new coords
    var newx = entity.components.position.x + directionx * 20;
    var newy = entity.components.position.y + directiony * 20;

      // get tile at position
      var tile = PACMAN.map.getTileAtPosition(newx, newy);

      return (tile == 0);

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

  var getVelocityFromInput = function(entity, input){
    var map = entity.components.usercontrolled.keyMap;

    for(var propertyName in map){
      if (map.hasOwnProperty(propertyName)){

        if (input == map[propertyName]){
            //key pressed corresponds to a user input for this component

            //make a change to the velocity
            if (propertyName == "up"){
              return [0,-1];
              //currentEntity.components.velocity.x = 0;
              //currentEntity.components.velocity.y = -1;
            } else if (propertyName == "down"){
              //currentEntity.components.velocity.x = 0;
              //currentEntity.components.velocity.y = 1;
              return [0,1];
            } else if (propertyName == "left"){
              //currentEntity.components.velocity.x = -1;
              //currentEntity.components.velocity.y = 0;
              return [-1,0];
            } else if (propertyName == "right"){
              //currentEntity.components.velocity.x = 1;
              //currentEntity.components.velocity.y = 0;
              return [1,0];
            }

        }

      }

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

      // first check if can move based on user input (can change direction)
      // next check if can continue moving based on current velocity (can continue in current direction)

      if (!hasTarget() && currentEntity.components.usercontrolled){

        var entityDirectionx;
        var entityDirectiony;

        var userInput = currentEntity.components.usercontrolled.lastKey;

        if (userInput !== 0){
          entityDirectionx = getVelocityFromInput(currentEntity, userInput)[0];
          entityDirectiony = getVelocityFromInput(currentEntity, userInput)[1];
        }

        if (canMoveInDirection(currentEntity, entityDirectionx, entityDirectiony)){

          currentEntity.components.velocity.targetx = currentEntity.components.position.x + entityDirectionx * 20;
          currentEntity.components.velocity.targety = currentEntity.components.position.y + entityDirectiony * 20;

          currentEntity.components.velocity.x = entityDirectionx;
          currentEntity.components.velocity.y = entityDirectiony;
        }

      }

      if (!hasTarget() && canMoveInDirection(currentEntity, currentEntity.components.velocity.x, currentEntity.components.velocity.y)){

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
