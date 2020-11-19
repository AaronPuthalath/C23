const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, box2, box3, box4, box5;
var ground;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(200,300,50,50);
    box2 = new Box(250, 100, 80, 30);
    box3 = new Box(50, 50 ,10, 40);
    box4 = new Box(100, 200, 30, 20);
    box5 = new Box(250, 300, 70, 10);

    ground = new Ground(200, 395, 400, 10);
}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();

    ground.display();
   
}