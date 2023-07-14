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
  checkMobileButtons();
  muteAll();
}

function checkMobileButtons() {
  let hud = document.getElementById("hud");
  if (
    window.innerWidth <= 1024 ||
    (window.innerHeight <= 1180 && window.innerWidth <= 820)
  ) {
    hud.classList.remove("d-none");
    mobileButtonEvents();
  }
}

////////////////
function checkDeviceOrientation() {
  let startContainer = document.getElementById("start-container");
  let checkOrientation = setInterval(() => {
    let screenWidth = window.screen.width;
    let screenHeight = window.screen.height;
    if (screenWidth > screenHeight) {
      init();
      clearInterval(checkOrientation);
    } else {
      startContainer.classList.add("d-none");
      document.getElementById("rotate").classList.remove("d-none");
    }
  }, 1000);
}
//////////

function toggleMute() {
  toggleMuteImage();
  toggleMuteAudio();
}

function toggleMuteImage() {
  let mute = document.getElementById("mute");
  if (mute.src.includes("unmute.png")) {
    mute.src = "img/6.Botones/mute.png";
  } else {
    mute.src = "img/6.Botones/unmute.png";
  }
}

function toggleSettings() {
  let settings = document.getElementById("howToPlay");
  settings.classList.toggle("d-none");
}

function showEndScreen(img) {
  endScreen.classList.remove("d-none");
  canvas.classList.add("d-none");
  endScreen.style.backgroundImage = `url('${img}')`;
  let hud = document.getElementById("hud");
  hud.classList.add("d-none");
}

function backToMenu() {
  let startContainer = document.getElementById("start-container");
  endScreen.classList.add("d-none");
  startScreen.classList.remove("d-none");
  startContainer.classList.remove("d-none");
  document.getElementById("rotate").classList.add("d-none");
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
