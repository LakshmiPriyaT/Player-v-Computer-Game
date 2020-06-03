var player1;
var computer;
var playerImage,computerImage;
var playerBullet,computerBullet;
var bg;
var playerRight,playerLeft,playerDown;
var computerDown,computerLeft,computerRight;

var bullets = [];
var bulletSpeed = 5;
var bulletSize = 5;
let tanks = [];
function preload() {

playerImage = loadImage("sprites/player for game.png");
computerImage = loadImage("sprites/enemy.png");
playerBullet = loadImage("sprites/player_bullet.png");
computerBullet = loadImage("sprites/red_bullet.png");
bg = loadImage("sprites/bg.jpg");
playerRight = loadImage("sprites/player_right.png");
playerLeft = loadImage("sprites/player_left.png");
playerDown = loadImage("sprites/player_down.png");
computerRight = loadImage("sprites/enemy_right.png");
computerLeft = loadImage("sprites/enemy_left.png");
computerDown = loadImage("sprites/enemy_down.png");


}

function setup() {
  createCanvas(displayWidth,displayHeight);
  player1 = createSprite(200,200,30,30);
  computer = createSprite(700,200,30,30); 
  player1.addImage("player",playerImage);
  computer.addImage("computer",computerImage);
  
  
}

function draw() {
  background(bg);
  player1.scale = 0.5;
  computer.scale = 0.5;
  




  if(keyIsDown(UP_ARROW)){
    
    player1.dir = 'u';
    player1.y = player1.y-5;
    player1.addImage( "player",playerImage);
    
  }

  if(keyIsDown(DOWN_ARROW)){
    
    player1.dir = 'd';
    player1.y = player1.y+5;
    player1.addImage( "player",playerDown);
    
  }

if(keyIsDown(RIGHT_ARROW)){
  player1.dir = 'l';
  player1.x = player1.x+5;
  player1.addImage("player",playerRight);
  
  }

if(keyIsDown(LEFT_ARROW)){
  player1.dir = 'r';
  player1.x = player1.x-5;
  player1.addImage("player",playerLeft);
  
}
 
if(keyIsDown(32)){
  bullets.push(new Bullet(player1.x, player1.y, bulletSize,player1.dir, bulletSpeed));

}

if (bullets.length > 0) {
  for (var i = 0; i < bullets.length; i++) {
    bullets[i].render(200, 200, 0);
    if (bullets[i].x < 0 || bullets[i].x > width ||
      bullets[i].y < 0 || bullets[i].y > height)
      bullets.splice(i, 1)
  }
}

  drawSprites();
}

function spawnBullet(x,y){

var Bullet = createSprite(x,y,5,5);
Bullet.addImage(playerBullet);

Bullet.push(new Bullet(player1.x, player1.y, bulletSize,
  player1.dir, bulletSpeed));

} 