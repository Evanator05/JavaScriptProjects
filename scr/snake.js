let WIDTH=600, HEIGHT=500, TILESIZE=20;
let MAPWIDTH=WIDTH/TILESIZE, MAPHEIGHT=HEIGHT/TILESIZE
var canvas, ctx, keystate;
var keys = [38,40,37,39]
var objects = [];



function main() {
  //create canvas
  canvas = document.createElement("canvas");
  canvas.width = WIDTH;
  canvas.height = HEIGHT;
  window.ctx = canvas.getContext("2d");
  document.body.appendChild(canvas);

  keystate = {};
  for (let i = 0; i < keys.length; i++) {
    keystate[keys[i]] = false;
    console.log(keystate[keys[i]])
  }

  document.addEventListener("keydown", function(evt) {
    keystate[evt.keyCode] = true;
  });

  document.addEventListener("keyup", function(evt) {
    keystate[evt.keyCode] = false;
  });

  init();

  var loop = function() {
    update();
    draw();
    window.requestAnimationFrame(loop,canvas);
  };

  window.requestAnimationFrame(loop,canvas);
};

function init() {

};

function update() {
  for (let i = 0; i < objects.length; i++) {
    objects[i].update()
  };
};

function draw() {
  for (let i = 0; i < objects.length; i++) {
    objects[i].draw()
  };
};

function getDistanceBetween(x1, y1, x2, y2) {
  return Math.sqrt((Math.pow((x2-x1),2),Math.pow((y2-y1),2)));
};

function deg2Rad(degrees) {
  return degrees * (pi/180);
};
function rad2Deg(radians) {
  return radians * (180/pi);
};

function getAngleTo(x1,y1,x2,y2) {
  angle = Math.atan((y1-y2)/(x1-x2)) - (deg2Rad(180)*(x1>x2));
  return rad2Deg(angle);
};

function drawBox(xPos,yPos,width,height,colour) {
  ctx.save();
  ctx.fillStyle = colour;
  ctx.fillRect(xPos,yPos,width,height);
  ctx.restore();
};

function drawCircle(x,y,radius,colour) {
  ctx.save();
  ctx.fillStyle = colour;
  ctx.beginPath();
  ctx.arc(x+(radius)/2, y+(radius)/2, 6, 0, 2*pi);
  ctx.fill();
  ctx.restore();
};

main();
