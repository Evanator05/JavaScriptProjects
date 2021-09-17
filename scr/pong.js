var WIDTH=1400, HEIGHT=700, pi=Math.PI;
var canvas, ctx, keystate;
var upKey=38, downKey=40;

//an array of every game object
var objects = [];

//changes the game speed
var SPEED_FACTOR = 1;

//was used to pick single and multiplayer, its unused right now
var mode = 1;

//ball spawning timer
var timer = 60;

//an object that holds both player scores
score = {
  p1: 0,
  p2: 0
};

function main() {
  //create canvas
  canvas = document.createElement("canvas");
  canvas.width = WIDTH;
  canvas.height = HEIGHT;
  window.ctx = canvas.getContext("2d");
  document.body.appendChild(canvas);

  keystate = {};
  keystate[38] = false;
  keystate[40] = false;
  keystate[83] = false;
  keystate[87] = false;
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
  //instance objects
  let ball = new Ball((WIDTH+10)/2,(HEIGHT - 10)/2,10,4,0,"white");
  let leftPaddle = new Paddle(20, (HEIGHT - 100)/2, 20, 100, "blue");
  let player1 = new Player(leftPaddle, 7, 87, 83);
  let rightPaddle = new Paddle(WIDTH-40, (HEIGHT-100)/2, 20, 100, "purple");
  let player2
  if (mode == 1) {
    player2 = new Player(rightPaddle, 7);
  } else if (mode == 2) {
    player2 = new Ai(rightPaddle, 7);
  };



  //set ball starting angle
  var ballDir = 0;
  while (ballDir == 0) {
    ballDir += (Math.floor(Math.random()*3)-1)*90;
  }
  ballDir += (Math.random()*90)-45;
  ball.angle = ballDir;

  //add all objects to the array
  objects = [ball, player2, player1, leftPaddle, rightPaddle];

}

function update() {
  if (keystate[70]) {
    timer -= 1
    if (timer <=0) {

      //set ball starting angle
      var ballDir = 0;
      while (ballDir == 0) {
        ballDir += (Math.floor(Math.random()*3)-1)*90;
      }
      ballDir += (Math.random()*90)-45;

      let ball = new Ball((WIDTH+10)/2,(HEIGHT - 10)/2,10,4,-90,"white");

      ball.angle = ballDir;

      objects.push(ball)
      timer= 60
    };

  };
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
function rad2Deg(radians) {
  return radians * (180/pi)
};

function getAngleTo(x1,y1,x2,y2) {
  angle = Math.atan((y1-y2)/(x1-x2)) - (deg2Rad(180)*(x1>x2));
  return rad2Deg(angle);
};

function drawBox(xPos,yPos,width,height,colour) {
  ctx.save();
  ctx.fillStyle = colour;
  ctx.fillRect(xPos,yPos,width, height);
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

function checkCollisions(object1, object2) {
  return ( object1.x + object1.side > object2.x && object1.x < object2.x + object2.width && object1.y + object1.side > object2.y && object1.y < object2.y + object2.height );
};

main();
