export default class WinLose {
  constructor(resultX, resultY, resultR) {
    this.resultX = resultX;
    this.resultY = resultY;

    this.resultSinY = 0;

    this.resultR = resultR;
    this.counter = 0;

    this.myResult = "fail";
  }

  display() {
    push();
    translate(this.resultX, this.resultSinY);

    push();
    rotate(this.resultR);
    textSize(50);

    textAlign(CENTER);
    fill(168, 215, 197);
    if (this.myResult === "win") {
      text("Congratulation\nYou launched successfully", 0, 0);
      this.animationWin();
    } else if (this.myResult === "fail") {
      text("CRASH\nYou failed!", 0, 0);
      this.animationLose();
    }
    pop();
    pop();
  }

  animationWin() {
    this.counter += 2;

    this.resultSinY = sin(this.counter) * 50 + this.resultY;
    this.resultR = sin(2 * this.counter) * 2;
  }

  animationLose() {
    this.counter += 2;

    this.resultSinY = sin(this.counter) * 30 + this.resultY;
  }
}
