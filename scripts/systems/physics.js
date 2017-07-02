/*

changes direction of entity based on user input

*/

PACMAN.systems.physics = function systemsPhysics(entities){

  //var handlePillCollision = function(x, y){
  //  var pillTile = PACMAN.map.getLogicTileAtPosition(x, y);

  //  if (pillTile == 1){

      //PACMAN.map.updateLogicTile(x, y, 0);
      // remove pill entity
      // increase score
  //  }

  //};

  var IsOutsideCanvas = function(entity, newx, newy){

    if(newx < 0 || newx > PACMAN.map.width() || newy < 0 || newy > PACMAN.map.height()){

      return true;

    } else {

      return false;

    }

  };

  // returns true if the next tile in the direction specified is not blocking
  var canMoveInDirection = function(entity, directionx, directiony){

    // potential new coords
    var newx = entity.components.position.x + directionx * PACMAN.map.tileSize;
    var newy = entity.components.position.y + directiony * PACMAN.map.tileSize;

    if (!IsOutsideCanvas(entity, newx, newy)){

      // get tile at position
      var tile = PACMAN.map.getTileAtPosition(newx, newy);

      return (tile == 0);

    } else {

      return false;

    }

  };

  // moves entity one step towards its current target
  // returns true when the entity reaches the target
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

  // translates user input into velocity vector, based on keymap defined on both components
  var getVelocityFromInput = function(entity, input){
    var map = entity.components.usercontrolled.keyMap;

    for(var propertyName in map){
      if (map.hasOwnProperty(propertyName)){

        if (input == map[propertyName]){

          //user input is defined in usercontrolled components keyMap
          var velocityMap = entity.components.velocity.keyMap;

          if (velocityMap.hasOwnProperty(propertyName)){

          //direction is defined in velocity components keyMap
          return entity.components.velocity.keyMap[propertyName];

          } else{

            return [0,0];

          }

        }

      }

    }
  };

  //sets x and y as the new target for a given entity
  var setNewTarget = function(entity, x, y){

    entity.components.velocity.targetx = entity.components.position.x + x * PACMAN.map.tileSize;
    entity.components.velocity.targety = entity.components.position.y + y * PACMAN.map.tileSize;


  }

  // return true if the entity has a target set
  var hasTarget = function(entity){
    if((entity.components.velocity.targetx == 0) && (entity.components.velocity.targety == 0)){

      return false;

    } else{

      return true;

    };

  };

  for(var entityId in entities){

    var currentEntity = entities[entityId];
    if ( currentEntity.components.position && currentEntity.components.velocity && currentEntity.components.appearance){

      // if no current target and collision detection allows, set new target

      // first check if can move based on user input (can change direction)
      // next check if can continue moving based on current velocity (can continue in current direction)

      if (!hasTarget(currentEntity) && currentEntity.components.usercontrolled){

        var entityDirectionx;
        var entityDirectiony;

        var userInput = currentEntity.components.usercontrolled.lastKey;

        // use lookup to translate userinput into requested direction
        if (userInput !== 0){

          entityDirectionx = getVelocityFromInput(currentEntity, userInput)[0];
          entityDirectiony = getVelocityFromInput(currentEntity, userInput)[1];

        }

        if (canMoveInDirection(currentEntity, entityDirectionx, entityDirectiony)){

          setNewTarget(currentEntity, entityDirectionx, entityDirectiony);

          // changed direction so we must update the velocity
          currentEntity.components.velocity.x = entityDirectionx;
          currentEntity.components.velocity.y = entityDirectiony;

        }

      }

      // check if can continue in current direction
      if (!hasTarget(currentEntity) && canMoveInDirection(currentEntity, currentEntity.components.velocity.x, currentEntity.components.velocity.y)){

        setNewTarget(currentEntity, currentEntity.components.velocity.x, currentEntity.components.velocity.y);

      } else if(!hasTarget(currentEntity) && IsOutsideCanvas(currentEntity,currentEntity.components.position.x + currentEntity.components.velocity.x * PACMAN.map.tileSize, currentEntity.components.position.y + currentEntity.components.velocity.y * PACMAN.map.tileSize)){

        var newx = currentEntity.components.position.x + currentEntity.components.velocity.x * PACMAN.map.tileSize;
        var newy = currentEntity.components.position.y + currentEntity.components.velocity.y * PACMAN.map.tileSize;

        //set new position
        if (newx < 0){

          currentEntity.components.position.x = PACMAN.map.width() + PACMAN.map.tileSize + newx;

        } else if(newx > PACMAN.map.width()){

          currentEntity.components.position.x = newx - PACMAN.map.width() - PACMAN.map.tileSize;

        }

        if (newy < 0){

          currentEntity.components.position.y = newy + PACMAN.map.height() + PACMAN.map.tileSize;

        } else if (newy > PACMAN.map.height()){

          currentEntity.components.position.y = newy - PACMAN.map.height() - PACMAN.map.tileSize;

        }


        //set target
        setNewTarget(currentEntity, currentEntity.components.velocity.x, currentEntity.components.velocity.y);

      }

      if (hasTarget(currentEntity)){

          if(moveTowardsPoint(currentEntity)){

            //have reached the target point
            currentEntity.components.velocity.targetx = 0;
            currentEntity.components.velocity.targety = 0;

            // check if corresponding tile has a collectible
            //handlePillCollision(currentEntity.components.position.x, currentEntity.components.position.y);

          };

      }

    }

  }

}
