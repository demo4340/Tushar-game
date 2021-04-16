function Killer(){

    if(frameCount % 300 === 0){

        killer = createSprite(displayWidth/2, displayHeight/2);
        killer.addAnimation("killer", killerImg);
        killer.scale = 0.5;
        killer.velocityX = -3;
        killer.x = Math.round(random(200, displayWidth - 100));
        killer.y = Math.round(random(200, displayHeight - 200));
        killer.lifetime = displayWidth/3;
        killerGroup.add(killer);
        
    }

}