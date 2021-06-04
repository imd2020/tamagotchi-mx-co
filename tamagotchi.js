import LeadButton from "./leadButton.js";

let button1 = new LeadButton(200, 200, 100, 100);

function mouseClicked() {
  button1.hitTest();
}
window.mouseClicked = mouseClicked;

function draw() {
  background(255, 0, 0);

  button1.display();
}
window.draw = draw;
