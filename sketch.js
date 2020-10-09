let bg;

function preload() {
  bg = loadImage("assets/test-background-image.jpg");
}

function setup() {
  createCanvas(1920, 1080);
  clearCanvas();
  const clearBtn = createButton("reset");
  clearBtn.mousePressed(clearCanvas);
}

function clearCanvas() {
  clear();
}

function mouseDragged() {
  noStroke();
  fill("rgba(0, 255, 0, 1)");
  ellipse(mouseX, mouseY, 16, 16);
}
