class World {
  character = new Character();
  enemies = level1.enemies;
  backgroundObjects = level1.backgroundObjects;
  collectables = level1.collectables;
  level = level1;
  endboss = level1.enemies.find((e) => e instanceof Endboss);
  canvas;
  ctx;
  keyboard;
  camera_x;
  statusBar = new StatusBar();
  coinBar = new CoinBar();
  poisonBar = new PoisonBar();
  endbossBar = new StatusBarEndboss();
  shotBubble = new ShootableObject();
  shootableObject = [];
  coins = 0;
  poison = 0;
  damage = 1;
  energy;
  dead = false;
  img_win = "img/6.Botones/Tittles/You win/Recurso 19.png";

  constructor(canvas, keyboard) {
    this.ctx = canvas.getContext("2d");
    this.canvas = canvas;
    this.keyboard = keyboard;
    this.draw();
    this.setWorld();
    this.run();
    background_music.volume = 0.3;
  }

  setWorld() {
    this.character.world = this;
    this.endboss.world = this;
  }

  run() {
    setInterval(() => {
      this.checkCollisionEnemy();
      this.checkCollisionCollectables();
      this.checkShotObjects();
      this.checkDeadEnemy();
      this.checkCollisionBubble();
    }, 150);
    background_music.play();
  }

  checkShotObjects() {
    if (
      this.keyboard.SPACE &&
      this.shootableObject.length <= 5 &&
      !this.character.isHurt()
    ) {
      if (!this.character.otherDirection) {
        (this.positionX = this.character.x + this.character.width - 50),
          (this.speed = 3);
      } else if (this.character.otherDirection) {
        (this.positionX = this.character.x), (this.speed = -3);
      }
      this.returnBubbleStatus();
      let bubble = new ShootableObject(
        this.positionX,
        this.character.y + this.character.height - 110,
        this.speed,
        this.img,
        this.damage
      );
      if (this.poison > 0) {
        this.poison--;
        this.poisonBar.setPercentagePoison(this.poison);
      }
      this.shootableObject.push(bubble);
      bubble_sound.play();
    }
    this.shootableObject = this.shootableObject.filter(
      (bubble) => bubble.y >= 0
    );
  }

  checkCollisionEnemy() {
    this.enemies.forEach((enemy) => {
      if (this.character.isColliding(enemy) && !enemy.dead) {
        this.character.hit();
        this.statusBar.setPercentageHealth(this.character.energy);
        if (this.coins > 0) {
          this.coins--;
          this.coinBar.setPercentageCoin(this.coins);
        }
      }
    });
  }

  checkCollisionCollectables() {
    this.collectables.forEach((collectable, index) => {
      if (this.character.isColliding(collectable)) {
        if (collectable instanceof Coin) {
          if (this.coins <= 4) {
            this.coins++;
            collectables_sound.play();
            this.collectables.splice(index, 1);
            this.coinBar.setPercentageCoin(this.coins);
          }
        } else if (this.poison <= 4) {
          this.poison++;
          collectables_sound.play();
          this.collectables.splice(index, 1);
          this.poisonBar.setPercentagePoison(this.poison);
        }
      }
    });
  }

  checkCollisionBubble() {
    this.shootableObject.forEach((bubble, bubbleIndex) => {
      this.enemies.forEach((enemy) => {
        if (bubble.isColliding(enemy) && !enemy.dead) {
          enemy.energy -= bubble.damage;
          enemy.hit();
          hit_sound.play();
          if (enemy instanceof Endboss) {
            if (enemy.energy <= 0) {
              enemy.energy = 0;
            }
            this.endbossBar.setPercentageHealth(enemy.energy);
          }
          if (
            enemy instanceof PufferGreen ||
            enemy instanceof PufferRed ||
            enemy instanceof PufferOrange
          ) {
            enemy.transformed = true;
          }
          this.shootableObject.splice(bubbleIndex, 1);
        }
      });
    });
  }

  checkDeadEnemy() {
    this.enemies.forEach((enemy, enemyIndex) => {
      if (enemy.energy <= 0 && !enemy.dead) {
        enemy.energy = 0;
        enemy.dead = true;
        if (enemy instanceof Endboss) {
          this.endbossIsDead();
        }
        if (!(enemy instanceof Endboss)) {
          setTimeout(() => {
            this.enemies.splice(enemyIndex, 1);
          }, 1500);
        } else {
          enemy.rise();
        }
      }
    });
  }

  endbossIsDead() {
    endboss_dying.play();
    setTimeout(() => {
      boss_fight.pause();
      background_music.pause();
      this.endboss.hadFirstContact = false;
      win_sound.play();
      clearAllIntervals();
      showEndScreen(this.img_win);
      setLevel();
    }, 2000);
  }

  returnBubbleStatus() {
    if (this.poison > 0) {
      this.img = this.shotBubble.IMAGE_POISONED;
      this.damage = 10;
    } else {
      this.img = this.shotBubble.IMAGE_NORMAL;
      this.damage = 1;
    }
  }

  draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    this.ctx.translate(this.camera_x, 0);

    this.addObjectsToMap(this.backgroundObjects);
    this.addObjectsToMap(this.collectables);

    this.addToMap(this.character);
    this.addObjectsToMap(this.enemies);
    this.addObjectsToMap(this.shootableObject);

    this.ctx.translate(-this.camera_x, 0);
    //---space for fixed objects---//
    this.addToMap(this.statusBar);
    this.addToMap(this.poisonBar);
    this.addToMap(this.coinBar);
    this.addToMap(this.endbossBar);
    this.ctx.translate(this.camera_x, 0);

    this.ctx.translate(-this.camera_x, 0);

    let self = this;
    requestAnimationFrame(function () {
      self.draw();
    });
  }

  addObjectsToMap(objects) {
    objects.forEach((o) => {
      this.addToMap(o);
    });
  }

  addToMap(mo) {
    if (mo.otherDirection) {
      this.flipImage(mo);
    }
    mo.draw(this.ctx);
    mo.drawFrame(this.ctx);

    if (mo.otherDirection) {
      this.flipImageBack(mo);
    }
  }

  flipImage(mo) {
    this.ctx.save();
    this.ctx.translate(mo.width, 0);
    this.ctx.scale(-1, 1);
    mo.x = mo.x * -1;
  }
  flipImageBack(mo) {
    mo.x = mo.x * -1;
    this.ctx.restore();
  }
}
