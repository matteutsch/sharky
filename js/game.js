let canvas;
let endScreen;
let startScreen;
let world;
let keyboard = new Keyboard();
let lastInteractionTime = new Date().getTime();

/**
 * Clears all active intervals.
 */
function clearAllIntervals() {
  for (let i = 1; i < 9999; i++) window.clearInterval(i);
}

/**
 * Initializes the game.
 */
function init() {
  canvas = document.getElementById("canvas");
  world = new World(canvas, keyboard);
  handleInit();
  checkMobileButtons();
  muteAll();
}

function handleInit() {
  endScreen = document.getElementById("end-screen");
  startScreen = document.getElementById("start-screen");
  document.getElementById("mute").classList.remove("d-none");
  startScreen.classList.add("d-none");
  canvas.classList.remove("d-none");
  endScreen.classList.add("d-none");
}

/**
 * Checks for mobile buttons and shows them if applicable.
 */
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

/**
 * Checks the device orientation and handles the screen rotation.
 */
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

/**
 * Toggles the mute state of the game.
 */
function toggleMute() {
  toggleMuteImage();
  toggleMuteAudio();
}

/**
 * Toggles the mute image.
 */
function toggleMuteImage() {
  let muteImg = document.getElementById("mute");
  if (!mute) {
    muteImg.src = "img/6.Botones/mute.png";
  } else {
    muteImg.src = "img/6.Botones/unmute.png";
  }
}

/**
 * Toggles the game settings visibility.
 */
function toggleSettings() {
  let settings = document.getElementById("howToPlay");
  settings.classList.toggle("d-none");
}

/**
 * Shows the end screen with the specified image.
 * @param {string} img - The URL of the background image.
 */
function showEndScreen(img) {
  endScreen.classList.remove("d-none");
  canvas.classList.add("d-none");
  endScreen.style.backgroundImage = `url('${img}')`;
  let hud = document.getElementById("hud");
  hud.classList.add("d-none");
}

/**
 * Jumps back to the main menu.
 */
function backToMenu() {
  let startContainer = document.getElementById("start-container");
  endScreen.classList.add("d-none");
  startScreen.classList.remove("d-none");
  startContainer.classList.remove("d-none");
  document.getElementById("rotate").classList.add("d-none");
  document.getElementById("mute").classList.add("d-none");
  muteAll();
}

/**
 * Checks if the player is AFK (Away From Keyboard).
 * @returns {boolean} - True if the player is AFK, false otherwise.
 */
function isAFK() {
  let currentTime = new Date().getTime();
  let timeElapsed = (currentTime - lastInteractionTime) / 1000;

  if (timeElapsed >= 5) {
    return true;
  } else {
    return false;
  }
}

/**
 * Updates the last interaction time to the current time.
 */
function updateLastInteractionTime() {
  lastInteractionTime = new Date().getTime();
}
