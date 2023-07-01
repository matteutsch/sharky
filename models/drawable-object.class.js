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
      !(this instanceof BackgroundObject) &&
      !(this instanceof StatusBar) &&
      !(this instanceof CoinBar) &&
      !(this instanceof PoisonBar)
    ) {
      ctx.beginPath();
      ctx.lineWidth = "4";
      ctx.strokeStyle = "transparent";
      if (this instanceof Character) {
        ctx.rect(this.x + 50, this.y + 120, this.width - 80, this.height - 170);
      } else if (this instanceof Endboss) {
        ctx.rect(this.x + 20, this.y + 200, this.width - 60, this.height - 280);
      } else {
        ctx.rect(this.x, this.y, this.width, this.height);
      }
      ctx.stroke();
    }
  }
}
