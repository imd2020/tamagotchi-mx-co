export default class Engine {
  constructor() {}
  display() {
    push();
    fill(12, 21, 49);
    noStroke();
    quad(-30, 100, -50, 120, 50, 120, 30, 100);
    rect(-50, 120, 100, 10);
    pop();
  }
}
