const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var playerBase;
var engine, world;
var canvas;
var computerBase;



function preload(){
  playerBaseImg = loadImage("./assets/base1.png");
  playerImg = loadImage("./assets/player.png");
  computerBaseImg = loadImage("./assets/base2.png");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  
   //Initialising Engine
  engine = Engine.create();
  world = engine.world;
	
   //Create Player Base and Computer Base Object
   playerBase = new PlayerBase(300,random(450,height -300),240,250);
    computerBase = new ComputerBase(850,random(400,height -200),240,250);
    player = new Player(285,playerBase.body.position.y-153,50,180);
    computerplayer = new ComputerPlayer(850,computerBase.body.position.y-143,50,180);
  
 }

function draw() {

  background(180);

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

   //Display Playerbase and computer base 
    computerBase.display();
   playerBase.display();
   //display Player and computerplayer
player.display();
computerplayer.display();
}
