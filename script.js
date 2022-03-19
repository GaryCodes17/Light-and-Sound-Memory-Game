//Global constants
const clueHoldTime = 1000; //how long to hold each clue's light/sound (ms)
const cluePauseTime = 333; //how long to pause in between clues
const nextClueWaitTime = 1000; //how long to wait before starting playback of the clue sequence

//Global variables
var pattern = [2, 2, 1, 3, 4, 5, 3, 1]; //stores secret pattern of clues
var progress = 0; //keeps track of the turn
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5; //must be between 0.0 and 1.0
var guessCounter = 0; //keeps track of the clue sequence

function startGame() {
  //initialize game variables
  progress = 0;
  gamePlaying = true;

  //swap the Start and Stop buttons
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");

  playClueSequence();
}

function stopGame() {
  gamePlaying = false;

  //swap the Start and Stop buttons
  document.getElementById("startBtn").classList.remove("hidden");
  document.getElementById("stopBtn").classList.add("hidden");
}

// Sound Synthesis Functions
const freqMap = {
  //different pitches of sound
  //higher numbers = higher pitch, lower = lower pitch
  1: 661.6,
  2: 529.6,
  3: 852,
  4: 466.2,
  5: 772.8,
};

//Plays tone for specific amount of time from the 4 buttons
function playTone(btn, len) {
  o.frequency.value = freqMap[btn];
  g.gain.setTargetAtTime(volume, context.currentTime + 0.05, 0.025);
  context.resume();
  tonePlaying = true;
  setTimeout(function () {
    stopTone();
  }, len);
}

//breaks up playing the tone into two steps: startTone and stopTone
function startTone(btn) {
  if (!tonePlaying) {
    context.resume();
    o.frequency.value = freqMap[btn];
    g.gain.setTargetAtTime(volume, context.currentTime + 0.05, 0.025);
    context.resume();
    tonePlaying = true;
  }
}

function stopTone() {
  g.gain.setTargetAtTime(0, context.currentTime + 0.05, 0.025);
  tonePlaying = false;
}

// Page Initialization
// Init Sound Synthesizer
var AudioContext = window.AudioContext || window.webkitAudioContext;
var context = new AudioContext();
var o = context.createOscillator();
var g = context.createGain();
g.connect(context.destination);
g.gain.setValueAtTime(0, context.currentTime);
o.connect(g);
o.start(0);

//shows the button playing the sound a different color
function lightButton(btn) {
  document.getElementById("button" + btn).classList.add("lit");
}

//turns off the different color being shown on the button being pressed/sound playing from
function clearButton(btn) {
  document.getElementById("button" + btn).classList.remove("lit");
}

//computer plays the sound from buttons
function playSingleClue(btn) {
  if (gamePlaying) {
    lightButton(btn);
    playTone(btn, clueHoldTime);
    setTimeout(clearButton, clueHoldTime, btn);
  }
}

//plays pattern of sound
function playClueSequence() {
  guessCounter = 0;
  let delay = nextClueWaitTime; //set delay to initial wait time
  for (let i = 0; i <= progress; i++) {
    // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms");
    setTimeout(playSingleClue, delay, pattern[i]); // set a timeout to play that clue
    delay += clueHoldTime;
    delay += cluePauseTime;
  }
}

//stops the game after user makes a mistake
function loseGame() {
  stopGame();
  alert("Game Over. You lost.");
}

//stops the game when user wins the game
function winGame() {
  stopGame();
  alert("Game Over. You won!");
}

function guess(btn) {
  console.log("user guessed: " + btn);
  if (!gamePlaying) {
    return;
  }

  //game logic
  //if the button pressed does not match the sound played
  if (btn != pattern[guessCounter]) {
    loseGame();
  } else {
    //if it does match
    //if the turn is not over
    if (progress != guessCounter) {
      guessCounter++;
    } else {
      //if turn is over
      //if it is not the last turn
      if (pattern.length - 1 != progress) {
        progress++;
        playClueSequence();
      } else {
        //if it is the last turn
        winGame();
      }
    }
  }
}
