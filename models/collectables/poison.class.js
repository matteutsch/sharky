class Poison extends MovableObject {
  height = 70;
  width = 50;

  IMAGES_POISON = [
    "../../img/4. Marcadores/Posión/Animada/1.png",
    "../../img/4. Marcadores/Posión/Animada/2.png",
    "../../img/4. Marcadores/Posión/Animada/3.png",
    "../../img/4. Marcadores/Posión/Animada/4.png",
    "../../img/4. Marcadores/Posión/Animada/5.png",
    "../../img/4. Marcadores/Posión/Animada/6.png",
    "../../img/4. Marcadores/Posión/Animada/7.png",
    "../../img/4. Marcadores/Posión/Animada/8.png",
  ];

  constructor(x, y) {
    super();
    this.loadImages(this.IMAGES_POISON);
    this.x = x;
    this.y = y;
    this.animate();
  }

  animate() {
    setInterval(() => {
      this.playAnimation(this.IMAGES_POISON);
    }, 1000 / 12);
  }
}
