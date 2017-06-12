/*
* Appearance Component
* Defines size and color
*/

PACMAN.comps.Appearance = function Appearance ( params ){

  params = params || {};

  this.colors = params.colors;
  if(!this.colors){
    this.colors = {
      r: 213,
      g: 255,
      b: 12
    };
  }

  this.size = params.size || 5;

  return this;

};

PACMAN.comps.Appearance.prototype = {

  constructor: PACMAN.comps.Appearance,
  name: 'appearance'

}
