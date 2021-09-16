class Ball {
  constructor(x,y,side,speed,angle,colour, trail = []) {
    this.x = x;
    this.y = y;
    this.side = side;
    this.speed = speed;
    this.angle = angle;
    this.colour = colour;
    this.trail = trail;
  };

  update() {
    //score points
    if (this.x+this.side < 0) {
      score.p2 += 1;
      init();
    };
    if (this.x > WIDTH) {
      score.p1 += 1;
      init();
    };
    //lock angle between 0 and 360
    if (this.angle > 360) {
      this.angle -= 360;
    };
    if (this.angle < 0) {
      this.angle += 360;
    };
    //bounce off of roof and floor
    if (this.y < 0) {
      this.angle += 90;
    };
    if (this.y + this.side > HEIGHT) {
      this.angle -= 90;
    };
    //left paddle collisions
    if (checkCollisions(this, objects[3])) {
      this.angle = (getAngleTo(this.x+(this.side/2),this.y+(this.side/2),objects[3].x,objects[3].y+(objects[3].height/2)) - 180) + 90;
      this.speed += 0.2;
    };
    //right paddle collisions
    if (checkCollisions(this, objects[4])) {
      this.angle = (getAngleTo(this.x+(this.side/2),this.y+(this.side/2),objects[4].x+objects[4].width,objects[4].y+(objects[4].height/2)) - 180) + 90;
      this.speed += 0.2;
    };
    //move ball
    this.x += Math.cos(deg2Rad(this.angle-90))*this.speed*SPEED_FACTOR;
    this.y += Math.sin(deg2Rad(this.angle-90))*this.speed*SPEED_FACTOR;
    //add new segments to the balls trail
    this.trail.push([this.x,this.y]);
    //if there are more than speed times 7 segments delete old segments
    if (this.trail.length > this.speed * 7) {
      this.trail.shift();
    };
  };

  draw() {
    //draw trail
    for (var i = 0; i < this.trail.length; i++) {
      ctx.save();
      ctx.globalAlpha = i/this.trail.length;
      drawCircle(this.trail[i][0], this.trail[i][1],(this.side*(i/(this.trail.length-1)))/2,this.colour);
      ctx.restore();
    };
    //draw ball
    drawCircle(this.x,this.y,this.side,"yellow");
  };
};

class Paddle {
  constructor(x,y,width,height,colour) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.colour = colour;
  };

  update() {
    //lock paddle in screen
    if (this.y < 0) {
      this.y = 0;
    };

    if (this.y+this.height > HEIGHT) {
      this.y = HEIGHT-this.height;
    };
  };

  draw() {
    drawBox(this.x,this.y,this.width,this.height,this.colour);
  };
};

class Player {
  constructor(paddle, speed = 7) {
    this.paddle = paddle;
    this.speed = speed;
  };

  update() {
    //get the players button direction
    var yDir = ((Number(keystate[downKey])) - Number((keystate[upKey])));
    //move player
    this.paddle.y += this.speed*yDir*SPEED_FACTOR;
  };

  draw() {};

};

class Ai {
  constructor(paddle, speed = 3) {
    this.paddle = paddle;
    this.speed = speed;
  };

  update() {
    var trackingPoint = objects[0].y+(objects[0].side/2);



    //if the ball is smaller than the paddles movement range lock the paddle right onto the balls y position
    if (trackingPoint > this.paddle.y+(this.paddle.height/2) - this.speed && trackingPoint < this.paddle.y+(this.paddle.height/2) + this.speed) {
      this.paddle.y = trackingPoint+(this.paddle.height/2);
    };
  };

  draw() {};

};
