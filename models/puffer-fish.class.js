class PufferFish extends MovableObject {
  height = 64;
  width = 64;
  x = 230 + Math.random() * 500;
  y = 100 + Math.random() * 400;
  speed = 0.5 + Math.random() * 0.5;

  IMAGES_SWIM_GREEN = [
    "../img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim1.png",
    "../img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim2.png",
    "../img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim3.png",
    "../img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim4.png",
    "../img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim5.png",
  ];

  IMAGES_SWIM_PINK = [
    "../img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/2.swim1.png",
    "../img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/2.swim2.png",
    "../img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/2.swim3.png",
    "../img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/2.swim4.png",
    "../img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/2.swim5.png",
  ];

  IMAGES_SWIM_RED = [
    "../img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim1.png",
    "../img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim2.png",
    "../img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim3.png",
    "../img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim4.png",
    "../img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim5.png",
  ];

  constructor() {
    super().loadImage(this.IMAGES_SWIM_GREEN[0]);
    this.loadImages(this.IMAGES_SWIM_GREEN);
    this.animate();
  }

  animate() {
    setInterval(() => {
      this.moveLeft();
    }, 1000 / 60);

    setInterval(() => {
      this.playAnimation(this.IMAGES_SWIM_GREEN);
    }, 1000 / 11);
  }
}
