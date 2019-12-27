const resolution = 30;
let canvasHeight = 480;
let canvasWidth = 480;
let rectWidth = canvasWidth / resolution;
let rectHeight = canvasHeight / resolution;
let grid;

function initGrid() {}

function drawGrid() {
  for (let i = 0; i < width - rectWidth; i++) {
    for (let j = 0; j < height - rectHeight; j++) {
      rect(0 + rectWidth * i, 0 + rectHeight * j, rectWidth, rectHeight);
    }
  }
}

function setup() {
  // put setup code here
  createCanvas(480, 480);
  background(255);
}

function draw() {
  // put drawing code here
  fill(0);
  stroke(255);
  drawGrid();
}
