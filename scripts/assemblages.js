/*

Assemblages act as templates for entities

*/

PACMAN.Assemblages = {

  RenderedCircle: function RenderedCircle(){

    var entity = new PACMAN.Entity();
    entity.addComponent( new PACMAN.comps.Appearance());
    entity.addComponent( new PACMAN.comps.Position());
    return entity;

  }

}
