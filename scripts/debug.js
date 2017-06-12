function createDebugGrid(){

  console.log('rendering grid');

      var gridcontext = document.getElementById("grid").getContext("2d");

      gridcontext.strokeStyle = 'grey';
      gridcontext.beginPath();

  for(var i = 20; i < 400; i += 20){
      gridcontext.moveTo(i,0);
      gridcontext.lineTo(i,400);
      gridcontext.moveTo(0,i);
      gridcontext.lineTo(400,i);
    }

      gridcontext.stroke();

}
