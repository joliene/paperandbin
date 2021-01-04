
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var paper1 ,ground1,box1,box2;
var world,engine;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
	paper1=new paper(200,450,60)
	
	box1=new Box(1200,600,150,150);
	box2=new Box(1200,600,15,150);
    ground1=new Ground(width/2,670,width,20);
	
	
	var render = Render.create({
		element:document.body,
		engine:engine,
		options:{
			width:1600,
			height:700,
			wireframes:false
		}
	})
	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background("white");
  ground1.display();
  paper1.display();
  box1.display();
  //box2.display();
 
  keyPressed();
  //drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){

		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:130,y:-145});
	}
}

