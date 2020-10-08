let bg;

function preload() {
  bg = loadImage("assets/test-background-image.jpg");
}

function setup() {
  createCanvas(1920, 1080);
  background(bg);
}

function mouseDragged() {
  noStroke();
  fill("rgba(255, 0, 0, 1)");
  ellipse(mouseX, mouseY, 16, 16);
}
