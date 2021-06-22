import ScreenSwitchButton from "./screenSwitchButton.js";
import Rocket from "./rocket.js";
import Timeline from "./timeline.js";
import Speedometer from "./speedometer.js";
import WinLose from "./winLose.js";
import StarBackground from "./starBackground.js";

angleMode(DEGREES);

let playButton = new ScreenSwitchButton(300, 300, 400, 100, "Play");
let quitButton = new ScreenSwitchButton(60, 60, 80, 80, "Quit");
let againButton = new ScreenSwitchButton(150, 150, 450, 450, "Play again");
let exitButton = new ScreenSwitchButton(1010, 650, 100, 100, "Exit");
let timeline = new Timeline(200, 50);
let rocket = new Rocket(750, 450, 0);
let speedometer = new Speedometer(200, 450, 90);
let result = new WinLose(700, 400, 0);

let stars = [];
// erzeugt i-mal Objekte
for (let i = 0; i <= 200; i++) {
  let starBackground = new StarBackground();
  stars.push(starBackground);
}

let state = "start";
let speedometerIsActive = false;
let speedometerRepeatCount = 0; // Wie oft der Tacho gedreht werden. Bei 3 ist Schluss
let engineIsCorrect = 0; // welche Engine wurde richtig geschaltet. =3 launch; <3 crash
let timerIsActive = false;

function resetData() {
  rocket.reset();
  timeline.reset();

  speedometerIsActive = false;
  speedometerRepeatCount = 0;
  speedometer.speedometerRotation = 90;
  speedometer.redMarkLine = 270;

  result.counter = 0;

  engineIsCorrect = 0;
  timerIsActive = false;
}

function myBackground() {
  background(124, 138, 162);

  stars.forEach((star) => {
    star.display();
    star.animation();
  });
}

function startScreen() {
  push();

  myBackground();

  playButton.display();

  fill(103, 185, 154);
  stroke(15, 76, 92);
  strokeWeight(4);
  rect(590, 200, 350, 220, 10);
  fill(15, 76, 92);
  noStroke();
  textSize(20);
  text(
    "Houston we have a problem. \nWe have found errors in the engine.\n\nHelp us to adjust the engine. \nStop the speedometer needle \nat the red marker. \nTo start and stop the needle simply \npress W on your keyboard. ",
    600,
    225
  );

  pop();
}

function gameScreen() {
  push();
  myBackground();

  quitButton.display();

  timeline.display();

  if (timerIsActive) {
    timeline.move();
  }

  if (timeline.end()) {
    timerIsActive = false;
    speedometerRepeatCount = 3;
    speedometerIsActive = false;

    // aktiviert das Feuer ohne Tachoeintrag
    rocket.flameLeftIsActive = true;
    rocket.flameMiddleIsActive = true;
    rocket.flameRightIsActive = true;
  }

  rocket.display();

  // schaut ob man landet oder crashed
  if (speedometerRepeatCount === 3 && engineIsCorrect === 3) {
    timerIsActive = false;
    if (rocket.launch()) {
      state = "end";
    }
  } else if (
    speedometerRepeatCount === 3 &&
    engineIsCorrect >= 0 &&
    engineIsCorrect < 3
  ) {
    timerIsActive = false;
    if (rocket.crash()) {
      state = "end";
    }
  }

  speedometer.display();

  // ON/ OFF - Drehung des Tachos
  if (speedometerIsActive) {
    speedometer.move();
  }

  // Aktiviert das Feuer nach jedem Tachoeintrag
  if (speedometerRepeatCount === 1) {
    rocket.flameLeftIsActive = true;
  }
  if (speedometerRepeatCount === 2) {
    rocket.flameMiddleIsActive = true;
  }
  if (speedometerRepeatCount === 3) {
    rocket.flameRightIsActive = true;
  }

  pop();
}

function endScreen() {
  push();
  myBackground();

  againButton.displayCircle();

  exitButton.displayCircle();

  if (engineIsCorrect === 3) {
    result.myResult = "win";
  } else if (engineIsCorrect < 3) {
    result.myResult = "fail";
  }
  result.display();

  pop();
}

function keyPressed() {
  if (state === "game") {
    // funktioniert nur bei <3
    if (speedometerRepeatCount < 3) {
      // startet Timer
      if (keyIsDown(87) && timerIsActive === false) {
        timerIsActive = true;
      }
      // startet Tacho und setzt rote Markierung neu
      if (keyIsDown(87) && speedometerIsActive === false) {
        speedometer.redMarkLine = Math.random() * 360;
        speedometerIsActive = true;
      }
      //stop Tacho
      else if (keyIsDown(87) && speedometerIsActive) {
        speedometerIsActive = false;
        speedometerRepeatCount += 1;
      }

      // Schaut ob Tachonadel und rote Markierung beieinanderstehen
      if (
        speedometer.speedometerRotation >= speedometer.redMarkLine - 15 &&
        speedometer.speedometerRotation <= speedometer.redMarkLine + 15 &&
        speedometerIsActive === false
      ) {
        console.log("hit");
        engineIsCorrect += 1;
      }
    }
  }
}
window.keyPressed = keyPressed;

function mouseClicked() {
  // console.log(stars);

  if (state === "start") {
    if (playButton.hitTestRec()) {
      state = "game";
    }
  } else if (state === "game") {
    if (quitButton.hitTestRec()) {
      state = "start";
      resetData();
      stars = [];

      for (let i = 0; i <= 200; i++) {
        let starBackground = new StarBackground();
        stars.push(starBackground);
      }
    }
  } else if (state === "end") {
    if (againButton.hitTestCircle()) {
      state = "game";
      resetData();
    } else if (exitButton.hitTestCircle()) {
      state = "start";
      resetData();

      stars = [];

      for (let i = 0; i <= 200; i++) {
        let starBackground = new StarBackground();
        stars.push(starBackground);
      }
    }
  }
}
window.mouseClicked = mouseClicked;

function draw() {
  if (state === "start") {
    startScreen();
  } else if (state === "game") {
    gameScreen();
  } else if (state === "end") {
    endScreen();
  }
  // console.log(timeline.color);
}
window.draw = draw;
