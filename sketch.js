function setup() {
  createCanvas(800,400);
  
  fixrect = createSprite(400, 200, 50, 50);
  fixrect.shapeColor="red";
  movingrect = createSprite(500,200,100,100);
  movingrect.shapeColor="red";
  

}

function draw() {
  background("black");  

movingrect.x=World.mouseX;
movingrect.y=World.mouseY;

if(fixrect.x-movingrect.x<=movingrect.width/2+fixrect.width/2 && 
  movingrect.x - fixrect.x<=movingrect.width/2+fixrect.width/2 &&
  fixrect.y-movingrect.y<=movingrect.height/2+fixrect.height/2 && 
  movingrect.y - fixrect.y<=movingrect.height/2+fixrect.height/2  ){

  fixrect.shapeColor="green";
  movingrect.shapeColor="green";

}

else{

  fixrect.shapeColor="red";
  movingrect.shapeColor="red";

}
  drawSprites();
}