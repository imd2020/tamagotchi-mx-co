export default class Fin {
  constructor(mirror) {
    this.mirror = mirror;
  }

  display() {
    push();
    fill(186, 183, 205);
    noStroke();
    quad(
      -45 * this.mirror,
      -100,
      -90 * this.mirror,
      0,
      -100 * this.mirror,
      150,
      -45 * this.mirror,
      50
    );

    fill(12, 21, 49);

    quad(
      -50 * this.mirror,
      -50,
      -70 * this.mirror,
      0,
      -90 * this.mirror,
      120,
      -65 * this.mirror,
      50
    );

    pop();
  }
}
