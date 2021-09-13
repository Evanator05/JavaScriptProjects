var WIDTH=1400, HEIGHT=700, pi=Math.PI;
var canvas, ctx, keystate;
var upKey=38, downKey=40;

var objects = []

const SPEED_FACTOR = 2
var mode = 2
score = {
  p1: 0,
  p2: 0
};

function main() {
  //create canvas
  canvas = document.createElement("canvas")
  canvas.width = WIDTH;
  canvas.height = HEIGHT;
  window.ctx = canvas.getContext("2d");
  document.body.appendChild(canvas);

  keystate = {};
  keystate[38] = false
  keystate[40] = false
  keystate[87] = false
  keystate[83] = false

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
    window.requestAnimationFrame(loop,canvas)
  };

  window.requestAnimationFrame(loop,canvas);
}

function init() {
  let ball = new Ball((WIDTH+10)/2,(HEIGHT - 10)/2,10,4,0,"yellow");
  let player = new Player(20, (HEIGHT - 100)/2, 20, 100, "green", 7);
  let ai = new Ai(WIDTH-40, (HEIGHT-100)/2, 20, 100, "purple", 7)

  //set ball starting angle
  var ballDir = 0;
  while (ballDir == 0) {
    ballDir += (Math.floor(Math.random()*3)-1)*90;
  }
  ballDir += (Math.random()*90)-45;
  ball.angle = ballDir;

  //add player ball and ai to the list of objects
  objects = [ball, player, ai];

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
  return Math.sqrt((Math.pow((x2-x1),2),Math.pow((y2-y1),2)));
};

function deg2Rad(degrees) {
  return degrees * (pi/180)
};
function rad2Deg(radiens) {
  return radiens * (180/pi)
};

function getAngleTo(x1,y1,x2,y2) {
  var a = x1-x2;
  var b = y1-y2;

  angle = Math.atan(b/a);

  if (x1 > x2) {
    angle -= deg2Rad(180);
  };

  return rad2Deg(angle);
};

function drawBox(xPos,yPos,width,height,colour) {
  ctx.save();
  ctx.fillStyle = colour;
  ctx.fillRect(xPos,yPos,width, height);
  ctx.restore();
};

function checkCollisions(object1, object2) {
  return ( object1.x + object1.side > object2.x && object1.x < object2.x + object2.width && object1.y + object1.side > object2.y && object1.y < object2.y + object2.height );
};

main();
