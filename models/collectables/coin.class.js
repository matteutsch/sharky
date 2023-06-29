class Coin extends MovableObject {
  height = 50;
  width = 50;

  IMAGES_COIN = [
    "img/4. Marcadores/1. Coins/1.png",
    "img/4. Marcadores/1. Coins/2.png",
    "img/4. Marcadores/1. Coins/3.png",
    "img/4. Marcadores/1. Coins/4.png",
  ];

  constructor(x, y) {
    super();
    this.loadImages(this.IMAGES_COIN);
    this.x = x;
    this.y = y;
    this.animate();
  }

  animate() {
    setInterval(() => {
      this.playAnimation(this.IMAGES_COIN);
    }, 1000 / 12);
  }
}
