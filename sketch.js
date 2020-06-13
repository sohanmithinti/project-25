const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var drop1,drop2,drop3;
var raindrop=[]

function setup(){
    var canvas = createCanvas(displayWidth,displayHeight);
    engine = Engine.create();
    world = engine.world;
    drop1 = new Drop();
    drop2 = new Drop();
    drop3 = new Drop();
    raindrop.push(drop1);
    raindrop.push(drop2);
    raindrop.push(drop3);
}

function draw(){
    background(0);
    Engine.update(engine);
drop4 = new Drop()
raindrop.push(drop4);
for(var i = 0;i<raindrop.length;i++){
raindrop[i].display();
}
}