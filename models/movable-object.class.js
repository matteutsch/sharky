class MovableObject extends DrawableObject {
  speed;
  otherDirection = false;
  speedY = 0;
  acceleration = 0.0005;
  energy = 100;
  lastHit = 0;
  isRising = false;
  movingRight = false;
  transformed = false;

  img_lose = "img/6.Botones/Tittles/Game Over/Recurso 10.png";

  /**
   * Checks if the current object is colliding with the given movable object.
   * @param {MovableObject} mo - The movable object to check collision with.
   * @returns {boolean} - True if collision occurs, false otherwise.
   */
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

  /**
   * Plays the animation by updating the current image of the object.
   * @param {string[]} images - The array of image paths for the animation.
   */
  playAnimation(images) {
    let i = this.currentImage % images.length;
    let path = images[i];
    this.img = this.imageCache[path];
    this.currentImage++;
  }

  /**
   * Applies gravity to the object by adjusting its vertical position over time.
   */
  applyGravity() {
    setInterval(() => {
      if (this.isAboveGround()) {
        this.y += this.speedY;
        this.speedY += this.acceleration;
      }
    }, 1000 / 25);
  }

  /**
   * Makes the object rise and sink within the specified range.
   */
  riseAndSink() {
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
  }

  /**
   * Makes the object move back and forth within the specified level range.
   */
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

  /**
   * Animates the death of the object using the provided image array.
   * @param {string[]} img - The array of image paths for the death animation.
   */
  animateDeath(img) {
    let i = 0;
    let dead = setInterval(() => {
      if (this.isDead()) {
        if (this instanceof Character && i == 0) {
          this.characterIsDead();
        }
        this.loadImage(img[i]);
        i++;
        if (i >= img.length) {
          this.moveUpInterval();
          clearInterval(dead);
        }
      }
    }, 1000 / img.length);
  }

  /**
   * Performs actions when the character is dead.
   */
  characterIsDead() {
    character_dying.play();
    setTimeout(() => {
      boss_fight.pause();
      background_music.pause();
      lose_sound.play();
      this.world.endboss.hadFirstContact = false;
      clearAllIntervals();
      showEndScreen(this.img_lose);
      setLevel();
    }, 2000);
  }

  /**
   * Moves the object upward for a specific interval.
   */
  moveUpInterval() {
    let i = 0;
    let move = setInterval(() => {
      this.moveUp();
      i++;
      if (i > 500) {
        clearInterval(move);
      }
    }, 1000 / 10);
  }

  /**
   * Animates the swimming motion of enemies using the provided image array.
   * @param {string[]} img - The array of image paths for the swimming animation.
   */
  animateSwimEnemies(img) {
    let swim = setInterval(() => {
      if (!this.isDead()) {
        this.playAnimation(img);
      } else {
        clearInterval(swim);
      }
    }, 1000 / 11);
  }

  /**
   * Animates the swimming motion of the pufferfish using the provided image arrays.
   * @param {string[]} img - The array of image paths for the swimming animation.
   * @param {string[]} imgTrans - The array of image paths for the transformed animation.
   */
  animateSwimPuffer(img, imgTrans) {
    let swim = setInterval(() => {
      if (!this.isDead()) {
        if (!this.isHurt() && !this.transformed) {
          this.playAnimation(img);
        } else if (this.transformed) {
          this.playAnimation(imgTrans);
        }
      } else {
        clearInterval(swim);
      }
    }, 1000 / 11);
  }

  /**
   * Animates the transformation of the object using the provided image array.
   * @param {string[]} img - The array of image paths for the transformation animation.
   */
  animateTransformation(img) {
    let i = 0;
    let transform = setInterval(() => {
      if (!this.isDead()) {
        if (this.isHurt() && i < img.length) {
          this.loadImage(img[i]);
          i++;
          if (i == img.length) {
            this.transformed = true;
          }
        }
      } else {
        clearInterval(transform);
      }
    }, 20);
  }

  /**
   * Animates the movement of the pufferfish object.
   */
  animateMovementPuffer() {
    let movement = setInterval(() => {
      if (!this.isDead()) {
        this.backAndForth();
      } else {
        clearInterval(movement);
      }
    }, 1000 / 60);
  }

  /**
   * Animates the movement of the jellyfish object.
   */
  animateMovementJelly() {
    let movement = setInterval(() => {
      if (!this.isDead()) {
        this.riseAndSink();
      } else {
        clearInterval(movement);
      }
    }, 1000 / 60);
  }

  /**
   * Performs actions when the object is hit.
   */
  hit() {
    this.lastHit = new Date().getTime();
    if (this instanceof Character && !this.isDead()) {
      character_hurt.play();
      this.energy -= 5;
      if (this.energy < 0) {
        this.energy = 0;
      }
    }
    updateLastInteractionTime();
  }

  /**
   * Checks if the object is currently in the hurt state.
   * @returns {boolean} - True if the object is hurt, false otherwise.
   */
  isHurt() {
    let timepassed = new Date().getTime() - this.lastHit;
    timepassed = timepassed / 1000;
    return timepassed < 0.5;
  }

  /**
   * Checks if the object is dead.
   * @returns {boolean} - True if the object is dead, false otherwise.
   */
  isDead() {
    return this.energy <= 0;
  }

  /**
   * Speeds up the object.
   */
  speedUp() {
    setInterval(() => {
      if (this.transformed) {
        this.speed = 3 + Math.random() * 0.5 + Math.random() * 0.5;
      }
    }, 100);
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
}
