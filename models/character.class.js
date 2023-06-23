class Character extends MovableObject {
  height = 250;
  width = 220;
  x = 10;
  y = 150;
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
  world;

  constructor() {
    super().loadImage(this.IMAGES_IDLE[0]);
    this.loadImages(this.IMAGES_SWIM);
    this.loadImages(this.IMAGES_IDLE);
    this.loadImages(this.IMAGES_LONG_IDLE);
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
        this.y -= this.speed;
      }
      if (this.world.keyboard.DOWN && this.y < 275) {
        this.y += this.speed;
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
