export default class StarBackground {
  constructor() {
    this.starX = Math.random() * 1080;
    this.starY = Math.random() * 720;
    this.starDiameter = Math.random() * 150 + 50;
    this.starS = 1;
    this.directionX = (Math.random() * 2 - 1) * Math.random() * 0.5;
    this.directionY = (Math.random() * 2 - 1) * Math.random() * 0.5;
    this.colorOpacity = 80;

    this.myColors = [
      color(63, 55, 201, this.colorOpacity),
      color(67, 97, 238, this.colorOpacity),
      color(58, 12, 163, this.colorOpacity),
      color(114, 9, 183, this.colorOpacity),
      color(76, 201, 240, this.colorOpacity),
      color(52, 160, 164, this.colorOpacity),
      color(118, 200, 147, this.colorOpacity),
      color(30, 96, 145, this.colorOpacity),
      color(22, 138, 173, this.colorOpacity),
    ];
    this.colorPicker = Math.round(Math.random() * (this.myColors.length - 1));
  }

  display() {
    push();

    translate(this.starX, this.starY);
    scale(this.starS);

    fill(this.myColors[this.colorPicker]);

    noStroke();

    ellipse(0, 0, this.starDiameter);

    pop();
  }

  animation() {
    this.starX += this.directionX;
    this.starY = this.starY + this.directionY;

    if (this.starX > 1080 + this.starDiameter / 2) {
      this.starX = 0 - this.starDiameter / 2;
    } else if (this.starX < 0 - this.starDiameter / 2) {
      this.starX = 1080 + this.starDiameter / 2;
    }
    if (this.starY > 720 + this.starDiameter / 2) {
      this.starY = 0 - this.starDiameter / 2;
    } else if (this.starY < 0 - this.starDiameter / 2) {
      this.starY = 720 + this.starDiameter / 2;
    }
  }
}
