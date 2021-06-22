export default class EngineFlame {
  constructor(flameX, flameY) {
    this.flameX = flameX + Math.random() * 8 * Math.random() * 2 - 1;
    this.flameY = flameY;
    this.flameDeviationX = (Math.random() * 2 - 1) * 1.5;
    this.flameDeviationY = Math.random() * 2 - 1;
    this.flameOpacity = 240;

    this.flameColors = [
      color(232, 168, 125),
      color(142, 154, 175),
      color(255, 96, 82),
      color(245, 189, 31),
      color(255, 232, 99),
    ];

    this.flameColorPicker = Math.round(
      Math.random() * (this.flameColors.length - 1)
    );
  }

  display() {
    push();
    translate(this.flameX, this.flameY);

    fill(this.flameColors[this.flameColorPicker]);

    /* Opacity muss hier mit setAlpha gesetzt werden, da die Opacity verblassen soll. 
    Im Array beim Constructor, würde der Wert einmal fix sein*/
    this.flameColors.forEach((myColor) => {
      myColor.setAlpha(this.flameOpacity);
    });

    ellipse(0, 0, 30, 50);

    pop();
  }

  animation() {
    this.flameX += this.flameDeviationX;
    this.flameY += 4;
    this.flameOpacity -= 8;
  }
}
