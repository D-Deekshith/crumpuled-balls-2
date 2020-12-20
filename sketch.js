
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;
var paper,ground,dustBin;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

  paper = new Paper(100,678,60,60);

  ground = new Ground(400,680,800,5);
  dustBin = new Box(630,628,100,100);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(245);

  Engine.update(engine);

  paper.display(true);
  ground.display();
  dustBin.display();
  keyPressed();
  keyPressedOver();
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    Matter.Body.applyForce(paper.body, paper.body.position, 
      {x:180, y: -180})
   }
 }

 function keyPressedOver() {
  if (keyCode === UP_ARROW) {
    Matter.Body.applyForce(paper.body, paper.body.position, 
      {x:-180, y:180})
   }
  }