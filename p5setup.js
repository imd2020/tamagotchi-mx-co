function setup() {
  var canvasSetting = createCanvas(windowWidth, windowHeight);
  canvasSetting.parent("tamagotchiSpot");

  frameRate(30);
}

window.addEventListener("resize", function () {
  resizeCanvas(windowWidth, windowHeight);
  clear();
});

new p5();
var width = windowWidth;
var height = windowHeight;
