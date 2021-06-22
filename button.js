export default class Button {
  constructor(buttonX, buttonY, buttonWidth, buttonHeight) {
    this.buttonX = buttonX;
    this.buttonY = buttonY;
    this.buttonWidth = buttonWidth;
    this.buttonHeight = buttonHeight;
  }

  hitTestRec() {
    if (
      mouseX >= this.buttonX - this.buttonWidth / 2 &&
      mouseX <= this.buttonX + this.buttonWidth / 2 &&
      mouseY >= this.buttonY - this.buttonHeight / 2 &&
      mouseY <= this.buttonY + this.buttonHeight / 2
    ) {
      // console.log("hallo");
      return true;
    }
  }
  hitTestCircle() {
    let d = dist(mouseX, mouseY, this.buttonX, this.buttonY);

    if (d <= this.buttonWidth / 2) {
      return true;
    }
  }
}
