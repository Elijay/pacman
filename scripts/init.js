(function(){

//create entities
var entities = {},
systems = [
  PACMAN.systems.render
];

var entity1 = new PACMAN.Entity();
entity1.addComponent( new PACMAN.Components.Appearance({colors:{r:213,g:255,b:12}}));
entity1.addComponent( new PACMAN.Components.Position({x:50,y:50}));
entity1.listComponents();

entities[entity1.ID] = entity1;

PACMAN.entities = entities;

//activate systems to process all entities
for(var i = 0; i < systems.length; i++){
  systems[i](PACMAN.entities);
}

})();
