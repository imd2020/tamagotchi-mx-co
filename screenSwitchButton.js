import Button from "./button.js";

export default class ScreenSwitchButton extends Button {
  constructor(buttonX, buttonY, buttonWidth, buttonHeight, myText) {
    super(buttonX, buttonY, buttonWidth, buttonHeight);
    this.myText = myText;

    this.buttonOpacity = 150;
  }

  display() {
    push();

    translate(this.buttonX, this.buttonY);

    if (this.hitTestRec()) {
      this.buttonOpacity = 255;
    } else {
      this.buttonOpacity = 150;
    }

    fill(103, 185, 154, this.buttonOpacity);

    stroke(15, 76, 92);
    strokeWeight(5);
    rect(
      -this.buttonWidth / 2,
      -this.buttonHeight / 2,
      this.buttonWidth,
      this.buttonHeight,
      5
    );
    fill(0);
    noStroke();
    textSize(25);

    textAlign(CENTER);
    text(this.myText, 0, 10);

    pop();
  }

  displayCircle() {
    push();

    translate(this.buttonX, this.buttonY);

    if (this.hitTestCircle()) {
      this.buttonOpacity = 200;
    } else {
      this.buttonOpacity = 150;
    }
    fill(103, 185, 154, this.buttonOpacity);

    stroke(15, 76, 92);
    strokeWeight(5);
    ellipse(0, 0, this.buttonWidth, this.buttonHeight);

    noStroke();

    fill(0);
    textAlign(CENTER);
    textSize(25);
    text(this.myText, 0, 10);

    pop();
  }
}
