class PufferRed extends MovableObject {
  height = 80;
  width = 80;
  x = 800 + Math.random() * 800;
  y = 150 + Math.random() * 200;
  speed = 0.8 + Math.random() * 0.5;

  IMAGES_RED = [
    "img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim1.png",
    "img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim2.png",
    "img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim3.png",
    "img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim4.png",
    "img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim5.png",
  ];

  constructor() {
    super();
    this.loadImages(this.IMAGES_RED);
    this.animate();
  }

  animate() {
    setInterval(() => {
      this.backAndForth();
    }, 1000 / 60);

    setInterval(() => {
      this.playAnimation(this.IMAGES_RED);
    }, 1000 / 11);
  }
}
