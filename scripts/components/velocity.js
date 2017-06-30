/*
* Velocity component
* Defines velocity (direction) of travel
*/

PACMAN.comps.Velocity = function Velocity ( params ){

  params = params || {};

  this.x = params.x || 0;
  this.y = params.y || 0;
  this.targetx = params.x || 0;
  this.targety = params.y || 0;
  this.keyMap = {
    up:[0,-1],
    right:[1,0],
    down:[0,1],
    left:[-1,0]
  };

  return this;
};

PACMAN.comps.Velocity.prototype = {

  constructor: PACMAN.comps.Velocity,
  name: 'velocity'

}
