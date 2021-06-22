function setup() {
  var canvasSetting = createCanvas(1080, 720);
  canvasSetting.parent("tamagotchiSpot");

  frameRate(30);
}

window.setup = setup;

window.addEventListener("resize", function () {
  resizeCanvas(windowWidth, windowHeight);
  clear();
});

new p5();
var width = windowWidth;
var height = windowHeight;
