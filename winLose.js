export default class WinLose {
  constructor(resultX, resultY, resultR) {
    this.resultX = resultX;
    this.resultY = resultY;

    this.resultS = 0.8;

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
    scale(this.resultS);
    textSize(50);

    textAlign(CENTER);
    fill(168, 215, 197);

    if (this.myResult === "win") {
      text("Congratulations\nYou launched successfully", 0, 0);
      this.animationWin();
    } else if (this.myResult === "fail") {
      text("Crash\nYou failed!", 0, 0);
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

  gsapAnimation(duration, scale, repeat, yoyo) {
    gsap.to(this, {
      duration: duration,
      resultS: scale,
      ease: "elastic",
      repeat: repeat,
      yoyo: yoyo,
    });
  }
}
