class JellyPurple extends MovableObject {
  height = 80;
  width = 65;
  speedY = 2 + Math.random();
  acceleration = 0.001 + Math.random();
  IMAGES_SWIM = [
    "img/2.Enemy/2 Jelly fish/Regular damage/Lila 1.png",
    "img/2.Enemy/2 Jelly fish/Regular damage/Lila 2.png",
    "img/2.Enemy/2 Jelly fish/Regular damage/Lila 3.png",
    "img/2.Enemy/2 Jelly fish/Regular damage/Lila 4.png",
  ];
  IMAGES_DEAD = [
    "img/2.Enemy/2 Jelly fish/Dead/Lila/L1.png",
    "img/2.Enemy/2 Jelly fish/Dead/Lila/L2.png",
    "img/2.Enemy/2 Jelly fish/Dead/Lila/L3.png",
    "img/2.Enemy/2 Jelly fish/Dead/Lila/L4.png",
  ];

  constructor(x, y) {
    super();
    this.x = x;
    this.y = y;
    this.energy = 10;
    this.loadImages(this.IMAGES_SWIM);
    this.animate();
  }

  animate() {
    this.animateSwimEnemies(this.IMAGES_SWIM);
    this.animateMovementJelly();
    this.animateDeath(this.IMAGES_DEAD, this.IMAGES_DEAD.length);
  }
}
