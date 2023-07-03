class JellyGreen extends MovableObject {
  height = 120;
  width = 100;
  speedY = 2 + Math.random();
  acceleration = 0.001 + Math.random();

  IMAGES_SWIM = [
    "img/2.Enemy/2 Jelly fish/Super dangerous/Green 1.png",
    "img/2.Enemy/2 Jelly fish/Super dangerous/Green 2.png",
    "img/2.Enemy/2 Jelly fish/Super dangerous/Green 3.png",
    "img/2.Enemy/2 Jelly fish/Super dangerous/Green 4.png",
  ];
  IMAGES_DEAD = [
    "img/2.Enemy/2 Jelly fish/Dead/green/g1.png",
    "img/2.Enemy/2 Jelly fish/Dead/green/g2.png",
    "img/2.Enemy/2 Jelly fish/Dead/green/g3.png",
    "img/2.Enemy/2 Jelly fish/Dead/green/g4.png",
  ];

  constructor(x, y) {
    super();
    this.x = x;
    this.y = y;
    this.energy = 20;
    this.loadImages(this.IMAGES_SWIM);
    this.animate();
  }

  animate() {
    this.animateSwimEnemies(this.IMAGES_SWIM);
    this.animateMovementJelly();
    this.animateDeath(this.IMAGES_DEAD, this.IMAGES_DEAD.length);
  }
}
