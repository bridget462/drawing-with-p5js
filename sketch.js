let bg;

function setup() {
  createCanvas(1920, 1080);
  clearCanvas();
  const clearBtn = createButton("reset");
  clearBtn.mousePressed(clearCanvas);
}

function clearCanvas() {
  clear();
  background("grey");
}

function mouseDragged() {
  noStroke();
  fill("rgba(0, 255, 0, 1)");
  ellipse(mouseX, mouseY, 16, 16);
}
