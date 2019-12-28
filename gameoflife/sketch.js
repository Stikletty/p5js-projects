const rectSize = 20;
let canvasWidth = 720;
let canvasHeight = 400;
let columns;
let rows;
let grid;
let nextgrid;

// reset board when mouse is pressed
function mousePressed() {
  initGrid();
}

function initGrid() {
  for (let i = 0; i < columns; i++) {
    for (let j = 0; j < rows; j++) {
      if (i == 0 || j == 0 || i == columns - 1 || j == rows - 1) {
        grid[i][j] = 0;
      } else {
        grid[i][j] = floor(random(2));
      }
      nextgrid[i][j] = 0;
    }
  }
}

function setup() {
  // put setup code here

  createCanvas(canvasWidth, canvasHeight);
  // frameRate(10);
  columns = floor(width / rectSize);
  rows = floor(height / rectSize);
  grid = new Array(columns);
  for (let i = 0; i < columns; i++) {
    grid[i] = new Array(rows);
  }

  nextgrid = new Array(columns);
  for (let i = 0; i < columns; i++) {
    nextgrid[i] = new Array(rows);
  }
  background(255);
  stroke(0);
  initGrid();
}

function draw() {
  // put drawing code here
  background(255);
  calculateNextStep();
  for (let i = 0; i < columns; i++) {
    for (let j = 0; j < rows; j++) {
      if (grid[i][j] == 0) {
        fill(255);
      } else {
        fill(0);
      }
      rect(i * rectSize, j * rectSize, rectSize - 1, rectSize - 1);
    }
  }
}

function calculateNextStep() {
  for (let x = 1; x < columns - 1; x++) {
    for (let y = 1; y < rows - 1; y++) {
      let neighbors = 0;

      for (let i = -1; i <= 1; i++) {
        for (let j = -1; j <= 1; j++) {
          neighbors += grid[x + i][y + j];
        }
      }

      neighbors -= grid[x][y];

      if (grid[x][y] == 1 && neighbors < 2) nextgrid[x][y] = 0;
      else if (grid[x][y] == 1 && neighbors > 3) nextgrid[x][y] = 0;
      else if (grid[x][y] == 0 && neighbors == 3) nextgrid[x][y] = 1;
      else nextgrid[x][y] = grid[x][y];
    }
  }

  let temp = grid;
  grid = nextgrid;
  nextgrid = temp;
}
