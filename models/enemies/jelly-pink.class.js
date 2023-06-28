class JellyPink extends MovableObject {
  height = 100;
  width = 100;
  x = 500 + Math.random() * 1000;
  y = 100 + Math.random() * 100;
  speedY = 1 + Math.random();
  acceleration = 0.001 + Math.random();

  IMAGES_PINK = [
    "../img/2.Enemy/2 Jelly fish/Súper dangerous/Pink 1.png",
    "../img/2.Enemy/2 Jelly fish/Súper dangerous/Pink 2.png",
    "../img/2.Enemy/2 Jelly fish/Súper dangerous/Pink 3.png",
    "../img/2.Enemy/2 Jelly fish/Súper dangerous/Pink 4.png",
  ];

  constructor() {
    super();
    this.loadImages(this.IMAGES_PINK);
    this.animate();
    this.riseAndSink();
  }

  animate() {
    setInterval(() => {
      let i = this.currentImage % this.IMAGES_PINK.length;
      let path = this.IMAGES_PINK[i];
      this.img = this.imageCache[path];
      this.currentImage++;
    }, 1000 / 10);
  }
}
