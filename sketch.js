var canvas;
var music;
var box1, box2,box3,box4;
var box;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
box1 = createSprite(750,589,100,20);
box1.shapeColor="blue ";
box2 = createSprite(625,589,100,20);
box2.shapeColor="magenta";
box3 = createSprite(500,589,100,20);
box3.shapeColor="yellow";
box4  = createSprite(370,589,100,20);
box4.shapeColor="red";

    //create box sprite and give velocity
    box = createSprite(random(20,750),300,20,20);
    box.shapeColor="white";
    box.velocityX=3;
    box.velocityY=2;
    
}

function draw() {
    background(rgb(169,169,169));
    

    drawSprites();
   


    //add condition to check if box touching surface and make it box
if(box1.isTouching(box) &&  box.bounceOff(box1)){
    box.shapeColor="blue";
}
if(box2.isTouching(box) &&  box.bounceOff(box2)){
    box.shapeColor="pink";
}
if(box3.isTouching(box) &&  box.bounceOff(box3)){
    box.shapeColor="yellow";
}
if(box4.isTouching(box) &&  box.bounceOff(box4)){
    box.shapeColor="red";
}
if(box1.isTouching(box)){
    box.shapeColor=rgb(225,128,0);
    box.velocityX = 0;
}
}
