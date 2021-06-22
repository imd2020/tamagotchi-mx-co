export default class Speedometer {
  constructor(speedometerX, speedometerY, speedometerRotation) {
    this.speedometerX = speedometerX;
    this.speedometerY = speedometerY;
    this.speedometerRotation = speedometerRotation;
    this.redMarkLine = 270;
  }

  display() {
    push();
    translate(this.speedometerX, this.speedometerY);
    scale(1.2);
    fill(16, 56, 86);
    noStroke();
    ellipse(0, 0, 300);

    for (let i = 0; i <= 315; i += 45) {
      for (let u = 0; u <= 360; u += 11.25) {
        push();
        stroke(134, 134, 172);
        52, 52, 76;
        rotate(i);
        strokeWeight(2);
        line(100, 0, 150, 0);

        rotate(u);
        strokeWeight(1);
        line(0, 120, 0, 150);
        pop();
      }
    }

    this.redMark();

    // Tachonadel
    push();
    rotate(this.speedometerRotation);
    fill(255, 191, 31);
    noStroke();
    triangle(10, -10, 140, 0, 10, 10);
    fill(6, 22, 34);
    ellipse(0, 0, 50);
    rect(-35, -15, 20, 30);
    pop();
    pop();
  }

  redMark() {
    push();
    stroke(255, 10, 10);
    rotate(this.redMarkLine);
    strokeWeight(5);
    line(100, 0, 150, 0);

    pop();
  }

  move() {
    this.speedometerRotation = (this.speedometerRotation + 10) % 360;
  }
}
