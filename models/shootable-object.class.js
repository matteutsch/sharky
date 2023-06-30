class ShootableObject extends MovableObject {
  IMAGE_POISONED =
    "img/1.Sharkie/4.Attack/Bubble trap/Poisoned Bubble (for whale).png";
  IMAGE_NORMAL = "img/1.Sharkie/4.Attack/Bubble trap/Bubble.png";

  constructor(x, y, speed, img) {
    super();
    this.img = img;
    this.loadImage(this.img);
    this.x = x;
    this.y = y;
    this.width = 30;
    this.height = 30;
    this.speed = speed;
    this.acceleration = 0.01;
    this.shoot();
  }

  shoot() {
    setInterval(() => {
      this.rise();
      this.moveRight();
    }, 1000 / 60);
  }
}
