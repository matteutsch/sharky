class JellyFish extends MovableObject {
  height = 80;
  width = 72;
  x = 250 + Math.random() * 200;
  y = 100 + Math.random() * 100;

  IMAGES_SWIM_PURPLE = [
    "../img/2.Enemy/2 Jelly fish/Regular damage/Lila 1.png",
    "../img/2.Enemy/2 Jelly fish/Regular damage/Lila 2.png",
    "../img/2.Enemy/2 Jelly fish/Regular damage/Lila 3.png",
    "../img/2.Enemy/2 Jelly fish/Regular damage/Lila 4.png",
  ];
  IMAGES_SWIM_YELLOW = [
    "../img/2.Enemy/2 Jelly fish/Regular damage/Yellow 1.png",
    "../img/2.Enemy/2 Jelly fish/Regular damage/Yellow 2.png",
    "../img/2.Enemy/2 Jelly fish/Regular damage/Yellow 3.png",
    "../img/2.Enemy/2 Jelly fish/Regular damage/Yellow 4.png",
  ];
  IMAGES_SWIM_GREEN = [
    "../img/2.Enemy/2 Jelly fish/Súper dangerous/Green 1.png",
    "../img/2.Enemy/2 Jelly fish/Súper dangerous/Green 2.png",
    "../img/2.Enemy/2 Jelly fish/Súper dangerous/Green 3.png",
    "../img/2.Enemy/2 Jelly fish/Súper dangerous/Green 4.png",
  ];
  IMAGES_SWIM_PINK = [
    "../img/2.Enemy/2 Jelly fish/Súper dangerous/Pink 1.png",
    "../img/2.Enemy/2 Jelly fish/Súper dangerous/Pink 2.png",
    "../img/2.Enemy/2 Jelly fish/Súper dangerous/Pink 3.png",
    "../img/2.Enemy/2 Jelly fish/Súper dangerous/Pink 4.png",
  ];

  constructor() {
    super().loadImage("../img/2.Enemy/2 Jelly fish/Regular damage/Lila 1.png");
    this.loadImages(this.IMAGES_SWIM_PURPLE);
    this.animate();
  }

  animate() {
    setInterval(() => {
      let i = this.currentImage % this.IMAGES_SWIM_PURPLE.length;
      let path = this.IMAGES_SWIM_PURPLE[i];
      this.img = this.imageCache[path];
      this.currentImage++;
    }, 1000 / 10);
  }
}
