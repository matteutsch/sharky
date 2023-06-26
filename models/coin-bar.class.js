class CoinBar extends DrawableObject {
  x = 360;
  y = 0;
  width = 160;
  height = 50;

  IMAGES_COINS = [
    "../img/4. Marcadores/Purple/0_C.png",
    "../img/4. Marcadores/Purple/20_C.png",
    "../img/4. Marcadores/Purple/40_C.png",
    "../img/4. Marcadores/Purple/60_C.png",
    "../img/4. Marcadores/Purple/80_C.png",
    "../img/4. Marcadores/Purple/100_C.png",
  ];

  constructor() {
    super();
    this.loadImage(this.IMAGES_COINS[2]);
  }
}
