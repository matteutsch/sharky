class Level {
  enemies;
  backgroundObjects;
  collectables;
  level_end_x = 1800;

  constructor(enemies, backgroundObjects, collectables) {
    this.enemies = enemies;
    this.backgroundObjects = backgroundObjects;
    this.collectables = collectables;
  }
}
