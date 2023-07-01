class JellyGreen extends MovableObject {
  height = 100;
  width = 100;
  speedY = 2 + Math.random();
  acceleration = 0.001 + Math.random();

  IMAGES_GREEN = [
    "img/2.Enemy/2 Jelly fish/Super dangerous/Green 1.png",
    "img/2.Enemy/2 Jelly fish/Super dangerous/Green 2.png",
    "img/2.Enemy/2 Jelly fish/Super dangerous/Green 3.png",
    "img/2.Enemy/2 Jelly fish/Super dangerous/Green 4.png",
  ];

  constructor(x, y) {
    super();
    this.x = x;
    this.y = y;
    this.loadImages(this.IMAGES_GREEN);
    this.animate();
    this.riseAndSink();
    this.energy = 20;
  }

  animate() {
    setInterval(() => {
      let i = this.currentImage % this.IMAGES_GREEN.length;
      let path = this.IMAGES_GREEN[i];
      this.img = this.imageCache[path];
      this.currentImage++;
    }, 1000 / 10);
  }
}
