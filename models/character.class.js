class Character extends MovableObject {
  x = 10;
  y = 150;
  height = 250;
  width = 220;
  speed = 5;
  isAnimated = true;

  IMAGES_IDLE = [
    "img/1.Sharkie/1.IDLE/1.png",
    "img/1.Sharkie/1.IDLE/2.png",
    "img/1.Sharkie/1.IDLE/3.png",
    "img/1.Sharkie/1.IDLE/4.png",
    "img/1.Sharkie/1.IDLE/5.png",
    "img/1.Sharkie/1.IDLE/6.png",
    "img/1.Sharkie/1.IDLE/7.png",
    "img/1.Sharkie/1.IDLE/8.png",
    "img/1.Sharkie/1.IDLE/9.png",
    "img/1.Sharkie/1.IDLE/10.png",
    "img/1.Sharkie/1.IDLE/11.png",
    "img/1.Sharkie/1.IDLE/12.png",
    "img/1.Sharkie/1.IDLE/13.png",
    "img/1.Sharkie/1.IDLE/14.png",
    "img/1.Sharkie/1.IDLE/15.png",
    "img/1.Sharkie/1.IDLE/16.png",
    "img/1.Sharkie/1.IDLE/17.png",
    "img/1.Sharkie/1.IDLE/18.png",
  ];
  IMAGES_LONG_IDLE = [
    "img/1.Sharkie/2.Long_IDLE/I11.png",
    "img/1.Sharkie/2.Long_IDLE/I12.png",
    "img/1.Sharkie/2.Long_IDLE/I13.png",
    "img/1.Sharkie/2.Long_IDLE/I14.png",
  ];
  IMAGES_SWIM = [
    "img/1.Sharkie/3.Swim/1.png",
    "img/1.Sharkie/3.Swim/2.png",
    "img/1.Sharkie/3.Swim/3.png",
    "img/1.Sharkie/3.Swim/4.png",
    "img/1.Sharkie/3.Swim/5.png",
    "img/1.Sharkie/3.Swim/6.png",
  ];
  IMAGES_DEAD = [
    "img/1.Sharkie/6.dead/1.Poisoned/1.png",
    "img/1.Sharkie/6.dead/1.Poisoned/2.png",
    "img/1.Sharkie/6.dead/1.Poisoned/3.png",
    "img/1.Sharkie/6.dead/1.Poisoned/4.png",
    "img/1.Sharkie/6.dead/1.Poisoned/5.png",
    "img/1.Sharkie/6.dead/1.Poisoned/6.png",
    "img/1.Sharkie/6.dead/1.Poisoned/7.png",
    "img/1.Sharkie/6.dead/1.Poisoned/8.png",
    "img/1.Sharkie/6.dead/1.Poisoned/9.png",
    "img/1.Sharkie/6.dead/1.Poisoned/10.png",
    "img/1.Sharkie/6.dead/1.Poisoned/11.png",
    "img/1.Sharkie/6.dead/1.Poisoned/12.png",
  ];

  IMAGES_HURT_SHOCK = [
    "img/1.Sharkie/5.Hurt/2.Electric shock/o1.png",
    "img/1.Sharkie/5.Hurt/2.Electric shock/o2.png",
    "img/1.Sharkie/5.Hurt/2.Electric shock/1.png",
    "img/1.Sharkie/5.Hurt/2.Electric shock/2.png",
    "img/1.Sharkie/5.Hurt/2.Electric shock/3.png",
  ];

  IMAGES_HURT_POISON = [
    "img/1.Sharkie/5.Hurt/1.Poisoned/1.png",
    "img/1.Sharkie/5.Hurt/1.Poisoned/2.png",
    "img/1.Sharkie/5.Hurt/1.Poisoned/3.png",
    "img/1.Sharkie/5.Hurt/1.Poisoned/4.png",
    "img/1.Sharkie/5.Hurt/1.Poisoned/5.png",
  ];

  IMAGES_SHOOT = [
    "img/1.Sharkie/4.Attack/Bubble trap/For Whale/Whitout bubbles/1.png",
    "img/1.Sharkie/4.Attack/Bubble trap/For Whale/Whitout bubbles/2.png",
    "img/1.Sharkie/4.Attack/Bubble trap/For Whale/Whitout bubbles/3.png",
    "img/1.Sharkie/4.Attack/Bubble trap/For Whale/Whitout bubbles/4.png",
    "img/1.Sharkie/4.Attack/Bubble trap/For Whale/Whitout bubbles/5.png",
    "img/1.Sharkie/4.Attack/Bubble trap/For Whale/Whitout bubbles/6.png",
    "img/1.Sharkie/4.Attack/Bubble trap/For Whale/Whitout bubbles/7.png",
    "img/1.Sharkie/4.Attack/Bubble trap/For Whale/Whitout bubbles/8.png",
  ];
  IMAGES_SLAP = [
    "img/1.Sharkie/4.Attack/Fin slap/1.png",
    "img/1.Sharkie/4.Attack/Fin slap/2.png",
    "img/1.Sharkie/4.Attack/Fin slap/3.png",
    "img/1.Sharkie/4.Attack/Fin slap/4.png",
    "img/1.Sharkie/4.Attack/Fin slap/5.png",
    "img/1.Sharkie/4.Attack/Fin slap/6.png",
    "img/1.Sharkie/4.Attack/Fin slap/7.png",
    "img/1.Sharkie/4.Attack/Fin slap/8.png",
  ];

  world;
  isDying = false;
  isIdling = true;
  isAttacking = false;
  isSwimming = false;

  constructor() {
    super().loadImage(this.IMAGES_IDLE[0]);
    this.loadImages(this.IMAGES_SWIM);
    this.loadImages(this.IMAGES_IDLE);
    this.loadImages(this.IMAGES_LONG_IDLE);
    this.loadImages(this.IMAGES_DEAD);
    this.loadImages(this.IMAGES_HURT_SHOCK);
    this.loadImages(this.IMAGES_HURT_POISON);
    this.loadImages(this.IMAGES_SHOOT);
    this.loadImages(this.IMAGES_SLAP);
    this.energy = 10000;
    this.animate();
    this.applyGravity();
  }

  animate() {
    this.animateIdle();
    this.animateSwim();
    this.animateMovementX();
    this.animateMovementY();
    this.animateAttack();
    this.animateHurt();
    this.animateDeath();
  }

  animateIdle() {
    let idle = setInterval(() => {
      if (!this.isDead()) {
        if (!this.isAboveGround() && this.isAFK()) {
          this.playAnimation(this.IMAGES_LONG_IDLE);
        } else if (this.isAFK() && !this.isHurt()) {
          this.playAnimation(this.IMAGES_IDLE);
        }
      } else {
        clearInterval(idle);
      }
    }, 1000 / 8);
  }

  animateHurt() {
    let hurt = setInterval(() => {
      if (!this.isDead()) {
        if (this.isHurt()) {
          this.playAnimation(this.IMAGES_HURT_SHOCK);
        }
      } else {
        clearInterval(hurt);
      }
    }, 1000 / 60);
  }

  animateDeath() {
    let i = 0;
    let dead = setInterval(() => {
      if (this.isDead()) {
        this.loadImage(this.IMAGES_DEAD[i]);
        i++;
        if (i >= 12) {
          this.moveUpInterval();
          clearInterval(dead);
        }
      }
    }, 1000 / 12);
  }

  moveUpInterval() {
    let i = 0;
    let move = setInterval(() => {
      this.moveUp();
      i++;
      if (i > 100) {
        clearInterval(move);
      }
    }, 1000 / 10);
  }

  animateSwim() {
    let swim = setInterval(() => {
      if (!this.isDead()) {
        if (
          (this.world.keyboard.RIGHT ||
            this.world.keyboard.LEFT ||
            this.world.keyboard.UP ||
            this.world.keyboard.DOWN) &&
          !this.isHurt()
        ) {
          this.playAnimation(this.IMAGES_SWIM);
        }
      } else {
        clearInterval(swim);
      }
    }, 1000 / 11);
  }

  animateMovementX() {
    let move = setInterval(() => {
      if (!this.isDead()) {
        if (
          this.world.keyboard.RIGHT &&
          this.x < this.world.level.level_end_x
        ) {
          this.moveRight();
          this.otherDirection = false;
        }
        if (this.world.keyboard.LEFT && this.x > -500) {
          this.moveLeft();
          this.otherDirection = true;
        }
        this.world.camera_x = -this.x + 50;
      } else {
        clearInterval(move);
      }
    }, 1000 / 60);
  }

  animateMovementY() {
    let move = setInterval(() => {
      if (!this.isDead()) {
        if (this.world.keyboard.UP && this.y > -100) {
          this.moveUp();
        }
        if (this.world.keyboard.DOWN && this.y < 275) {
          this.moveDown();
        }
      } else {
        clearInterval(move);
      }
    }, 1000 / 60);
  }

  animateAttack() {
    let attack = setInterval(() => {
      if (!this.isDead()) {
        if (this.world.keyboard.SPACE && !this.isHurt()) {
          this.playAnimation(this.IMAGES_SHOOT);
        } else if (this.world.keyboard.D && !this.isHurt()) {
          this.playAnimation(this.IMAGES_SLAP);
        }
      } else {
        clearInterval(attack);
      }
    }, 1000 / 25);
  }

  isAFK() {
    return (
      this.world.keyboard.RIGHT == false &&
      this.world.keyboard.LEFT == false &&
      this.world.keyboard.UP == false &&
      this.world.keyboard.DOWN == false &&
      this.world.keyboard.D == false &&
      this.world.keyboard.SPACE == false
    );
  }
}
