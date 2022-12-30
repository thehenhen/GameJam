class Area {
    constructor(x,y,w,h,type) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.type = type;
    }
    collision(playerX, playerY, playerW, playerH) {
        if (playerX + playerW/2 >= this.x - this.w/2
        && playerX - playerW/2 <= this.x + this.w/2
        && playerY + playerH/2 >= this.y - this.h/2
        && playerY - playerH/2 <= this.y + this.h/2) {
            return this.type;
        }
        return -1;
    }
    draw(player, areas) {
        fill(63,127);
        rectMode(CENTER);
        if (this.type < player.checkpoint) {
            image(gift,this.x,this.y,60,this.h); 
        }else if(this.type < areas){
            tint(255,100); 
            image(gift,this.x,this.y,60,this.h); 
            tint(255);
        }else{
            rect(this.x,this.y,this.w,this.h);
        }
    }
}