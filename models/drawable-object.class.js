class DrawableObject {
  x;
  y;
  height;
  width;
  img;
  imageCache = [];
  currentImage = 0;

  /**
   * Loads an image from the specified path and assigns it to the instance.
   * @param {string} path - The path of the image.
   */
  loadImage(path) {
    this.img = new Image();
    this.img.src = path;
  }

  /**
   * Loads multiple images from the given array of paths and caches them.
   * @param {string[]} arr - The array of image paths.
   */
  loadImages(arr) {
    arr.forEach((path) => {
      let img = new Image();
      img.src = path;
      this.imageCache[path] = img;
    });
  }

  /**
   * Draws the image on the canvas context.
   * @param {CanvasRenderingContext2D} ctx - The canvas context.
   */
  draw(ctx) {
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
  }

  /**
   * Draws a rectangular frame around the object on the canvas context.
   * @param {CanvasRenderingContext2D} ctx - The canvas context.
   */
  drawFrame(ctx) {
    if (
      !(this instanceof BackgroundObject) &&
      !(this instanceof StatusBar) &&
      !(this instanceof CoinBar) &&
      !(this instanceof PoisonBar) &&
      !(this instanceof StatusBarEndboss)
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
