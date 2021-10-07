class Vector2D {
  constructor(x,y) {
    this.x = x
    this.y = y
  }
  getX() {
    return this.x
  };
  getY() {
    return this.y
  };
  getMagnatude() {
    return Math.sqrt(this.x*this.x+this.y*this.y)
  };
  normalize() {
    var magnatude = getMagnatude()
    this.x = this.x/magnatude
    this.y = this.y/magnatude
  };
};

class Snake {
  constructor(x,y) {
    this.x = x
    this.y = y
    this.position = new Vector2(this.x,this.y)
    this.segments = [this.position]
  };

  update() {
    
  };

  draw() {

  };
};
