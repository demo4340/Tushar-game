function Animals(){

        if(frameCount % 150 === 0){

                animal = createSprite(displayWidth/3, displayHeight - 170);
                var randomNumber = Math.round(random(1,5));
                switch(randomNumber){

                        case 1 : animal.addAnimation("animal", elephantImg);
                                 animal.x = Math.round(random(0, displayWidth/2));
                                 animal.velocityX = 3;
                                 animal.scale = 0.6
                                 break;
                        case 2 : animal.addAnimation("animal", snakeImg);
                                 animal.x = Math.round(random(0, displayWidth/2));
                                 animal.velocityX = 5;
                                 animal.scale = 0.5;
                                 break;       
                        case 3 : animal.addAnimation("animal", tigerImg);
                                 animal.x = Math.round(random(0, displayWidth/2));
                                 animal.velocityX = 8;
                                 break;  
                        case 4 : animal.addAnimation("animal", dragonImg);
                                 animal.x = Math.round(random(0, displayWidth - 100));
                                 animal.y = 0;
                                 animal.velocityY = 5;
                                 animal.velocityX = 5;
                                 animal.scale = 0.6;
                                 break;
                        case 5 : animal.addAnimation("animal", lionImg);
                                 animal.x = Math.round(random(0, displayWidth/2));
                                 animal.velocityX = 10;
                                 break;
                        default : break;

                }

                animal.lifetime = displayWidth/3;
                animalGroup.add(animal);
        }

       

}