class ShootableObject extends MovableObject {
  constructor(x, y) {
    super().loadImage("../img/1.Sharkie/4.Attack/Bubble trap/Bubble.png");
    this.x = x;
    this.y = y;
    this.width = 30;
    this.height = 30;
    this.shoot();
  }

  shoot() {
    this.rise();
    setInterval(() => {
      this.x += 3;
    }, 1000 / 60);
  }

  rise() {
    setInterval(() => {
      this.y -= this.speedY;
      this.speedY += 0.01;
    }, 1000 / 60);
  }
}
