/*
* Edible component
* Flags entity as edible, optionally able to regenerate after eaten
*/

PACMAN.comps.Edible = function Edible ( params ){

  params = params || {};

  this.score = params.score || 10;
  this.regenerates = params.regenerates || false;

  return this;

};

PACMAN.comps.Edible.prototype = {

  constructor: PACMAN.comps.Edible,
  name: 'edible'

};
