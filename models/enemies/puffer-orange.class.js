class PufferOrange extends MovableObject {
  height = 60;
  width = 60;
  x = 1800 + Math.random() * 900;
  y = Math.random() * 50 + Math.random() * 200;
  speed = Math.random() * 0.5 + Math.random() * 0.5;
  IMAGES_SWIM = [
    "img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/2.swim1.png",
    "img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/2.swim2.png",
    "img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/2.swim3.png",
    "img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/2.swim4.png",
    "img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/2.swim5.png",
  ];

  constructor() {
    super();
    this.loadImages(this.IMAGES_SWIM);
    this.animate();
    this.energy = 20;
  }

  animate() {
    setInterval(() => {
      this.backAndForth();
    }, 1000 / 60);

    setInterval(() => {
      this.playAnimation(this.IMAGES_SWIM);
    }, 1000 / 11);
  }
}
