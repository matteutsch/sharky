class Character extends MovableObject {
  x = 10;
  y = 150;
  height = 250;
  width = 220;
  speed = 5;

  IMAGES_IDLE = [
    "../img/1.Sharkie/1.IDLE/1.png",
    "../img/1.Sharkie/1.IDLE/2.png",
    "../img/1.Sharkie/1.IDLE/3.png",
    "../img/1.Sharkie/1.IDLE/4.png",
    "../img/1.Sharkie/1.IDLE/5.png",
    "../img/1.Sharkie/1.IDLE/6.png",
    "../img/1.Sharkie/1.IDLE/7.png",
    "../img/1.Sharkie/1.IDLE/8.png",
    "../img/1.Sharkie/1.IDLE/9.png",
    "../img/1.Sharkie/1.IDLE/10.png",
    "../img/1.Sharkie/1.IDLE/11.png",
    "../img/1.Sharkie/1.IDLE/12.png",
    "../img/1.Sharkie/1.IDLE/13.png",
    "../img/1.Sharkie/1.IDLE/14.png",
    "../img/1.Sharkie/1.IDLE/15.png",
    "../img/1.Sharkie/1.IDLE/16.png",
    "../img/1.Sharkie/1.IDLE/17.png",
    "../img/1.Sharkie/1.IDLE/18.png",
  ];
  IMAGES_LONG_IDLE = [
    "../img/1.Sharkie/2.Long_IDLE/I11.png",
    "../img/1.Sharkie/2.Long_IDLE/I12.png",
    "../img/1.Sharkie/2.Long_IDLE/I13.png",
    "../img/1.Sharkie/2.Long_IDLE/I14.png",
  ];
  IMAGES_SWIM = [
    "../img/1.Sharkie/3.Swim/1.png",
    "../img/1.Sharkie/3.Swim/2.png",
    "../img/1.Sharkie/3.Swim/3.png",
    "../img/1.Sharkie/3.Swim/4.png",
    "../img/1.Sharkie/3.Swim/5.png",
    "../img/1.Sharkie/3.Swim/6.png",
  ];
  IMAGES_DEAD = [
    "../img/1.Sharkie/6.dead/1.Poisoned/1.png",
    "../img/1.Sharkie/6.dead/1.Poisoned/2.png",
    "../img/1.Sharkie/6.dead/1.Poisoned/3.png",
    "../img/1.Sharkie/6.dead/1.Poisoned/4.png",
    "../img/1.Sharkie/6.dead/1.Poisoned/5.png",
    "../img/1.Sharkie/6.dead/1.Poisoned/6.png",
    "../img/1.Sharkie/6.dead/1.Poisoned/7.png",
    "../img/1.Sharkie/6.dead/1.Poisoned/8.png",
    "../img/1.Sharkie/6.dead/1.Poisoned/9.png",
    "../img/1.Sharkie/6.dead/1.Poisoned/10.png",
    "../img/1.Sharkie/6.dead/1.Poisoned/11.png",
    "../img/1.Sharkie/6.dead/1.Poisoned/12.png",
  ];

  IMAGES_HURT_SHOCK = [
    "../img/1.Sharkie/5.Hurt/2.Electric shock/o1.png",
    "../img/1.Sharkie/5.Hurt/2.Electric shock/o2.png",
    "../img/1.Sharkie/5.Hurt/2.Electric shock/1.png",
    "../img/1.Sharkie/5.Hurt/2.Electric shock/2.png",
    "../img/1.Sharkie/5.Hurt/2.Electric shock/3.png",
  ];

  IMAGES_HURT_POISON = [
    "../img/1.Sharkie/5.Hurt/1.Poisoned/1.png",
    "../img/1.Sharkie/5.Hurt/1.Poisoned/2.png",
    "../img/1.Sharkie/5.Hurt/1.Poisoned/3.png",
    "../img/1.Sharkie/5.Hurt/1.Poisoned/4.png",
    "../img/1.Sharkie/5.Hurt/1.Poisoned/5.png",
  ];

  IMAGES_SHOOT = [
    "../img/1.Sharkie/4.Attack/Bubble trap/For Whale/Whitout bubbles/1.png",
    "../img/1.Sharkie/4.Attack/Bubble trap/For Whale/Whitout bubbles/2.png",
    "../img/1.Sharkie/4.Attack/Bubble trap/For Whale/Whitout bubbles/3.png",
    "../img/1.Sharkie/4.Attack/Bubble trap/For Whale/Whitout bubbles/4.png",
    "../img/1.Sharkie/4.Attack/Bubble trap/For Whale/Whitout bubbles/5.png",
    "../img/1.Sharkie/4.Attack/Bubble trap/For Whale/Whitout bubbles/6.png",
    "../img/1.Sharkie/4.Attack/Bubble trap/For Whale/Whitout bubbles/7.png",
    "../img/1.Sharkie/4.Attack/Bubble trap/For Whale/Whitout bubbles/8.png",
  ];
  IMAGES_SLAP = [
    "../img/1.Sharkie/4.Attack/Fin slap/1.png",
    "../img/1.Sharkie/4.Attack/Fin slap/2.png",
    "../img/1.Sharkie/4.Attack/Fin slap/3.png",
    "../img/1.Sharkie/4.Attack/Fin slap/4.png",
    "../img/1.Sharkie/4.Attack/Fin slap/5.png",
    "../img/1.Sharkie/4.Attack/Fin slap/6.png",
    "../img/1.Sharkie/4.Attack/Fin slap/7.png",
    "../img/1.Sharkie/4.Attack/Fin slap/8.png",
  ];

  world;

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
    this.animate();
    this.applyGravity();
  }

  animate() {
    this.animateIdle();
    this.animateMovementX();
    this.animateMovementY();
    this.animateSwim();
    this.animateAttack();
    this.animateHurt();
    this.animateDeath();
  }

  animateHurt() {
    setInterval(() => {
      if (this.isHurt() && !this.isDead()) {
        this.playAnimation(this.IMAGES_HURT_SHOCK);
      }
    }, 1000 / 60);
  }

  animateDeath() {
    setInterval(() => {
      if (this.isDead()) {
        this.playAnimation(this.IMAGES_DEAD);
      }
    }, 1000 / 25);
  }

  animateSwim() {
    setInterval(() => {
      if (
        this.world.keyboard.RIGHT ||
        this.world.keyboard.LEFT ||
        this.world.keyboard.UP ||
        this.world.keyboard.DOWN
      ) {
        this.playAnimation(this.IMAGES_SWIM);
      }
    }, 1000 / 11);
  }
  animateMovementX() {
    setInterval(() => {
      if (this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x) {
        this.moveRight();
        this.otherDirection = false;
      }
      if (this.world.keyboard.LEFT && this.x > -500) {
        this.moveLeft();
        this.otherDirection = true;
      }
      this.world.camera_x = -this.x + 50;
    }, 1000 / 60);
  }

  animateMovementY() {
    setInterval(() => {
      if (this.world.keyboard.UP && this.y > -100) {
        this.moveUp();
      }
      if (this.world.keyboard.DOWN && this.y < 275) {
        this.moveDown();
      }
    }, 1000 / 60);
  }

  animateAttack() {
    setInterval(() => {
      if (this.world.keyboard.SPACE) {
        this.playAnimation(this.IMAGES_SHOOT);
      } else if (this.world.keyboard.D) {
        this.playAnimation(this.IMAGES_SLAP);
      }
    }, 1000 / 25);
  }

  animateIdle() {
    setInterval(() => {
      if (!this.isAboveGround() && this.isAFK()) {
        this.playAnimation(this.IMAGES_LONG_IDLE);
      } else if (this.isAFK()) {
        this.playAnimation(this.IMAGES_IDLE);
      }
    }, 1000 / 8);
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
