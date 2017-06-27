/*

changes direction of entity based on user input

*/

PACMAN.systems.userInput = function systemsUserInput(input, entities){

  for(var entityId in entities){

    var currentEntity = entities[entityId];
    if ( currentEntity.components.usercontrolled){

      currentEntity.components.usercontrolled.lastKey = input;

      //get the key input mapping
      /*
      var map = currentEntity.components.usercontrolled.keyMap;

      for(var propertyName in map){
        if (map.hasOwnProperty(propertyName)){

          if (input == map[propertyName]){
              //key pressed corresponds to a user input for this component
              //console.log(propertyName);

              //make a change to the velocity
              if (propertyName == "up"){
                currentEntity.components.velocity.x = 0;
                currentEntity.components.velocity.y = -1;
              } else if (propertyName == "down"){
                currentEntity.components.velocity.x = 0;
                currentEntity.components.velocity.y = 1;
              } else if (propertyName == "left"){
                currentEntity.components.velocity.x = -1;
                currentEntity.components.velocity.y = 0;
              } else if (propertyName == "right"){
                currentEntity.components.velocity.x = 1;
                currentEntity.components.velocity.y = 0;
              }

              //console.log('x velocity is' + currentEntity.components.velocity.x);
              //console.log('y velocity is' + currentEntity.components.velocity.y);
          }

        }

      }
*/
    }

  }

}
