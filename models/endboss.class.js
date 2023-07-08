class Endboss extends MovableObject {
  height = 400;
  width = 400;
  x = 2200;
  y = 10;
  world;
  hadFirstContact = false;
  swim = false;
  speed = 8;
  hurt_sound = new Audio("audio/endboss_hurt.mp3");
  boss_fight = new Audio("audio/boss_fight.mp3");

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
  IMAGES_SWIM = [
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
  IMAGES_HURT = [
    "img/2.Enemy/3 Final Enemy/Hurt/1.png",
    "img/2.Enemy/3 Final Enemy/Hurt/2.png",
    "img/2.Enemy/3 Final Enemy/Hurt/3.png",
    "img/2.Enemy/3 Final Enemy/Hurt/4.png",
  ];
  IMAGES_DEAD = [
    "img/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 6.png",
    "img/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 7.png",
    "img/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 8.png",
    "img/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 9.png",
    "img/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 10.png",
  ];

  constructor() {
    super().loadImage(this.IMAGES_INTRODUCE[0]);
    this.loadImages(this.IMAGES_INTRODUCE);
    this.loadImages(this.IMAGES_SWIM);
    this.loadImages(this.IMAGES_ATTACK);
    this.loadImages(this.IMAGES_HURT);
    this.loadImages(this.IMAGES_DEAD);
    this.animate();
    this.energy = 50;
  }

  animate() {
    this.animateIntro();
    this.animateSwim();
    this.animateHurt();
    this.animateAttack();
    this.animateDeath(this.IMAGES_DEAD);
    this.followChar();
  }

  animateSwim() {
    if (this.swim && !this.isHurt()) {
      this.animateSwimEnemies(this.IMAGES_SWIM);
    }
  }

  animateHurt() {
    let hurt = setInterval(() => {
      if (!this.isDead()) {
        if (this.isHurt()) {
          this.playAnimation(this.IMAGES_HURT);
          this.hurt_sound.play();
        }
      } else {
        clearInterval(hurt);
      }
    }, 1000 / 60);
  }

  animateIntro() {
    let i = 0;
    let intro = setInterval(() => {
      if (
        this.world &&
        this.world.character.x > 1650 &&
        !this.hadFirstContact
      ) {
        this.hadFirstContact = true;
      }
      if (i < 10 && this.hadFirstContact) {
        this.boss_fight.play();
        this.world.background_music.pause();
        this.loadImage(this.IMAGES_INTRODUCE[i]);
        i++;
      }
      if (i >= 10) {
        this.swim = true;
        this.animateSwim();
        clearInterval(intro);
      }
    }, 100);
  }

  followChar() {
    setInterval(() => {
      if (this.world && !this.isDead() && this.hadFirstContact) {
        let charX = this.world.character.x;
        let charY = this.world.character.y;
        if (this.x >= charX) {
          this.moveLeft();
          this.otherDirection = false;
        } else if (this.x < charX) {
          this.moveRight();
          this.otherDirection = true;
        }

        if (this.y + 50 > charY) {
          this.moveUp();
        } else if (this.y < charY - 100) {
          this.moveDown();
        }
      }
    }, 100);
  }

  animateAttack() {
    let attack = setInterval(() => {
      if (!this.isDead()) {
        if (this.isClose() && !this.isHurt()) {
          this.playAnimation(this.IMAGES_ATTACK);
        }
      } else {
        clearInterval(attack);
      }
    }, 1000 / 25);
  }

  isClose() {
    if (this.world) {
      if (
        Math.abs(this.x - this.world.character.x) < 200 &&
        Math.abs(this.y - this.world.character.y) < 200
      ) {
        return true;
      }
    }
  }
}
