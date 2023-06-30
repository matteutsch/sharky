class World {
  character = new Character();
  enemies = level1.enemies;
  backgroundObjects = level1.backgroundObjects;
  collectables = level1.collectables;
  level = level1;
  canvas;
  ctx;
  keyboard;
  camera_x;
  statusBar = new StatusBar();
  coinBar = new CoinBar();
  poisonBar = new PoisonBar();
  shotBubble = new ShootableObject();
  shootableObject = [];
  coins = 0;
  poison = 0;

  constructor(canvas, keyboard) {
    this.ctx = canvas.getContext("2d");
    this.canvas = canvas;
    this.keyboard = keyboard;
    this.draw();
    this.setWorld();
    this.run();
  }

  setWorld() {
    this.character.world = this;
  }

  run() {
    setInterval(() => {
      this.checkCollisionEnemy();
      this.checkCollisionCollectables();
      this.checkShotObjects();
    }, 200);
  }

  checkShotObjects() {
    if (this.keyboard.SPACE && this.shootableObject.length <= 5) {
      if (!this.character.otherDirection) {
        (this.positionX = this.character.x + this.character.width),
          (this.speed = 3);
      } else if (this.character.otherDirection) {
        (this.positionX = this.character.x), (this.speed = -3);
      }
      if (this.poison > 0) {
        this.img = this.shotBubble.IMAGE_POISONED;
      } else {
        this.img = this.shotBubble.IMAGE_NORMAL;
      }
      let bubble = new ShootableObject(
        this.positionX,
        this.character.y + this.character.height - 110,
        this.speed,
        this.img
      );
      if (this.poison > 0) {
        this.poison--;
        this.poisonBar.setPercentagePoison(this.poison);
      }
      this.shootableObject.push(bubble);

      setTimeout(() => {
        this.shootableObject.splice(bubble, 1);
      }, 3000);
    }
  }

  checkCollisionEnemy() {
    this.level.enemies.forEach((enemy) => {
      if (this.character.isColliding(enemy)) {
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
            this.collectables.splice(index, 1);
            this.coinBar.setPercentageCoin(this.coins);
          }
        } else if (this.poison <= 4) {
          this.poison++;
          this.collectables.splice(index, 1);
          this.poisonBar.setPercentagePoison(this.poison);
        }
      }
    });
  }

  draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    this.ctx.translate(this.camera_x, 0);

    this.addObjectsToMap(this.backgroundObjects);
    this.addObjectsToMap(this.collectables);

    this.ctx.translate(-this.camera_x, 0);
    //---space for fixed objects---//
    this.addToMap(this.statusBar);
    this.addToMap(this.poisonBar);
    this.addToMap(this.coinBar);
    this.ctx.translate(this.camera_x, 0);

    this.addToMap(this.character);
    this.addObjectsToMap(this.enemies);
    this.addObjectsToMap(this.shootableObject);

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
