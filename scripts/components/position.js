/*
* Position component
* Defines position as percentage of canvas width and height
*/

PACMAN.Components.Position = function Position ( params ){

  params = params || {};

  this.x = params.x || 0;
  this.y = params.y || 0;

  return this;
};

PACMAN.Components.Position.prototype = {

  constructor: PACMAN.Components.Position,
  name: 'position'

}
