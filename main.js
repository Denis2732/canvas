var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

ctx.beginPath();
ctx.moveTo(500, 500);
ctx.lineTo(50, 50);
ctx.lineTo(150, 100);
ctx.lineTo(200, 50);
ctx.lineTo(250, 100);
ctx.lineTo(350, 50);
ctx.lineTo(-100, 500);

ctx.stroke();

