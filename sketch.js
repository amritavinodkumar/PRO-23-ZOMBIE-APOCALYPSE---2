var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground,rect1,rect2,rect3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	rect1 = createSprite(300,610,17,100);
	rect1.shapeColor = "red";
	rect2 = createSprite(500,610,17,100);
	rect2.shapeColor = "red";
    rect3 = createSprite(400,651.5,200,17);
	rect3.shapeColor = "red";

	engine = Engine.create();
	world = engine.world;
	var ground_options = {
		isStatic: true
	  }
	var rect1_options = {
		isStatic: true
	  }
	var rect2_options = {
		isStatic: true
	  }
	var rect3_options = {
		isStatic: true
	  }

	 ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

   var packageBody_options ={
		restitution: 0.3
	}	
	
	packageBody = Bodies.circle(width/2 , 200 , 22.5 , packageBody_options);
	World.add(world, packageBody);
 	  
}


function draw() {
   background(0);

   Engine.update(engine);

  rectMode(CENTER);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 

  drawSprites();
   
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
 ellipseMode(RADIUS);
 ellipse(packageBody.position.x,packageBody.position.y,20,20);
    
 }
}