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

main();
