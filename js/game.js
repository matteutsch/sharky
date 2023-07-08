let canvas;
let world;
let keyboard = new Keyboard();
let intervalIds = [];

function setStoppableInterval(fn, time) {
  let id = setInterval(fn, time);
  intervalIds.push(id);
}

function stopGame() {
  intervalIds.forEach(clearInterval);
}

function restart() {
  location.reload(); // quick fix for now
}

function backToMenu() {
  let endScreen = document.getElementById("end-screen");
  endScreen.classList.add("d-none");
  let startScreen = document.getElementById("start-screen");
  startScreen.classList.remove("d-none");
}

function init() {
  canvas = document.getElementById("canvas");
  world = new World(canvas, keyboard);
  let endScreen = document.getElementById("end-screen");
  let overlay = document.getElementById("start-screen");
  overlay.classList.add("d-none");
  canvas.classList.remove("d-none");
  endScreen.classList.add("d-none");
}

function toggleSettings() {
  let settings = document.getElementById("howToPlay");
  settings.classList.toggle("d-none");
}

function showEndScreen(img) {
  let endScreen = document.getElementById("end-screen");
  let canvas = document.getElementById("canvas");
  endScreen.classList.remove("d-none");
  endScreen.style.backgroundImage = `url('${img}')`;
  canvas.classList.add("d-none");
}

window.addEventListener("keydown", (e) => {
  if (e.keyCode == 39) {
    keyboard.RIGHT = true;
  }
  if (e.keyCode == 37) {
    keyboard.LEFT = true;
  }
  if (e.keyCode == 38) {
    keyboard.UP = true;
  }
  if (e.keyCode == 40) {
    keyboard.DOWN = true;
  }
  if (e.keyCode == 32) {
    keyboard.SPACE = true;
  }
  if (e.keyCode == 68) {
    keyboard.D = true;
  }
});

window.addEventListener("keyup", (e) => {
  if (e.keyCode == 39) {
    keyboard.RIGHT = false;
  }
  if (e.keyCode == 37) {
    keyboard.LEFT = false;
  }
  if (e.keyCode == 38) {
    keyboard.UP = false;
  }
  if (e.keyCode == 40) {
    keyboard.DOWN = false;
  }
  if (e.keyCode == 32) {
    keyboard.SPACE = false;
  }
  if (e.keyCode == 68) {
    keyboard.D = false;
  }
});
