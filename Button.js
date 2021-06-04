export default class Button {
  constructor(buttonX, buttonY, buttonWidth, buttonHeight) {
    this.buttonX = buttonX;
    this.buttonY = buttonY;
    this.buttonWidth = buttonWidth;
    this.buttonHeight = buttonHeight;
  }

  hitTest() {
    if (
      mouseX >= this.buttonX &&
      mouseX <= this.buttonX + this.buttonWidth &&
      mouseY >= this.buttonY &&
      mouseY <= this.buttonY + this.buttonHeight
    ) {
      console.log("hallo");
    }
  }
}
