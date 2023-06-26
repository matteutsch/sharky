class PoisonBar extends DrawableObject {
  x = 540;
  y = 0;
  width = 160;
  height = 50;
  IMAGES_POISON = [
    "../img/4. Marcadores/Purple/0_P.png",
    "../img/4. Marcadores/Purple/20_P.png",
    "../img/4. Marcadores/Purple/40_P.png",
    "../img/4. Marcadores/Purple/60_P.png",
    "../img/4. Marcadores/Purple/80_P.png",
    "../img/4. Marcadores/Purple/100_P.png",
  ];

  constructor() {
    super();
    this.loadImage(this.IMAGES_POISON[4]);
  }
}
