class MovableObject extends DrawableObject {
  speed;
  otherDirection = false;
  speedY = 0;
  acceleration = 0.0005;
  energy = 100;
  lastHit = 0;
  isRising = false;

  isColliding(mo) {
    if (this instanceof Character) {
      return (
        this.x + 50 + this.width - 80 > mo.x &&
        this.y + 120 + this.height - 170 > mo.y &&
        this.x + 50 < mo.x &&
        this.y + 120 < mo.y + mo.height
      );
    } else {
      return (
        this.x + this.width > mo.x &&
        this.y + this.height > mo.y &&
        this.x < mo.x &&
        this.y < mo.y + mo.height
      );
    }
  }

  hit() {
    this.energy -= 5;
    if (this.energy < 0) {
      this.energy = 0;
    } else {
      this.lastHit = new Date().getTime();
    }
  }
  isHurt() {
    let timepassed = new Date().getTime() - this.lastHit;
    timepassed = timepassed / 1000;
    return timepassed < 1;
  }

  isDead() {
    return this.energy == 0;
  }

  applyGravity() {
    setInterval(() => {
      if (this.isAboveGround()) {
        this.y += this.speedY;
        this.speedY += this.acceleration;
      }
    }, 1000 / 25);
  }

  riseAndSink() {
    setInterval(() => {
      if (this.isBelowSurface() && this.isAboveGround()) {
        if (this.isRising) {
          this.y -= this.speedY;
        } else {
          this.y += this.speedY;
        }
      } else if (this.reachedBottom()) {
        this.isRising = true;
        this.y -= this.speedY;
      } else if (this.reachedTop()) {
        this.isRising = false;
        this.y += this.speedY;
      }
    }, 1000 / 60);
  }

  isAboveGround() {
    if (this instanceof Character) {
      return this.y < 275;
    } else {
      return this.y <= 400;
    }
  }
  reachedTop() {
    return this.y <= 50;
  }
  reachedBottom() {
    return this.y >= 400;
  }
  isBelowSurface() {
    return this.y > 0;
  }

  rise() {
    this.y -= this.speedY;
    this.speedY += this.acceleration;
  }

  moveRight() {
    this.x += this.speed;
  }
  moveLeft() {
    this.x -= this.speed;
  }
  moveDown() {
    this.y += this.speed;
  }
  moveUp() {
    this.y -= this.speed;
  }

  playAnimation(images) {
    let i = this.currentImage % images.length;
    let path = images[i];
    this.img = this.imageCache[path];
    this.currentImage++;
  }
}
