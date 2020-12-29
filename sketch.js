 var stone,banana,bananaimg,stoneimg,back,backimg, monkey, monkey_running,score
 
 function preload(){
   
  monkey_running=loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");

 backimg=loadImage("jungle.jpg")
  stoneimg=loadImage("stone.png")
   bananaimg=loadImage("banana.png")
   
   
 }

 function setup() {
  createCanvas(600, 400);
  
   back=createSprite(200,200,400,400)
   back.addImage("back",backimg)
   back.x = back.width/2;
   back.velocityX=-4
   
  monkey=createSprite(70,300,10,10)
  monkey.addAnimation("running",monkey_running)
   monkey.scale=0.25
   
   switch(score){
       case : monkey.scale=0.12;
       break ;
        case: monkey.scale=0.14;
       break;
        case: monkey.scale=0.16;
       break;
        case: monkey.scale=0.18;
       default break;
        }
 }   

 }





function draw() {
  background(220);
  
  Spawnbanana();
  Spawnstone();
  
  score = score + Math.round(getFrameRate()/60);
  text("Score: "+ score, 500,50);
  
  if(keyDown("space")) {
    monkey.velocityY = -10;
  }
  
  monkey.velocityY = monkey.velocityY + 0.8
  
   if (back.x < 0){
    back.x = back.width/2;
   }  
  
  drawSprites();
}

function Spawnbanana(){
 if (frameCount % 60 === 0) {
 banana=createSprite(600,200,10,10) 
  banana.addImage("banana",bananaimg)
  banana.velocityX=-5
   banana.scale=0.05
  
}
}
function Spawnstone(){
  if(frameCount % 150 === 0) {
    var stone = createSprite(600,340,10,40);
    stone.addImage("stone",stoneimg)
    stone.velocityX = -4;
    stone.scale=0.3
    //generate random obstacles
    var rand = Math.round(random(1,6));
}
}


