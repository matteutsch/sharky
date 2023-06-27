class DrawableObject {
  x;
  y;
  height;
  width;
  img;
  imageCache = [];
  currentImage = 0;

  loadImage(path) {
    this.img = new Image();
    this.img.src = path;
  }
  loadImages(arr) {
    arr.forEach((path) => {
      let img = new Image();
      img.src = path;
      this.imageCache[path] = img;
    });
  }
  draw(ctx) {
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
  }
  drawFrame(ctx) {
    if (
      this instanceof Character ||
      this instanceof PufferFish ||
      this instanceof JellyFish ||
      this instanceof JellyPurple ||
      this instanceof Endboss ||
      this instanceof ShootableObject
    ) {
      ctx.beginPath();
      ctx.lineWidth = "4";
      ctx.strokeStyle = "transparent";
      if (this instanceof Character) {
        ctx.rect(this.x + 50, this.y + 120, this.width - 80, this.height - 170);
      } else {
        ctx.rect(this.x, this.y, this.width, this.height);
      }
      ctx.stroke();
    }
  }
}
