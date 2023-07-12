let canvas;
let endScreen;
let startScreen;
let world;
let keyboard = new Keyboard();
let lastInteractionTime = new Date().getTime();

function clearAllIntervals() {
  for (let i = 1; i < 9999; i++) window.clearInterval(i);
}

function init() {
  canvas = document.getElementById("canvas");
  world = new World(canvas, keyboard);
  endScreen = document.getElementById("end-screen");
  startScreen = document.getElementById("start-screen");
  startScreen.classList.add("d-none");
  canvas.classList.remove("d-none");
  endScreen.classList.add("d-none");
}

function toggleSettings() {
  let settings = document.getElementById("howToPlay");
  settings.classList.toggle("d-none");
}

function showEndScreen(img) {
  endScreen.classList.remove("d-none");
  canvas.classList.add("d-none");
  endScreen.style.backgroundImage = `url('${img}')`;
}

function backToMenu() {
  endScreen.classList.add("d-none");
  startScreen.classList.remove("d-none");
}

function isAFK() {
  let currentTime = new Date().getTime();
  let timeElapsed = (currentTime - lastInteractionTime) / 1000;

  if (timeElapsed >= 5) {
    return true;
  } else {
    return false;
  }
}

function updateLastInteractionTime() {
  lastInteractionTime = new Date().getTime();
}
