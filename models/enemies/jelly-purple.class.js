class JellyPurple extends MovableObject {
  height = 80;
  width = 72;
  speedY = 2 + Math.random();
  acceleration = 0.001 + Math.random();
  IMAGES_PURPLE = [
    "../img/2.Enemy/2 Jelly fish/Regular damage/Lila 1.png",
    "../img/2.Enemy/2 Jelly fish/Regular damage/Lila 2.png",
    "../img/2.Enemy/2 Jelly fish/Regular damage/Lila 3.png",
    "../img/2.Enemy/2 Jelly fish/Regular damage/Lila 4.png",
  ];

  constructor(x, y) {
    super();
    this.x = x;
    this.y = y;
    this.loadImages(this.IMAGES_PURPLE);
    this.animate();
    this.riseAndSink();
  }

  animate() {
    setInterval(() => {
      let i = this.currentImage % this.IMAGES_PURPLE.length;
      let path = this.IMAGES_PURPLE[i];
      this.img = this.imageCache[path];
      this.currentImage++;
    }, 1000 / 10);
  }
}