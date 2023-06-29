class PufferBubble extends MovableObject {
  height = 60;
  width = 80;
  x = 1800 + Math.random() * 900;
  y = Math.random() * 50 + Math.random() * 200;
  speed = Math.random() * 0.5 + Math.random() * 0.5;
  IMAGES_BUBBLE = [
    "img/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/2.bubbleswim1.png",
    "img/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/2.bubbleswim2.png",
    "img/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/2.bubbleswim3.png",
    "img/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/2.bubbleswim4.png",
    "img/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/2.bubbleswim5.png",
  ];

  constructor() {
    super();
    this.loadImages(this.IMAGES_BUBBLE);
    this.animate();
  }

  animate() {
    setInterval(() => {
      this.backAndForth();
    }, 1000 / 60);

    setInterval(() => {
      this.playAnimation(this.IMAGES_BUBBLE);
    }, 1000 / 11);
  }
}
