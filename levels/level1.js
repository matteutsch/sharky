let level1;

function setLevel() {
  level1 = new Level(returnEnemies(), returnBackground(), returnCollectables());
}

function returnEnemies() {
  return [
    new JellyPurple(500, 100),
    new JellyPurple(700, 120),
    new JellyPurple(900, 110),
    new JellyPurple(1200, 100),
    new JellyPink(800, 200),
    new JellyPink(1100, 240),
    new JellyPink(1300, 180),
    new JellyGreen(1000, 100),
    new JellyGreen(1405, 222),
    new JellyGreen(1600, 111),
    new PufferGreen(),
    new PufferGreen(),
    new PufferGreen(),
    new PufferOrange(),
    new PufferOrange(),
    new PufferOrange(),
    new PufferRed(),
    new PufferRed(),
    new PufferRed(),
    new Endboss(),
  ];
}

function returnBackground() {
  return [
    new BackgroundObject("img/3. Background/Layers/5. Water/D2.png", -900),
    new BackgroundObject("img/3. Background/Layers/4.Fondo 2/D2.png", -900),
    new BackgroundObject("img/3. Background/Layers/3.Fondo 1/L2.png", -900),
    new BackgroundObject("img/3. Background/Layers/2. Floor/D2.png", -900),

    new BackgroundObject("img/3. Background/Layers/5. Water/D1.png", 0),
    new BackgroundObject("img/3. Background/Layers/4.Fondo 2/D1.png", 0),
    new BackgroundObject("img/3. Background/Layers/3.Fondo 1/L1.png", 0),
    new BackgroundObject("img/3. Background/Layers/2. Floor/D1.png", 0),

    new BackgroundObject("img/3. Background/Layers/5. Water/D2.png", 900),
    new BackgroundObject("img/3. Background/Layers/4.Fondo 2/D2.png", 900),
    new BackgroundObject("img/3. Background/Layers/3.Fondo 1/L2.png", 900),
    new BackgroundObject("img/3. Background/Layers/2. Floor/D2.png", 900),

    new BackgroundObject("img/3. Background/Layers/5. Water/D1.png", 1800),
    new BackgroundObject("img/3. Background/Layers/4.Fondo 2/D1.png", 1800),
    new BackgroundObject("img/3. Background/Layers/3.Fondo 1/L1.png", 1800),
    new BackgroundObject("img/3. Background/Layers/2. Floor/D1.png", 1800),
  ];
}

function returnCollectables() {
  return [
    new Coin(510, 400),
    new Coin(710, 300),
    new Coin(825, 250),
    new Coin(910, 200),
    new Coin(1025, 300),
    new Coin(1125, 350),
    new Coin(1210, 400),
    new Coin(1325, 350),
    new Coin(1430, 300),
    new Coin(1625, 200),
    new Poison(240, 280),
    new Poison(950, 400),
    new Poison(1440, 410),
    new Poison(1860, 390),
    new Poison(440, 400),
    new Poison(710, 370),
    new Poison(-150, 370),
    new Poison(-250, 400),
    new Poison(-350, 370),
    new Poison(-450, 400),
  ];
}

setLevel();
