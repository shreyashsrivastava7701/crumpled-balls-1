
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1366, 500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(600,450,1528,20);
	paper = new Paper(200, 250);

	rect1 = new box(1000, 430, 195, 20);
	rect2 = new box(900, 390, 20, 100);
	rect3 = new box(1100, 390, 20, 100);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
  keyPressed();
  ground.display();
  paper.display();
  rect1.display();
  rect2.display();
  rect3.display();
}


function keyPressed() {
	if(keyCode === UP_ARROW) {
		Matter.Body.applyForce(paper.body, paper.body.position,{x:5,y:-5});
	}
}


