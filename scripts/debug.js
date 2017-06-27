function createDebugGrid(){

    var gridcontext = document.getElementById("grid").getContext("2d");

    gridcontext.strokeStyle = 'grey';
    gridcontext.beginPath();

    for(var i = 20; i < PACMAN.map.width(); i += 20){
      gridcontext.moveTo(i,0);
      gridcontext.lineTo(i, PACMAN.map.height());
    }

    for (var j = 20; j < PACMAN.map.height(); j += 20){
      gridcontext.moveTo(0,j);
      gridcontext.lineTo(PACMAN.map.width(), j);
    }

    gridcontext.stroke();

}
