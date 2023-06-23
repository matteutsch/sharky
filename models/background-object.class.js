class BackgroundObject extends MovableObject {
  width = 900;
  height = 500;
  x;
  y = 0;

  constructor(path, x) {
    super().loadImage(path);
    this.x = x;
  }
}
