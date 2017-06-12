/*
* Velocity component
* Defines velocity (direction) of travel
*/

PACMAN.comps.Velocity = function Velocity ( params ){

  params = params || {};

  this.x = params.x || 0;
  this.y = params.y || 0;

  return this;
};

PACMAN.comps.Velocity.prototype = {

  constructor: PACMAN.comps.Velocity,
  name: 'velocity'

}
