var WIDTH=1400, HEIGHT=700, pi=Math.PI;
var canvas, ctx, keystate;
var upKey=38, downKey=40;

var ai;
var objects = []

score = {
  p1: 0,
  p2: 0
};

function main() {
  canvas = document.createElement("canvas")
  canvas.width = WIDTH;
  canvas.height = HEIGHT;
  window.ctx = canvas.getContext("2d");
  document.body.appendChild(canvas);

  keystate = {};
  keystate[38] = false
  keystate[40] = false
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
}

function init() {
  let ball = new Ball((WIDTH+10)/2,(HEIGHT - 10)/2,10,2,0,"yellow")
  let player = new Player(20, (HEIGHT - 100)/2, 20, 100, "green")


  //set ball starting angle
  var ballDir = 0
  while (ballDir == 0) {
    ballDir += Math.floor(Math.random()*3)-1
  }

  ball.angle = ballDir

  //add player ball and ai to the list of objects
  objects = [ball, player]

}

function update() {
  //update all objects
  for (i = 0; i < objects.length; i++) {
    objects[i].update()
  }
}

function draw() {
  //fill background
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, WIDTH, HEIGHT);




  //set center line colour
  ctx.fillStyle = "white";

  //draw center line
  var w = 4;
  var x = (WIDTH-w)*0.5;
  var y = 0
  var step = HEIGHT/16;
  while (y < HEIGHT) {
    ctx.fillRect(x,y+step*0.25, w, step*0.5);
    y += step;
  }

  //set score font
  ctx.font = "30px Arial";

  //player 1 score
  ctx.fillText(score.p1, (WIDTH/2)-20 - ctx.measureText(String(score.p1)).width, 35);

  //player 2 score
  ctx.fillText(score.p2, (WIDTH/2)+20, 35);

  //draw objects
  for (i = 0; i < objects.length; i++) {
    objects[i].draw()
  }
};

function getDistanceBetween(x1, y1, x2, y2) {
  return Math.sqrt((Math.pow((x2-x1),2),Math.pow((y2-y1),2)))
};

function deg2Rad(degrees) {
  return degrees * (pi/180)
};

function drawBox(xPos,yPos,width,height,colour) {
  ctx.save()
  ctx.fillStyle = colour
  ctx.fillRect(xPos,yPos,width, height)
  ctx.restore()
};

main();
