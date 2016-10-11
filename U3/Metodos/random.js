
function imagenaleatoria() {

image = new Array(3);
image[1]="html5.png";
image[2]="joomla.png";
image[3]="wp.png";

var i = Math.floor(Math.random() *3 + 1);

return image[i];
}
