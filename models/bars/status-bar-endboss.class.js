class StatusBarEndboss extends DrawableObject {
  x = 350;
  y = -100;
  width = 180;
  height = 60;

  IMAGES_HEALTH = [
    "img/4. Marcadores/orange/0_  copia.png",
    "img/4. Marcadores/orange/20_ copia 2.png",
    "img/4. Marcadores/orange/40_  copia.png",
    "img/4. Marcadores/orange/60_  copia.png",
    "img/4. Marcadores/orange/80_  copia.png",
    "img/4. Marcadores/orange/100_  copia.png",
  ];

  percentage;

  constructor() {
    super();
    this.loadImages(this.IMAGES_HEALTH);
    this.setPercentageHealth(50);
  }

  setPercentageHealth(percentage) {
    this.percentage = percentage;
    let path = this.IMAGES_HEALTH[this.resolveImageIndex()];
    this.img = this.imageCache[path];
  }

  resolveImageIndex() {
    if (this.percentage == 50) {
      return 5;
    } else if (this.percentage >= 40) {
      return 4;
    } else if (this.percentage >= 30) {
      return 3;
    } else if (this.percentage >= 20) {
      return 2;
    } else if (this.percentage > 0) {
      return 1;
    } else if (this.percentage <= 0) {
      return 0;
    }
  }
}
