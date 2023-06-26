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

  world;

  constructor() {
    super().loadImage(this.IMAGES_IDLE[0]);
    this.loadImages(this.IMAGES_SWIM);
    this.loadImages(this.IMAGES_IDLE);
    this.loadImages(this.IMAGES_LONG_IDLE);
    this.loadImages(this.IMAGES_DEAD);
    this.loadImages(this.IMAGES_HURT_SHOCK);
    this.loadImages(this.IMAGES_HURT_POISON);
    this.animate();
    this.applyGravity();
  }

  animate() {
    this.animateIdle();

    //moving right / left
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

    //moving up / down
    setInterval(() => {
      if (this.world.keyboard.UP && this.y > -100) {
        this.moveUp();
      }
      if (this.world.keyboard.DOWN && this.y < 275) {
        this.moveDown();
      }
    }, 1000 / 60);

    //animate moving
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

    //animate Death
    setInterval(() => {
      if (this.isDead()) {
        this.playAnimation(this.IMAGES_DEAD);
      }
    }, 29);

    //animate Hurt
    setInterval(() => {
      if (this.isHurt()) {
        this.playAnimation(this.IMAGES_HURT_SHOCK);
      }
    }, 1000 / 60);
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
      this.world.keyboard.X == false &&
      this.world.keyboard.Y == false
    );
  }
}
