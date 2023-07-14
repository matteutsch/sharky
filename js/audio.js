let background_music = new Audio("audio/background.mp3");
let collectables_sound = new Audio("audio/collectables.mp3");
let hit_sound = new Audio("audio/hit.mp3");
let boss_fight = new Audio("audio/boss_fight.mp3");
let boss_hurt = new Audio("audio/endboss_hurt.mp3");
let endboss_dying = new Audio("audio/endboss_dying.mp3");
let bubble_sound = new Audio("audio/singleBubble.mp3");
let character_blow = new Audio("audio/blow.mp3");
let character_hurt = new Audio("audio/character_hurt.mp3");
let character_dying = new Audio("audio/character_dying.mp3");
let win_sound = new Audio("audio/win.mp3");
let lose_sound = new Audio("audio/lose.mp3");

let mute = true;

function toggleMuteAudio() {
  if (mute) {
    unMuteAll();
  } else {
    muteAll();
  }
}

function muteAll() {
  background_music.volume = 0;
  collectables_sound.volume = 0;
  hit_sound.volume = 0;
  boss_fight.volume = 0;
  boss_hurt.volume = 0;
  endboss_dying.volume = 0;
  bubble_sound.volume = 0;
  character_blow.volume = 0;
  character_hurt.volume = 0;
  character_dying.volume = 0;
  win_sound.volume = 0;
  lose_sound.volume = 0;
  mute = true;
}

function unMuteAll() {
  background_music.volume = 1;
  collectables_sound.volume = 1;
  hit_sound.volume = 1;
  boss_fight.volume = 1;
  boss_hurt.volume = 1;
  endboss_dying.volume = 1;
  bubble_sound.volume = 1;
  character_blow.volume = 1;
  character_hurt.volume = 1;
  character_dying.volume = 1;
  win_sound.volume = 1;
  lose_sound.volume = 1;
  mute = false;
}
