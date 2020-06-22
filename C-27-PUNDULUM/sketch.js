const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var Bob;
var stand;
var string;



function setup(){
    var canvas = createCanvas(450,500);
    engine = Engine.create();
    world = engine.world;
    
    stand = new Stand(220, 100,150,30);

    Bob = new BOB(220,250);

    string = new String(Bob.body,stand.body);
 

}
function draw(){
    background("black");
    Engine.update(engine);
    
  
    fill("white" );
   text("Press space to settle the BOB of the pendulum", 25,25);
   fill("white");
   text("Press enter to move the BOB of the pendulum with mouse", 25,40);
   
    stand.display();
    Bob.display();
    string.display();
    if(keyCode == 13){

        Bob.x = mouseX ;
        Bob.y=mouseY ;

    }
     if(keyCode == 32){

        Bob.x =220 ;
        Bob.y =250 ;
 

    }


}
