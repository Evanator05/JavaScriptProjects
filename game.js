var WIDTH=700, HEIGHT=600, pi=Math.PI;
var canvas, ctx, keystate;
var upKey=38, downKey=40;
var player, ai, ball;
var objects = []


score = {
  p1: 0,
  p2: 0
};

player = {
  x: null,
  y: null,
  width: 20,
  height: 100,

  update: function() {
    if (keystate[upKey]) this.y -= 7;
    if (keystate[downKey]) this.y += 7;

    //lock player in screen
    if (this.y < 0) {
      this.y = 0
    }

    if (this.y+this.height > HEIGHT) {
      this.y = HEIGHT-this.height
    }

  },

  draw: function() {
    drawBox(this.x,this.y,this.width,this.height,"blue");
  }
};

ai = {
  x: null,
  y: null,
  width: 20,
  height: 100,

  update: function() {},

  draw: function() {
    drawBox(this.x,this.y,this.width,this.height,"red");
  }
};

class Ball {
  constructor(x,y,side,speed,angle,colour) {
    this.x = x
    this.y = y
    this.side = side
    this.speed = speed
    this.angle = angle
    this.colour = colour
  }

  update() {
    if (this.x+this.side < 0) {
      score.p2 += 1
      init();
    }
    if (this.x > WIDTH) {
      score.p1 += 1
      init()
    }

    //move ball
    this.x += Math.cos(deg2Rad(this.angle))*this.speed;
    this.y += Math.sin(deg2Rad(this.angle))*this.speed;
  }

  draw() {
    drawBox(this.x,this.y,this.side,this.side,"green");
  }
};

function main() {
  canvas = document.createElement("canvas")
  canvas.width = WIDTH;
  canvas.height = HEIGHT;
  window.ctx = canvas.getContext("2d");
  document.body.appendChild(canvas);

  keystate = {};
  document.addEventListener("keydown", function(evt) {
    keystate[evt.keyCode] = true;
  });

  document.addEventListener("keyup", function(evt) {
    delete keystate[evt.keyCode];
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
  objects = [];

  var ballDir = 0

  while (ballDir == 0) {
    ballDir += Math.floor(Math.random()*3-1)*90
  }
  ballDir += Math.random()*90 - 45
  console.log(ballDir)
  var ball = new Ball((WIDTH - 5)/2,(HEIGHT - 5)/2,5,2,ballDir,"yellow")
  objects.push(ball)



  player.x = player.width;
  player.y = (HEIGHT - player.height)/2;

  ai.x = WIDTH - (player.width + ai.width);
  ai.y = (HEIGHT - player.height)/2;

  ball.speed = 2
  ball.angle = 90;


}

function update() {

  for (var object = 0; object < objects.length; object++) {
    let obj = objects[object];
    obj.update();
    console.log(obj.x)
  }

  objects[0].update();
  player.update();
  ai.update();

}

function draw() {
  //fill background
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, WIDTH, HEIGHT);

  for (let object; object < objects.length; object++) {
    let obj = objects[object]
    obj.draw()
  }

  player.draw();
  ai.draw();


  //set center line colour
  ctx.fillStyle = "white";

  //draw center line
  var w = 4;
  var x = (WIDTH-w)*0.5;
  var y = 0
  var step = HEIGHT/15;
  while (y < HEIGHT) {
    ctx.fillRect(x,y+step*0.25, w, step*0.5);
    y += step;
  }

  //draw score
  ctx.font = "30px Arial";

  //player 1
  ctx.fillText(score.p1, (WIDTH/2)-20 - ctx.measureText(String(score.p1)).width, 35);

  //player 2
  ctx.fillText(score.p2, (WIDTH/2)+20, 35);

  ctx.restore();
}

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
