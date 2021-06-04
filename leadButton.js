import Button from "./button.js";

export default class LeadButton extends Button {
  constructor(buttonX, buttonY, buttonWidth, buttonHeight) {
    super(buttonX, buttonY, buttonWidth, buttonHeight);
  }

  display() {
    push();
    fill(0, 244, 0);
    rect(this.buttonX, this.buttonY, this.buttonWidth, this.buttonHeight);
    pop();
  }
}
