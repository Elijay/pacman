/*
* Enemy component
* Flags entity as enemy
*/

PACMAN.comps.Enemy = function Enemy ( params ){

  params = params || {};

  this.dangerous = params.dangerous || true;

  return this;

};

PACMAN.comps.Enemy.prototype = {

  constructor: PACMAN.comps.Enemy,
  name: 'enemy'

};
