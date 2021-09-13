class Ball {

  constructor(x,y,side,speed,angle,colour) {
    this.x = x
    this.y = y
    this.side = side
    this.speed = speed
    this.angle = angle
    this.colour = colour
  };



  update() {

    //score points
    if (this.x+this.side < 0) {
      score.p2 += 1
      init();
    }
    if (this.x > WIDTH) {
      score.p1 += 1
      init()
    }

    //lock angle between 0 and 360
    if (this.angle > 360) {
      this.angle -= 360
    }
    if (this.angle < 0) {
      this.angle += 360
    }

    //bounce off of roof and floor
    if (this.y < 0) {
      this.angle += 90
    }

    if (this.y + this.side > HEIGHT) {
      this.angle -= 90
    }

    //left paddle collisions
    if (checkCollisions(this, objects[1])) {
      this.angle = (getAngleTo(this.x,this.y,objects[1].x,objects[1].y+(objects[1].height/2)) - 180) + 90
    };
    //move ball
    this.x += Math.cos(deg2Rad(this.angle-90))*this.speed;
    this.y += Math.sin(deg2Rad(this.angle-90))*this.speed;
  };

  draw() {
    drawBox(this.x,this.y,this.side,this.side,this.colour)
  };



};

class Player {

  constructor(x,y,width,height,colour, speed = 7) {
    this.x = x
    this.y = y
    this.width = width
    this.height = height
    this.colour = colour
    this.speed = speed
  };

  update() {
    //get the players button direction
    var yDir = ((Number(keystate[downKey])) - Number((keystate[upKey])));

    //move player
    this.y += this.speed*yDir;

    //lock player in screen
    if (this.y < 0) {
      this.y = 0;
    }

    if (this.y+this.height > HEIGHT) {
      this.y = HEIGHT-this.height;
    }
  };

  draw() {
    drawBox(this.x,this.y,this.width,this.height,this.colour);
  };

};
