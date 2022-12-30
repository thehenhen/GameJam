class Player{
    constructor(level){
        this.a=0.4;
        this.lr=4;
        this.jump=8;
        this.hgt=60;
        this.wdt=40;
        this.lives=3;
        
        this.runningR=[loadImage("assets/santa-runningR1.png"),
        loadImage("assets/santa-runningR2.png"),
        loadImage("assets/santa-runningR3.png"),
        loadImage("assets/santa-runningR4.png")];

        this.runningL=[loadImage("assets/santa-runningL1.png"),
        loadImage("assets/santa-runningL2.png"),
        loadImage("assets/santa-runningL3.png"),
        loadImage("assets/santa-runningL4.png")];

        this.standing=[loadImage("assets/santa-standingL.png"),loadImage("assets/santa-standingR.png")];

        this.jumping=[loadImage("assets/santa-jumpingR.png"),
        loadImage("assets/santa-jumpingL.png"),
        loadImage("assets/santa-fallingR.png"),
        loadImage("assets/santa-fallingL.png")];

        this.dying=[loadImage("assets/santa-deadL.png"),
        loadImage("assets/santa-deadR.png")];
        this.reset(level);
    }
    
    reset(level) {
        this.x=level.spawnX;
        this.y=level.spawnY;
        this.vY=0;
    
        this.grounded=false;
        this.dead = false;
    
        this.hgt=60;
        this.wdt=40;    
        this.up=false;
        this.down=false;
        this.left=false;
        this.right=false;
        
        this.facing=1;
        this.framesPerSprite=7;
        this.checkpoint=1;

        this.playing=false;
        this.blood=255;
        
    }

    update(stage) {
        this.collision(stage.collision);
        if (!this.dead) {
            if(this.left){
                this.x-=this.lr;
                this.facing=0;
            }
            if(this.right){
                this.x+=this.lr;
                this.facing=1;
            }
            if (this.up) {
                this.vY+=this.a/1.5;
            } else if (this.down) {
                this.vY+=this.a*3;
            } else {
                this.vY+=this.a;
            }
            this.y+=this.vY;
        }else{
            this.vY+=this.a;
            this.y+=this.vY;
        }
        //this.grounded = false;
        this.collision(stage.collision);
        this.death_check(stage.traps);
        return this.area_check(stage.areas);
    }
    area_check(areas) {
        for (let area = 0; area < areas.length; area++) {
            let res = areas[area].collision(this.x,this.y,this.wdt,this.hgt);
            if (res == this.checkpoint) {
                this.checkpoint++;
                if (res == areas.length) return 1;
            }
        }
        return -1;
    }
    collision(walls) {
        for (let wall = 0; wall < walls.length; wall++) {
            let res = walls[wall].collide(this.x, this.y, this.wdt, this.hgt, this.vY);
            if (res != -1) {
                if (res == 0) {
                    if(!this.grounded){
                        landSound.setVolume(0.01);
                        landSound.play();
                        console.log("hi");
                    }
                    this.grounded = true;
                    this.y = walls[wall].y1 - (this.hgt/2);
                    this.up = false;
                    this.vY = 0;
                    
                } else if (res == 1) {
                    this.grounded = true;
                    this.up = false;
                    this.vY = this.a;
                    
                } else if (res == 2) {
                    this.x = walls[wall].x1 - (this.wdt/2);
                    this.up = false;
                    
                    
                } else if (res == 3) {
                    this.x = walls[wall].x1 + (this.wdt/2);
                    this.up = false;
                    

                }
            }
        }
    }
    death_check(traps) {
        for (let trap = 0; trap < traps.length; trap++) {
            let res = traps[trap].collide(this.x, this.y, this.wdt, this.hgt);
            if (res != -1) {
                if (res == 1) {
                    if(!this.dead){
                        //this.vY=-10;
                        this.lives--;
                    }
                    this.dead = true;
                    
                    console.log(this.lives);
                    //this.x = -100;
                    //this.y = -100;
                    if(!this.playing){
                        deathSound.rate(1);
                        deathSound2.rate(1);
                        if(overScreen.counter<3){
                            deathSound.setVolume(map(3-this.lives,0,2,0,1));
                            deathSound.play();
                        }else{
                            deathSound2.setVolume(map(3-this.lives,0,2,0,1));
                            deathSound2.play();
                        }
                        this.playing=true;
                    }
                    if(this.lives==0){
                        this.lives=3;
                        overScreen.start();   
                        level.reset();
                        level.stage=0;
                        level.setStage(0);
                        this.reset(level);  
                        menu.menu=true;
                    }
                    
                }
            }
        }
    }
    
    keyPress(key, keyCode, level=undefined){
        if (!this.dead) {
            if(key === 'a' || keyCode === LEFT_ARROW){
                this.left=true;
            }
            if(key === 'd' || keyCode === RIGHT_ARROW){
                this.right=true;
            }
            if(key === 'w' || keyCode === UP_ARROW){
                if (this.grounded) {
                    jumpSound.stop();
                    this.up=true;
                    this.vY-=this.jump;
                    this.grounded = false;
                    jumpSound.setVolume(0.01);
                    jumpSound.play();
                    console.log("stop");
                }
            }
            if(key === 's' || keyCode === DOWN_ARROW){
                this.down=true;
            }
        } else {
            /*
            if(key == ' ') {
                this.reset(level);
            }*/
        }
    }

    keyRelease(key, keyCode){
        if (!this.dead) {
            if(key ==='a' || keyCode === LEFT_ARROW){
                this.left=false;
            }
            if(key ==='d' || keyCode === RIGHT_ARROW){
                this.right=false;
            }
            if(key ==='w' || keyCode === UP_ARROW){
                this.up=false;
            }
            if(key ==='s' || keyCode === DOWN_ARROW){
                this.down=false;
            }
        }
    }

    show(){
        if (!this.dead) {
            imageMode(CENTER);
            if(this.facing==1){
                if(this.vY<0){
                    image(this.jumping[0],this.x,this.y,this.wdt,this.hgt); 
                } else if(this.vY>0){
                    image(this.jumping[2],this.x,this.y,this.wdt,this.hgt); 
                }else if(this.right){
                    image(this.runningR[floor((frame%(this.framesPerSprite*4))/this.framesPerSprite)],this.x,this.y,this.wdt,this.hgt); 
                }else {
                    image(this.standing[this.facing],this.x,this.y,this.wdt,this.hgt); 
                }
            }
            else if(this.facing==0){
                if(this.vY<0){
                    image(this.jumping[1],this.x,this.y,this.wdt,this.hgt); 
                } else if(this.vY>0){
                    image(this.jumping[3],this.x,this.y,this.wdt,this.hgt); 
                } else if(this.left){
                    image(this.runningL[floor((frame%(this.framesPerSprite*4))/this.framesPerSprite)],this.x,this.y,this.wdt,this.hgt); 
                }else {
                    image(this.standing[this.facing],this.x,this.y,this.wdt,this.hgt); 
                }
            }else {
                image(this.standing[this.facing],this.x,this.y,this.wdt,this.hgt); 
            }
        }else {
            imageMode(CENTER);
            this.hgt=40;
            this.wdt=60;
            tint(max(this.blood,150), 0, 0);
            image(this.dying[this.facing],this.x,this.y,this.wdt,this.hgt); 
            tint(255);
            if(this.blood==255 || this.blood<=250){
                fill(255,this.blood); 
                rect(width/2,height/2,width,height); 
            }
            this.blood-=2;
            if(this.blood<=5){
                level.reset();
                this.reset(level); 
            }
        }
    }
}