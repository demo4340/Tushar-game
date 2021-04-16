var forest, forestImg;
var hunter, hunterImg, hunterUpImg, hunterDownImg;
var animalGroup;
var animal, elephantImg, snakeImg, tigerImg, lionImg, dragonImg ;
var killer, killerImg, killerGroup;
var gameOver, gameOverImg, unlock, unlockImg;
var score;
var count = 0;
var door, doorImg;



function preload(){

    forestImg = loadImage("img_edit/darkForest.jpg");
    elephantImg = loadAnimation("img_edit/elephant/1.png", "img_edit/elephant/2.png", "img_edit/elephant/3.png", "img_edit/elephant/4.png", "img_edit/elephant/5.png", "img_edit/elephant/6.png", "img_edit/elephant/7.png", "img_edit/elephant/8.png", "img_edit/elephant/9.png", "img_edit/elephant/10.png", "img_edit/elephant/11.png", "img_edit/elephant/12.png");
    snakeImg = loadAnimation("img_edit/snake/0.png", "img_edit/snake/1.png", "img_edit/snake/2.png", "img_edit/snake/3.png", "img_edit/snake/4.png", "img_edit/snake/5.png", "img_edit/snake/6.png", "img_edit/snake/7.png", "img_edit/snake/8.png", "img_edit/snake/9.png");
    tigerImg = loadAnimation("img_edit/tiger/0.png", "img_edit/tiger/1.png", "img_edit/tiger/1.png", "img_edit/tiger/2.png", "img_edit/tiger/3.png", "img_edit/tiger/4.png", "img_edit/tiger/5.png", "img_edit/tiger/6.png", "img_edit/tiger/7.png", "img_edit/tiger/8.png");
    lionImg = loadAnimation("img_edit/lion/0.png", "img_edit/lion/1.png", "img_edit/lion/2.png", "img_edit/lion/3.png", "img_edit/lion/4.png", "img_edit/lion/5.png", "img_edit/lion/6.png", "img_edit/lion/7.png", "img_edit/lion/8.png");
    dragonImg = loadAnimation("img_edit/dragon/0.png", "img_edit/dragon/1.png", "img_edit/dragon/2.png", "img_edit/dragon/3.png", "img_edit/dragon/4.png", "img_edit/dragon/5.png", "img_edit/dragon/6.png", "img_edit/dragon/7.png");
    hunterImg = loadAnimation("img_edit/hunter/0.png", "img_edit/hunter/1.png", "img_edit/hunter/2.png", "img_edit/hunter/3.png", "img_edit/hunter/4.png", "img_edit/hunter/5.png", "img_edit/hunter/6.png", "img_edit/hunter/7.png", "img_edit/hunter/8.png", "img_edit/hunter/9.png", "img_edit/hunter/10.png", "img_edit/hunter/11.png", "img_edit/hunter/12.png", "img_edit/hunter/13.png", "img_edit/hunter/14.png", "img_edit/hunter/15.png");
    hunterUpImg = loadImage("img_edit/hunter/up.png");
    hunterDownImg = loadImage("img_edit/hunter/down.png");
    killerImg = loadAnimation("img_edit/killerImg/1.png", "img_edit/killerImg/2.png", "img_edit/killerImg/3.png", "img_edit/killerImg/4.png", "img_edit/killerImg/5.png", "img_edit/killerImg/6.png", "img_edit/killerImg/7.png");
    gameOverImg = loadImage("img_edit/gameOver.jpg");
    doorImg = loadImage("img_edit/door.png");
    //unlockImg = loadImage("img_edit/unlock.png")

}


function setup(){

  createCanvas(displayWidth, displayHeight-110);

  forest = createSprite(displayWidth/2, displayHeight/2, displayWidth, displayHeight);
  forest.addImage("forest", forestImg);
  forest.scale =3.7;
  forest.velocityX = -3;

  hunter = createSprite(displayWidth/6, displayHeight - 240);
  hunter.addAnimation("hunter", hunterImg);
  hunter.scale = 1.3; 

  animalGroup = new Group();
  killerGroup = new Group();


}

function draw(){
    
    background("black");

    if(forest.x < 400){

        forest.x = displayWidth/2 + 300;
    
    }

    edges = createEdgeSprites();
    hunter.collide(edges[3]);

    if(keyDown("space")){

        hunter.velocityY = -10;
    
    }
    
    hunter.velocityY = hunter.velocityY + 0.8;
    
    if(keyDown("space") && keyDown("right")){
    
        hunter.velocityY = -8;
        hunter.x = hunter.x + 10;
        
        if(hunter.y < displayHeight/8){
    
          hunter.velocityY = 0;
    
        }
    
        //if the hunter is moving out of the screen through right edge => reset
        if(hunter.x > displayWidth){
    
          hunter.x = displayWidth/8;
    
        }
    }
    
    if(keyDown("left") && keyDown("space")){
    
        hunter.velocityY = -8;
        hunter.x = hunter.x - 10;
    
        if(hunter.x < 20){
    
          hunter.x = displayWidth/8;
    
        }
    
    }


    

    Animals();

    Killer();

    if(hunter.isTouching(killerGroup)){
    
            gameOver = createSprite(displayWidth/2, displayHeight/2);
            gameOver.addImage("game", gameOverImg);
            gameOver.scale = 3;
            animal.destroy(); 
    
    }

    if(hunter.isTouching(animalGroup)){
        animalGroup.destroyEach();
        count = count + 1;
    }

    if(count === 2){
        door = createSprite(displayWidth - 200, displayHeight - 300);
        door.addImage("door", doorImg);
        door.scale = 1.5;
        forest.velocityX = 0;
        
        if(keyDown("right")){
             hunter.x = hunter.x + 10;
        }

        hunter.depth = door.depth;
        hunter.depth = hunter.depth + 1;

    }

    drawSprites();
    fill ("yellow");
    textSize(25);
    text("Score : " + count, displayWidth-150, 80);
}