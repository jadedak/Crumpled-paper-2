const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
function setup() {
	createCanvas(1500, 700);
    engine = Engine.create();
	world = engine.world;
	Engine.run(engine);
	dustbin1 = new Dustbin(1000,500,200,15);
  dustbin2 = new Dustbin(900,440,15,150);
  dustbin3 = new Dustbin(1100,440,15,150);
  ground1 = new Ground(400,550,1900,15);
  ball = new Paper(100,520,35);
  }
function draw() {
  
  rectMode(CENTER);
  background(150);
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  ground1.display();
  ball.display();
 }
function keyPressed(){
  if(keyCode=== UP_ARROW){
    Matter.Body.applyForce(ball.body,ball.body.position,{x:45,y:-45});
  }
}




