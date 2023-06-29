class StatusBar extends DrawableObject {
  x = 180;
  y = 0;
  width = 160;
  height = 50;

  IMAGES_HEALTH = [
    "img/4. Marcadores/Purple/0_H.png",
    "img/4. Marcadores/Purple/20_H.png",
    "img/4. Marcadores/Purple/40_H.png",
    "img/4. Marcadores/Purple/60_H.png",
    "img/4. Marcadores/Purple/80_H.png",
    "img/4. Marcadores/Purple/100_H.png",
  ];

  percentage;

  constructor() {
    super();
    this.loadImages(this.IMAGES_HEALTH);
    this.setPercentageHealth(100);
  }

  setPercentageHealth(percentage) {
    this.percentage = percentage;
    let path = this.IMAGES_HEALTH[this.resolveImageIndex()];
    this.img = this.imageCache[path];
  }

  resolveImageIndex() {
    if (this.percentage == 100) {
      return 5;
    } else if (this.percentage > 80) {
      return 4;
    } else if (this.percentage > 60) {
      return 3;
    } else if (this.percentage > 40) {
      return 2;
    } else if (this.percentage > 0) {
      return 1;
    } else if (this.percentage == 0) {
      return 0;
    }
  }
}
