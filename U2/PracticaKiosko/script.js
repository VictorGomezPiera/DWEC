function generaSurtido(){

  // productos=["<img src='coca.png'WIDTH=150 HEIGHT=155>"]
    var productos = ["Caramelos","Tabaco","Periodico","Pipas","Chicles","Gominolas","Refrescos"];

  mostrarSurtido(productos);
}



function mostrarSurtido(productos){

  for (var i=0; i<productos.length; i++){
  document.write('<p>' + productos[i] +" = "+ consultaPrecio(i) +'</p>');
}
  }

function consultaPrecio(num){
  var a = num;
  var precio = ["3€","5€","9€","5€","1€","0.50€","3€"];
  return precio[a];

}
