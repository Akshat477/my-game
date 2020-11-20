const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var canvas, backgroundImage;

var gameState = 0;
var health;
var ball;

var player1,player2;

var bullet;
var bulletImg;

var background;

var ground;

function preload(){
backgroundImg = loadImage("images/Background.JPG")
bulletImg = loadImage("images/bullet.png")
}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  health = 100

  
  engine = Engine.create();
    world = engine.world;
  player1 = new Player(70,100,100,100,"images/facing right.png")
  player2 = new Player(1000,200,100,100,"images/facing left.png")
  ground = new Ground(600,700,1100,20)

  


}
  

function draw(){
  background(backgroundImg);
  Engine.update(engine);
player1.display()
ground.display()
player2.display()



if(keyCode === 39){
  player1.body.position.x = player1.body.position.x + 1
}

if(keyCode === 37){
 player1.body.position.x = player1.body.position.x - 1
}

if(keyDown("Space")){
  bullet = new Bullet(300,400,20,20)
  bullet.display()
}
 


if(player1.body.speed < 3){
  player1.health = player1.health - 8
}

}



