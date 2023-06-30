class ShootableObject extends MovableObject {
  constructor(x, y, speed) {
    super().loadImage("img/1.Sharkie/4.Attack/Bubble trap/Bubble.png");
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
