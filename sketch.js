var player1;
var computer;
var playerImage,compueter1;
var playerBullet
var bg;
var playerRight,playerLeft,playerDown;
var computer2,computer3,computer4;
var timer = 60;


var bullets = [];
var bulletSpeed = 5;
var bulletSize = 5;
let tanks = [];
function preload() {

playerImage = loadImage("sprites/player for game.png");
playerBullet = loadImage("sprites/player_bullet.png");
bg = loadImage("sprites/bg.jpg");
playerRight = loadImage("sprites/player_right.png");
playerLeft = loadImage("sprites/player_left.png");
playerDown = loadImage("sprites/player_down.png");
computer1 = loadImage("sprites/enemy.png");
computer2 = loadImage("sprites/enemy_down.png")
computer3 = loadImage("sprites/enemy_left.png")
computer4 = loadImage("sprites/enemy_right.png");


}

function setup() {
  createCanvas(displayWidth-20,displayHeight-100);
  player1 = createSprite(200,200,30,30);
  player1.addImage("player",playerImage);
  
  computerGroup = new Group();
  
}

function draw() {
  background(bg);
  player1.scale = 0.5;
 
  




  if(keyIsDown(UP_ARROW)){
    
    player1.dir = 'u';
    player1.y = player1.y-10;
    player1.addImage( "player",playerImage);
    
  }

  if(keyIsDown(DOWN_ARROW)){
    
    player1.dir = 'd';
    player1.y = player1.y+10;
    player1.addImage( "player",playerDown);
    
  }

if(keyIsDown(RIGHT_ARROW)){
  player1.dir = 'l';
  player1.x = player1.x+10;
  player1.addImage("player",playerRight);
  
  }

if(keyIsDown(LEFT_ARROW)){
  player1.dir = 'r';
  player1.x = player1.x-10;
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

spawnComputer();

textSize(100);
text(timer, width-150,100);
if (frameCount % 30 == 0 && timer > 0) { // if the frameCount is divisible by 60, then a second has passed. it will stop at 0
  timer --;
}
if (timer == 0) {
  text("GAME OVER", width/2, height/2);
}






  drawSprites();
}

function spawnBullet(x,y){

var Bullet = createSprite(x,y,5,5);
Bullet.addImage(playerBullet);

Bullet.push(new Bullet(player1.x, player1.y, bulletSize,
  player1.dir, bulletSpeed));

} 

function spawnComputer() {
  if(frameCount % 200 === 0) {
    var computer = createSprite(random(50,1000),random(50,1000),10,40);
   
    
    var rand = Math.round(random(1,4));
    switch(rand) {
      case 1: computer.addImage(computer1);
              break;
      case 2: computer.addImage(computer2);
              break;
      case 3: computer.addImage(computer3);
              break;
      case 4: computer.addImage(computer4);
              break;
      default: break;
    }
  computer.scale = 0.5;
  computer.lifetime = 300;
}
}

