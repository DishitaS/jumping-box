var canvas;
var music;
var box;
var surface1;
var surface2;
var surface3;
var surface4;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    surface1=createSprite(0,600,240,30);
    surface1.shapeColor=("red");

    surface2=createSprite(250,600,200,30);
    surface2.shapeColor=("yellow")

    surface3=createSprite(500,600,200,30)
    surface3.shapeColor=("green");

    surface4=createSprite(720,600,200,30);
    surface4.shapeColor=("blue");

    box=createSprite(Math.round(random(20,750)),600,30,30)
    box.shapeColor=("white");
    
    box.velocityX= 0.4

    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
     createEdgeSprites()
     if(box.isTouching(surface1) && box.bounceOff(surface1)){
         box.shapeColor=("red")
     }
     if(box.isTouching(surface2) && box.bounceOff(surface2)){
        box.shapeColor=("yellow")
    }
    if(box.isTouching(surface3) && box.bounceOff(surface3)){
        box.shapeColor=("green")
    }
    if(box.isTouching(surface4) && box.bounceOff(surface4)){
        box.shapeColor=("blue")
    } 

    
    


    surface1.display();
    surface2.display();
    surface3.display();
    surface4.display();
    box.display();
   
    //add condition to check if box touching surface and make it box
}
