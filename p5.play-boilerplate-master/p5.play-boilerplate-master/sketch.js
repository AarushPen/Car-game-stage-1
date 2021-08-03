var db

function setup() {
  createCanvas(displayWidth,displayHeight);
  db = firebase.database();
  createSprite(400, 200, 50, 50);
  form = new Form()
  game = new Game()
  player = new Player()
  game.start()
}

function draw() {
  background(255,255,255);  
  drawSprites();
}