export default class Timeline {
  constructor(timelineX, timelineY) {
    this.timelineX = timelineX;
    this.timelineY = timelineY;

    this.count = 680;
    this.speed = 6;

    this.colorCount = 0;
  }

  display() {
    push();
    translate(this.timelineX, this.timelineY);

    fill(118 + this.colorCount, 200 + this.colorCount, 147 + this.colorCount);

    noStroke();
    rect(0, 0, this.count, 30, 10);

    rect(0, 0, 5, 30);

    noFill();
    stroke(15, 76, 92);
    strokeWeight(3);
    rect(0, 0, 680, 30, 10);

    fill(15, 76, 92);
    rect(0, 0, 5, 30);
    rect(675, 0, 5, 30);

    pop();
  }

  move() {
    push();
    this.count = this.count - this.speed;

    this.colorCount -= 1;

    pop();
  }

  end() {
    if (this.count <= 0) {
      this.count = 0;
      return true;
    }
  }

  reset() {
    this.count = 680;
    this.colorCount = 0;
  }
}
