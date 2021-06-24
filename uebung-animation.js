import gsap from "./gsap.min.js";

class Ball {
  constructor(x, y, s) {
    this.x = x;
    this.y = y;
    this.s = s;
  }

  display() {
    push();
    fill(231, 111, 81);
    noStroke();
    translate(this.x, this.y);
    scale(this.s);
    ellipse(0, 0, 100);
    pop();
  }
}

let myBall = new Ball(100, 300, 1);

function draw() {
  background(233, 196, 106, 100);

  myBall.display();
}

function mouseClicked() {
  gsap.to(myBall, {
    duration: 2.5,
    x: 500,
    s: 1.5,

    // funktioniert nicht im p5Canvas
    // repeat: 2,
    // yoyo: true,

    ease: "power2.out",
    onComplete: () => {
      bla();
    },
  });
}

function bla() {
  gsap.to(myBall, {
    duration: 3,
    x: 200,
    s: 1,
    ease: "elastic",
  });
}
