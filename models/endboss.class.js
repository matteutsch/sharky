class Endboss extends MovableObject {
  height = 400;
  width = 400;
  x = 2200;
  y = 10;

  IMAGES_INTRODUCE = [
    "img/2.Enemy/3 Final Enemy/1.Introduce/1.png",
    "img/2.Enemy/3 Final Enemy/1.Introduce/2.png",
    "img/2.Enemy/3 Final Enemy/1.Introduce/3.png",
    "img/2.Enemy/3 Final Enemy/1.Introduce/4.png",
    "img/2.Enemy/3 Final Enemy/1.Introduce/5.png",
    "img/2.Enemy/3 Final Enemy/1.Introduce/6.png",
    "img/2.Enemy/3 Final Enemy/1.Introduce/7.png",
    "img/2.Enemy/3 Final Enemy/1.Introduce/8.png",
    "img/2.Enemy/3 Final Enemy/1.Introduce/9.png",
    "img/2.Enemy/3 Final Enemy/1.Introduce/10.png",
  ];
  IMAGES_IDLE = [
    "img/2.Enemy/3 Final Enemy/2.floating/1.png",
    "img/2.Enemy/3 Final Enemy/2.floating/2.png",
    "img/2.Enemy/3 Final Enemy/2.floating/3.png",
    "img/2.Enemy/3 Final Enemy/2.floating/4.png",
    "img/2.Enemy/3 Final Enemy/2.floating/5.png",
    "img/2.Enemy/3 Final Enemy/2.floating/6.png",
    "img/2.Enemy/3 Final Enemy/2.floating/7.png",
    "img/2.Enemy/3 Final Enemy/2.floating/8.png",
    "img/2.Enemy/3 Final Enemy/2.floating/9.png",
    "img/2.Enemy/3 Final Enemy/2.floating/10.png",
    "img/2.Enemy/3 Final Enemy/2.floating/11.png",
    "img/2.Enemy/3 Final Enemy/2.floating/12.png",
    "img/2.Enemy/3 Final Enemy/2.floating/13.png",
  ];
  IMAGES_ATTACK = [
    "img/2.Enemy/3 Final Enemy/Attack/1.png",
    "img/2.Enemy/3 Final Enemy/Attack/2.png",
    "img/2.Enemy/3 Final Enemy/Attack/3.png",
    "img/2.Enemy/3 Final Enemy/Attack/4.png",
    "img/2.Enemy/3 Final Enemy/Attack/5.png",
    "img/2.Enemy/3 Final Enemy/Attack/6.png",
  ];
  IMAGES_DEAD = [
    "img/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 6.png",
    "img/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 7.png",
    "img/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 8.png",
    "img/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 9.png",
    "img/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 10.png",
  ];
  IMAGES_HURT = [
    "img/2.Enemy/3 Final Enemy/Hurt/1.png",
    "img/2.Enemy/3 Final Enemy/Hurt/2.png",
    "img/2.Enemy/3 Final Enemy/Hurt/3.png",
    "img/2.Enemy/3 Final Enemy/Hurt/4.png",
  ];

  constructor() {
    super();
    this.loadImages(this.IMAGES_IDLE);
    this.animate();
    this.energy = 50;
  }

  animate() {
    this.animateSwimEnemies(this.IMAGES_IDLE);
    this.animateDeath(this.IMAGES_DEAD, this.IMAGES_DEAD.length);
  }
}
