function createDebugGrid(){

  console.log('rendering grid');

      var gridcontext = document.getElementById("grid").getContext("2d");

      gridcontext.strokeStyle = 'grey';
      gridcontext.beginPath();

  //for(var i = 20; i < 420; i += 20){
    //  gridcontext.moveTo(i,0);
    //  gridcontext.lineTo(i,420);
    //  gridcontext.moveTo(0,i);
    //  gridcontext.lineTo(420,i);
    //}

    for(var i = 20; i < 420; i += 20){
      gridcontext.moveTo(i,0);
      gridcontext.lineTo(i,540);
    }
    for (var j = 20; j < 540; j += 20){
      gridcontext.moveTo(0,j);
      gridcontext.lineTo(420,j);
    }

      gridcontext.stroke();

}
