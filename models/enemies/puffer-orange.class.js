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
  IMAGES_TRANSITION = [
    "img/2.Enemy/1.Puffer fish (3 color options)/2.transition/2.transition1.png",
    "img/2.Enemy/1.Puffer fish (3 color options)/2.transition/2.transition2.png",
    "img/2.Enemy/1.Puffer fish (3 color options)/2.transition/2.transition3.png",
    "img/2.Enemy/1.Puffer fish (3 color options)/2.transition/2.transition4.png",
    "img/2.Enemy/1.Puffer fish (3 color options)/2.transition/2.transition5.png",
  ];
  IMAGES_DEAD = [
    "img/2.Enemy/1.Puffer fish (3 color options)/4.DIE/2.png",
    "img/2.Enemy/1.Puffer fish (3 color options)/4.DIE/2.3.png",
    "img/2.Enemy/1.Puffer fish (3 color options)/4.DIE/2.2.png",
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
