/*
* Appearance Component
* Defines size and color
*/

PACMAN.Components.Appearance = function Appearance ( params ){

  params = params || {};

  this.colors = params.colors;
  if(!this.colors){
    this.colors = {
      r: 0,
      g: 100,
      b: 150
    };
  }

  this.size = params.size || 20;

  return this;

};

PACMAN.Components.Appearance.prototype = {

  constructor: PACMAN.Components.Appearance,
  name: 'appearance'

}

//pac.Components.Appearance.prototype.name = 'appearance';
