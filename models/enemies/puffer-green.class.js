class PufferGreen extends MovableObject {
  height = 64;
  width = 64;
  x = 1200 + Math.random() * 900;
  y = Math.random() * 75 + Math.random() * 200;
  speed = 0.5 + Math.random() * 0.5;

  IMAGES_SWIM = [
    "img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim1.png",
    "img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim2.png",
    "img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim3.png",
    "img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim4.png",
    "img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim5.png",
  ];
  IMAGES_TRANSITION = [
    "img/2.Enemy/1.Puffer fish (3 color options)/2.transition/1.transition1.png",
    "img/2.Enemy/1.Puffer fish (3 color options)/2.transition/1.transition2.png",
    "img/2.Enemy/1.Puffer fish (3 color options)/2.transition/1.transition3.png",
    "img/2.Enemy/1.Puffer fish (3 color options)/2.transition/1.transition4.png",
    "img/2.Enemy/1.Puffer fish (3 color options)/2.transition/1.transition5.png",
  ];
  IMAGES_DEAD = [
    "img/2.Enemy/1.Puffer fish (3 color options)/4.DIE/1.Dead 1 (can animate by going up).png",
    "img/2.Enemy/1.Puffer fish (3 color options)/4.DIE/1.Dead 2 (can animate by going down to the floor after the Fin Slap attack).png",
    "img/2.Enemy/1.Puffer fish (3 color options)/4.DIE/1.Dead 3 (can animate by going down to the floor after the Fin Slap attack).png",
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
