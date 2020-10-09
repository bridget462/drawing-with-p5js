let canvas;

function setup() {
  canvas = createCanvas(1920, 1080);
  canvas.position(0, 0);
  clearCanvas();
  const clearBtn = createButton("reset");
  clearBtn.mousePressed(clearCanvas);
}

function clearCanvas() {
  clear();
  background("rgba(255, 255, 255, 0.2)");
}

function mouseDragged() {
  noStroke();
  fill("rgba(0, 255, 0, 1)");
  ellipse(mouseX, mouseY, 16, 16);
}
