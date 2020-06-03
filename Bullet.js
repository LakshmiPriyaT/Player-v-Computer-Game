class Bullet {
    constructor(tx, ty, ts, tdir, tspeed) {
      this.x = tx;
      this.y = ty;
      this.s = ts;
      this.dir = tdir;
      this.speed = tspeed;
    }
  
    render(r,g,b) {
      fill(r,g,b);
      rect(this.x, this.y, this.s, this.s);
      switch (this.dir) {
        case 'u': this.y -= this.speed;	break;
          case 'd': this.y += this.speed;	break;
          case 'l': this.x += this.speed;	break;
          case 'r': this.x -= this.speed;	break;
      }
    }
  }