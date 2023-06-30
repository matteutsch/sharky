class PoisonBar extends DrawableObject {
  x = 540;
  y = 0;
  width = 160;
  height = 50;
  poison;

  IMAGES_POISON = [
    "img/4. Marcadores/Purple/0_P.png",
    "img/4. Marcadores/Purple/20_P.png",
    "img/4. Marcadores/Purple/40_P.png",
    "img/4. Marcadores/Purple/60_P.png",
    "img/4. Marcadores/Purple/80_P.png",
    "img/4. Marcadores/Purple/100_P.png",
  ];

  constructor() {
    super();
    this.loadImages(this.IMAGES_POISON);
    this.setPercentagePoison(0);
  }

  setPercentagePoison(poison) {
    this.poison = poison;
    let path = this.IMAGES_POISON[this.poison];
    this.img = this.imageCache[path];
  }
}
