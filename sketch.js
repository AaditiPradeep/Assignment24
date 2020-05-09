//const { Engine, World, Bodies, Body, Mouse, MouseConstraint, Constraint, Composite, Detector } = Matter;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies

var engine, world;
var ground;
var cannonBody, cannonHead;

function setup() {
//Setup the canvas, the ground the, tanker, the shooting ball and the bubble balls.
 var canvas = createCanvas(1200,400);
 engine = Engine.create();
 world = engine.world;

 ground = new Ground(600,600,1200,600);
 cannonHead = new Tanker (300,85,100,PI/2);
 cannonBody = new Tanker(150,125,70,PI/7);
}

function draw() {
background(0);
Engine.update(engine);

ground.display();
cannonBody.display();
ellipse(215,370,90,90);
cannonHead.display();
}


/*function keyReleased() {
    Call the shoot method for the cannon.
}*/