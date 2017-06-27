/*

User controlled defines the entity as able to be
controlled by user input

Currently includes the inputmap for user controlled
Would want to move this eventually - what happens if I get a power up that
reverses the user input controls, for example?

*/

PACMAN.comps.UserControlled = function UserControlled( params ){

  params = params || {};

  this.uc = true;
  this.keyMap = {
    up: 38,
    right: 39,
    down: 40,
    left: 37
  };
  this.lastKey = 0;
  return this;

};

PACMAN.comps.UserControlled.prototype = {

  constructor: PACMAN.comps.UserControlled,
  name: 'usercontrolled'

}
