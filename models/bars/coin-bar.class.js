class CoinBar extends DrawableObject {
  x = 360;
  y = 0;
  width = 160;
  height = 50;
  percentage;
  coins;

  IMAGES_COINS = [
    "img/4. Marcadores/Purple/0_C.png",
    "img/4. Marcadores/Purple/20_C.png",
    "img/4. Marcadores/Purple/40_C.png",
    "img/4. Marcadores/Purple/60_C.png",
    "img/4. Marcadores/Purple/80_C.png",
    "img/4. Marcadores/Purple/100_C.png",
  ];

  constructor() {
    super();
    this.loadImages(this.IMAGES_COINS);
    this.setPercentageCoin(0);
  }

  setPercentageCoin(coins) {
    this.coins = coins;
    let path = this.IMAGES_COINS[this.coins];
    this.img = this.imageCache[path];
  }
}
