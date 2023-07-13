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
  updateLastInteractionTime();
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

function mobileButtonEvents() {
  document.getElementById("btn-right").ontouchstart = (e) => {
    e.preventDefault();
    keyboard.RIGHT = true;
    updateLastInteractionTime();
  };

  document.getElementById("btn-right").ontouchend = (e) => {
    e.preventDefault();
    keyboard.RIGHT = false;
  };

  document.getElementById("btn-left").ontouchstart = (e) => {
    e.preventDefault();
    keyboard.LEFT = true;
    updateLastInteractionTime();
  };

  document.getElementById("btn-left").ontouchend = (e) => {
    e.preventDefault();
    keyboard.LEFT = false;
  };

  document.getElementById("btn-up").ontouchstart = (e) => {
    e.preventDefault();
    keyboard.UP = true;
    updateLastInteractionTime();
  };

  document.getElementById("btn-up").ontouchend = (e) => {
    e.preventDefault();
    keyboard.UP = false;
  };

  document.getElementById("btn-down").ontouchstart = (e) => {
    e.preventDefault();
    keyboard.DOWN = true;
    updateLastInteractionTime();
  };

  document.getElementById("btn-down").ontouchend = (e) => {
    e.preventDefault();
    keyboard.DOWN = false;
  };

  document.getElementById("btn-attack").ontouchstart = (e) => {
    e.preventDefault();
    keyboard.SPACE = true;
    updateLastInteractionTime();
  };

  document.getElementById("btn-attack").ontouchend = (e) => {
    e.preventDefault();
    keyboard.SPACE = false;
  };
}
