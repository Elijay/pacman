/*
* Entity is a collection of components
* Each entity has a unique ID
*/

PACMAN.Entity = function Entity(){

  this.ID = PACMAN.Entity.prototype._count;
  this.components = {};

  PACMAN.Entity.prototype._count++;

  return this;

};

PACMAN.Entity.prototype = {

  constructor : PACMAN.Entity,
  _count : 0,
  addComponent : function( component ){
    this.components[component.name] = component;
  },
  removeComponent : function( componentName ){
    delete this.components[componentName];
    return this;
  },
  listComponents : function(){
    console.log(JSON.stringify(this, null, 4));
    return this;

  }

};
