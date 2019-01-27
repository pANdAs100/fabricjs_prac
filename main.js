// Practicing canvas.js into learning about fabricjs
// pANdAs100
// 1.26.2019

//Basic canvasjs from w3schools
var c = document.getElementById('canvas1');
var c2 = document.getElementById('canvas2');
var context = c.getContext('2d');
//for a line we use moveTo(x,y) and linTo(x,y) then .stroke();
context.beginPath();
//for circles ^v
context.arc(100, 75, 50, 0, 2 * Math.PI);
context.stroke();
//just messing it up
context.arc(80, 19, 65, 4, 12 * Math.PI);
context.stroke();

//Cool!: https://davidwalsh.name/canvas-demos
//obviously the canvas is well... a canvas. Let's see what fabricjs can do.
//the fabric.Canvas object can be dragged by default
var canvas2 = new fabric.Canvas(c2);
//background doesn't show until canvas objects are clicked
canvas2.setBackgroundImage('https://barkefellers.com/wp-content/uploads/2018/07/barkefellers-doggie-day-care-5.jpg');

//Fabricjs
var circle = new fabric.Circle({
  radius:30, fill: 'green', left: 100, top: 50
});

canvas2.add(circle);

var rect = new fabric.Rect({
  left:100,
  top:100,
  fill: 'red',
  width: 20,
  height:20,
  angle: 45
});
canvas2.add(rect);
//if we set the rectangle position using code at this point the drag n drop breaks
// rect.set('fill','#0115ee');
// rect.set({ left: 20, top: 50 });

var triangle = new fabric.Triangle({
  width: 20, height: 30, fill: '#3f3f3f', left: 50, top: 50
});
canvas2.add(circle, triangle);

var canvas3 = new fabric.Canvas('c');
var imgElement = document.getElementById('handsome-pug');
var imgInstance = new fabric.Image(imgElement, {
  width: 700,
  height: 800,
  left: 100,
  top: 100,
  angle: 30,
  opacity: 0.85
});
canvas3.add(imgInstance);

//instead of having to use the image hidden in the html
//we can use just the URL with fabric.Image.fromURL()
var pugImgLoc = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRPEPPwFcZgrAmev6ZB9sXNWX7x9hcbGiaiNhomH2ewYJeSzi2Mg";
fabric.Image.fromURL(pugImgLoc, function(oImg) {
  canvas3.add(oImg);
})

//path example
var path = new fabric.Path('M 0 0 L 300 100 L 200 300 z');

path.set({fill: 'red', stroke: 'green', opacity: 0.5 });
canvas2.add(path);

//need the second canvas to be bigger
c2.style.width = '250px';
c2.style.height = '200px';

//Yes this is just beautiful UI at this point /s
//This will be built upon next and probably made into something a bit nicer