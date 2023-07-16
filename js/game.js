let canvas;
let endScreen;
let startScreen;
let world;
let keyboard = new Keyboard();
let lastInteractionTime = new Date().getTime();
let fullscreenMode = false;

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

/**
 * Handles the initialization of the game.
 */
function handleInit() {
  endScreen = document.getElementById("end-screen");
  startScreen = document.getElementById("start-screen");
  document.getElementById("canvas-container").classList.remove("d-none");
  document.getElementById("mute-fs").classList.remove("d-none");
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
 * Toggles the fullscreen mode of the game.
 */
function toggleFullscreen() {
  let fullscreen = document.getElementById("fullscreen");
  if (!fullscreenMode) {
    openFullscreen(fullscreen);
    fullscreenMode = true;
  } else {
    closeFullscreen();
    fullscreenMode = false;
  }
  toggleFullscreenImage();
}

/**
 * Opens the fullscreen mode for the specified element.
 *
 * @param {HTMLElement} elem - The element to open in fullscreen mode.
 */
function openFullscreen(elem) {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) {
    /* Safari */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) {
    /* IE11 */
    elem.msRequestFullscreen();
  }
  extendCanvas();
}

/**
 * Closes the fullscreen mode.
 */
function closeFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.webkitExitFullscreen) {
    /* Safari */
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) {
    /* IE11 */
    document.msExitFullscreen();
  }
  shrinkCanvas();
}

/**
 * Extends the canvas size for fullscreen mode.
 */
function extendCanvas() {
  document
    .getElementById("canvas-container")
    .classList.add("extend-canvas-container");
  document.getElementById("canvas").classList.add("extend-canvas");
}

/**
 * Shrinks the canvas size after exiting fullscreen mode.
 */
function shrinkCanvas() {
  document
    .getElementById("canvas-container")
    .classList.remove("extend-canvas-container");
  document.getElementById("canvas").classList.remove("extend-canvas");
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
    muteImg.src = "img/6.Botones/mute2.png";
  } else {
    muteImg.src = "img/6.Botones/speaker2.png";
  }
}

/**
 * Toggles the fullscreen image.
 */
function toggleFullscreenImage() {
  let fsImg = document.getElementById("enterFS");
  if (!fullscreenMode) {
    fsImg.src = " img/6.Botones/fullscreen_enter.png";
  } else {
    fsImg.src = "img/6.Botones/fullscreen_exit.png";
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
  document.getElementById("canvas-container").classList.add("d-none");
  hideButtons();
}

/**
 * Hides Mute, Fullscreen and Hud Icons
 */
function hideButtons() {
  document.getElementById("hud").classList.add("d-none");
  document.getElementById("mute-fs").classList.add("d-none");
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
  document.getElementById("canvas-container").classList.add("d-none");
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
