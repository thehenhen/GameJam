class Player{
    constructor(){
        this.reset();
    }
    
    reset() {
        this.x=100;
        this.y=525;
        this.vY=0;
        this.a=0.4;
        this.lr=4;
        this.jump=8;
        this.grounded=false;
        this.dead = false;
    
        this.hgt=60;
        this.wdt=40;
    
        this.up=false;
        this.down=false;
        this.left=false;
        this.right=false;
        
        this.facing=1;
        //left=0
        //right=1

        this.runningR=[loadImage("assets/santa-runningR1.png"),
        loadImage("assets/santa-runningR2.png"),
        loadImage("assets/santa-runningR3.png"),
        loadImage("assets/santa-runningR4.png")];

        this.runningL=[loadImage("assets/santa-runningL1.png"),
        loadImage("assets/santa-runningL2.png"),
        loadImage("assets/santa-runningL3.png"),
        loadImage("assets/santa-runningL4.png")];

        this.standing=[loadImage("assets/santa-standingL.png"),loadImage("assets/santa-standingR.png")];

    }

    update(stage) {
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

        this.grounded = false;
        this.collision(stage.collision);
        this.death_check(stage.traps);
    }
    collision(walls) {
        for (let wall = 0; wall < walls.length; wall++) {
            let res = walls[wall].collide(this.x, this.y, this.wdt, this.hgt, this.vY);
            if (res != -1) {
                if (res == 0) {
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
                    this.dead = true;
                }
            }
        }
    }
    
    keyPress(key, keyCode){
        if (!this.dead) {
            if(key === 'a' || keyCode === LEFT_ARROW){
                this.left=true;
            }
            if(key === 'd' || keyCode === RIGHT_ARROW){
                this.right=true;
            }
            if(key === 'w' || keyCode === UP_ARROW){
                if (this.grounded) {
                    this.up=true;
                    this.vY-=this.jump;
                    this.grounded = false;
                }
            }
            if(key === 's' || keyCode === DOWN_ARROW){
                this.down=true;
            }
        } else {
            if(key == ' ') {
                this.reset();
            }
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
            if(this.right){
                image(this.runningR[floor((frame%24)/6)],this.x,this.y,this.wdt,this.hgt); 
                console.log(floor((frame%16)/4));
            }
            else if(this.left){
                image(this.runningL[floor((frame%24)/6)],this.x,this.y,this.wdt,this.hgt); 
                console.log(floor((frame%16)/4));
            }else {
                image(this.standing[this.facing],this.x,this.y,this.wdt,this.hgt); 
            }
            //rect(this.x,this.y,this.wdt,this.hgt);
        }
    }
}

function keyPressed(){
    p.keyPress();
}
function keyReleased(){
    p.keyRelease();
}
