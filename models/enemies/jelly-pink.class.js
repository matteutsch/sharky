class JellyPink extends MovableObject {
  height = 120;
  width = 100;
  speedY = 1 + Math.random();
  acceleration = 0.001 + Math.random();

  IMAGES_SWIM = [
    "img/2.Enemy/2 Jelly fish/Super dangerous/Pink 1.png",
    "img/2.Enemy/2 Jelly fish/Super dangerous/Pink 2.png",
    "img/2.Enemy/2 Jelly fish/Super dangerous/Pink 3.png",
    "img/2.Enemy/2 Jelly fish/Super dangerous/Pink 4.png",
  ];
  IMAGES_DEAD = [
    "img/2.Enemy/2 Jelly fish/Dead/Pink/P1.png",
    "img/2.Enemy/2 Jelly fish/Dead/Pink/P2.png",
    "img/2.Enemy/2 Jelly fish/Dead/Pink/P3.png",
    "img/2.Enemy/2 Jelly fish/Dead/Pink/P4.png",
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
