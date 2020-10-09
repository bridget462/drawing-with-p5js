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
  strokeWeight(4);
  stroke("salmon");
  line(pmouseX, pmouseY, mouseX, mouseY);
}

function keyPressed() {
  clearCanvas();
}
