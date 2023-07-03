class PufferRed extends MovableObject {
  height = 80;
  width = 80;
  x = 800 + Math.random() * 800;
  y = 150 + Math.random() * 200;
  speed = 0.8 + Math.random() * 0.5;

  IMAGES_SWIM = [
    "img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim1.png",
    "img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim2.png",
    "img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim3.png",
    "img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim4.png",
    "img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim5.png",
  ];

  IMAGES_TRANSITION = [
    "img/2.Enemy/1.Puffer fish (3 color options)/2.transition/3.transition1.png",
    "img/2.Enemy/1.Puffer fish (3 color options)/2.transition/3.transition2.png",
    "img/2.Enemy/1.Puffer fish (3 color options)/2.transition/3.transition3.png",
    "img/2.Enemy/1.Puffer fish (3 color options)/2.transition/3.transition4.png",
    "img/2.Enemy/1.Puffer fish (3 color options)/2.transition/3.transition5.png",
  ];
  IMAGES_DEAD = [
    "img/2.Enemy/1.Puffer fish (3 color options)/4.DIE/3.png",
    "img/2.Enemy/1.Puffer fish (3 color options)/4.DIE/3.3.png",
    "img/2.Enemy/1.Puffer fish (3 color options)/4.DIE/3.2.png",
  ];

  constructor() {
    super();
    this.energy = 10;
    this.loadImages(this.IMAGES_SWIM);
    this.loadImages(this.IMAGES_DEAD);
    this.animate();
  }

  animate() {
    this.animateSwimEnemies(this.IMAGES_SWIM);
    this.animateMovementPuffer();
    this.animateDeath(this.IMAGES_DEAD, this.IMAGES_DEAD.length);
  }
}
