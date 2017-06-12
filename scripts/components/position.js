/*
* Position component
* Defines position as x and y on canvas
*/

PACMAN.comps.Position = function Position ( params ){

  params = params || {};

  this.x = params.x || 0;
  this.y = params.y || 0;

  return this;
};

PACMAN.comps.Position.prototype = {

  constructor: PACMAN.comps.Position,
  name: 'position'

}
