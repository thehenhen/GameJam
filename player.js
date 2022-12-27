class Player{
    constructor(){
        this.x=100;
        this.y=100;
        this.vY=0;
        this.a=0.4;
        this.lr=4;
        this.jump=8;

        this.hgt=30;
        this.wdt=20;

        this.up=false;
        this.down=false;
        this.left=false;
        this.right=false;
    }

    update(walls) {
        if(this.left){
            this.x-=this.lr;
        }
        if(this.right){
            this.x+=this.lr;
        }
        // if(this.up){
        //     this.up = false;
        // }
        if (this.up) {
            this.vY+=this.a/1.5;
        } else if (this.down) {
            this.vY+=this.a*3;
        } else {
            this.vY+=this.a;
        }
        this.y+=this.vY;

        for (let wall = 0; wall < walls.length; wall++) {
            let res = walls[wall].collide(this.x, this.y, this.wdt, this.hgt, this.vY);
            if (res != undefined) {
                console.log("wall", res, wall);
                if (res == 0) {
                    this.y = walls[wall].y1 - (this.hgt/2);
                    this.up = false;
                    this.vY = 0;
                } else if (res == 1) {
                    this.up = false;
                    this.vY = this.a;
                } else if (res == 2) {
                    this.x = walls[wall].x1 - (this.wdt/2);
                    this.up = false;
                    this.vY = 0;
                } else if (res == 3) {
                    this.x = walls[wall].x1 + (this.wdt/2);
                    this.up = false;
                    this.vY = 0;
                }
            }
        }
    }
    
    
    keyPress(key){
        if(key === 'a'){
            this.left=true;
        }
        if(key === 'd'){
            this.right=true;
        }
        if(key === 'w'){
            if (this.vY == 0) {
                this.up=true;
                this.vY-=this.jump;
            }
        }
        if(key === 's'){
            this.down=true;
        }
    }

    keyRelease(key){
        if(key ==='a'){
            this.left=false;
        }
        if(key ==='d'){
            this.right=false;
        }
        if(key ==='w'){
            this.up=false;
        }
        if(key ==='s'){
            this.down=false;
        }
    }

    show(){
        fill(180,30,30);
        noStroke();
        rect(this.x,this.y,this.wdt,this.hgt);
    }
}

function keyPressed(){
    p.keyPress();
}
function keyReleased(){
    p.keyRelease();
}
