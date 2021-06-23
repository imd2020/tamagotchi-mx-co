import Fin from "./rocketPieces/fin.js";
import Engine from "./rocketPieces/engine.js";
import Cockpit from "./rocketPieces/cockpit.js";
import EngineFlame from "./rocketPieces/engineFlame.js";

export default class Rocket {
  constructor(rocketX, rocketY, rocketRotation) {
    this.rocketX = rocketX;
    this.rocketY = rocketY;
    this.rocketRotation = rocketRotation;
    this.flameLeftIsActive = false;
    this.flameMiddleIsActive = false;
    this.flameRightIsActive = false;

    this.finLeft = new Fin(1);
    this.finRight = new Fin(-1);
    this.engine = new Engine();
    this.cockpit = new Cockpit();

    this.flamesLeftList = [];
    this.flamesMiddleList = [];
    this.flamesRightList = [];

    this.counter = 0;
  }

  display() {
    push();

    translate(this.rocketX, this.rocketY);

    rotate(this.rocketRotation);
    scale(1.2);
    fill(12, 21, 49);
    noStroke();
    rect(-50, -100, 100, 200, 0, 0, 20, 20);

    fill(186, 183, 205);
    rect(-50, -100, 100, 100, 0, 0, 50, 50);
    rect(-50, -30, 100, 130, 50, 50, 30, 30);

    fill(125, 78, 87);

    for (let i = 3; i >= 0; i--) {
      rect(-35 + 20 * i, 5, 10, 80, 20);
    }

    this.finLeft.display();
    this.finRight.display();

    this.flameParticle();

    this.engine.display();
    this.cockpit.display();

    pop();
  }

  flameParticle() {
    if (this.flameLeftIsActive) {
      let engineFlameLeft = new EngineFlame(-28, 140);
      this.flamesLeftList.push(engineFlameLeft);

      // mit for-Schleife
      // for (let i = this.flamesLeftList.length - 1; i >= 0; i--) {
      // for (let i = 0; i <= this.flamesLeftList.length - 1; i++) {
      //   this.flamesLeftList[i].display();
      //   this.flamesLeftList[i].animation();

      //   if (this.flamesLeftList[i].flameOpacity < 0) {
      //     this.flamesLeftList.splice(i, 1);
      //   }
      // }

      // mit ForEach
      this.flamesLeftList.forEach((flamesLeft, index) => {
        flamesLeft.display();
        flamesLeft.animation();

        // löscht jedes Objekt mit einer opacity von unter -10
        if (flamesLeft.flameOpacity <= -10) {
          this.flamesLeftList.splice(index, 1);
          // console.log(index);
        }
      });
    }
    if (this.flameMiddleIsActive) {
      let engineFlameMiddle = new EngineFlame(0, 140);
      this.flamesMiddleList.push(engineFlameMiddle);

      this.flamesMiddleList.forEach((flamesMiddle, index) => {
        flamesMiddle.display();
        flamesMiddle.animation();

        // löscht jedes Objekt mit einer opacity von unter -10
        if (flamesMiddle.flameOpacity <= -10) {
          this.flamesMiddleList.splice(index, 1);
          // console.log(index);
        }
      });
    }
    if (this.flameRightIsActive) {
      let engineFlameRight = new EngineFlame(25, 140);
      this.flamesRightList.push(engineFlameRight);

      this.flamesRightList.forEach((flamesRight, index) => {
        flamesRight.display();
        flamesRight.animation();
        // löscht jedes Objekt mit einer opacity von unter -10
        if (flamesRight.flameOpacity <= -10) {
          this.flamesRightList.splice(index, 1);
        }
      });
    }
  }

  launch() {
    this.counter += 0.25;
    this.rocketY = this.rocketY - this.counter;
    if (this.rocketY <= -250) {
      return true;
    }
  }

  crash() {
    this.counter += 0.1;

    this.rocketX = this.rocketX + this.counter;

    this.rocketY = this.rocketY - this.counter;
    this.rocketRotation = this.rocketRotation + 0.2;

    if (this.rocketX >= 1380) {
      return true;
    }
  }

  reset() {
    this.rocketX = 750;
    this.rocketY = 450;
    this.rocketRotation = 0;
    this.counter = 0;

    this.flameLeftIsActive = false;
    this.flameMiddleIsActive = false;
    this.flameRightIsActive = false;

    this.flamesLeftList = [];
    this.flamesMiddleList = [];
    this.flamesRightList = [];
  }
}
