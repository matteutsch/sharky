class MovableObject extends DrawableObject {
  speed;
  otherDirection = false;
  speedY = 0;
  acceleration = 0.0005;
  energy = 100;
  lastHit = 0;
  isRising = false;
  movingRight = false;

  isColliding(mo) {
    if (this instanceof Character) {
      if (mo instanceof Endboss) {
        return (
          this.x + 50 + this.width > mo.x + 100 &&
          this.y + 120 + this.height > mo.y + 200 + mo.height - 280 &&
          this.x + 50 < mo.x + 20 + mo.width - 60 &&
          this.y + 120 < mo.y + 200 + mo.height - 280
        );
      } else {
        return (
          this.x + 50 + this.width - 80 > mo.x &&
          this.y + 120 + this.height - 170 > mo.y &&
          this.x + 50 < mo.x &&
          this.y + 120 < mo.y + mo.height
        );
      }
    } else {
      if (mo instanceof Endboss) {
        return (
          this.x + this.width > mo.x + 20 &&
          this.y + this.height > mo.y + 200 &&
          this.x < mo.x + 20 &&
          this.y < mo.y + 200 + mo.height - 280
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
    return timepassed < 0.5;
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

  backAndForth() {
    if (this.isWithinLevel()) {
      if (!this.movingRight) {
        this.moveLeft();
      } else {
        this.moveRight();
      }
    } else if (this.reachedLeftLevelEnd()) {
      this.movingRight = true;
      this.moveRight();
    } else if (this.reachedRightLevelEnd()) {
      this.movingRight = false;
      this.moveLeft();
    }
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

  isWithinLevel() {
    return this.x >= -400 && this.x <= 1700;
  }
  reachedLeftLevelEnd() {
    this.otherDirection = true;
    return this.x <= -400;
  }
  reachedRightLevelEnd() {
    this.otherDirection = false;
    return this.x >= 1700;
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
