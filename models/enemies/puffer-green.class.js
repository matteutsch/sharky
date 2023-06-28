class PufferGreen extends MovableObject {
  height = 64;
  width = 64;
  x = Math.random() * 230 + Math.random() * 900;
  y = Math.random() * 50 + Math.random() * 200;
  speed = 0.5 + Math.random() * 0.5;

  IMAGES_GREEN = [
    "../../img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim1.png",
    "../../img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim2.png",
    "../../img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim3.png",
    "../../img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim4.png",
    "../../img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim5.png",
  ];

  constructor() {
    super();
    this.loadImages(this.IMAGES_GREEN);
    this.animate();
  }

  animate() {
    setInterval(() => {
      this.backAndForth();
    }, 1000 / 60);

    setInterval(() => {
      this.playAnimation(this.IMAGES_GREEN);
    }, 1000 / 11);
  }
}
