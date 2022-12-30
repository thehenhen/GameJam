class Trap {
    constructor(x,y,r,type,x2=undefined,y2=undefined,period=undefined) {
        this.x = x;
        this.x2 = x2;
        this.y = y;
        this.y2 = y2;
        this.r = r;
        this.period = period;
        this.type = type;
        imageMode(CENTER);
        this.reset();
    }
    draw(frame) {
        fill(191);
        applyMatrix();
        if (this.type == 0) {
            translate(this.x, this.y);
        } else if (this.type == 1) {
            translate(this.x + (this.x2-this.x) / this.period * (abs(this.period - frame % (this.period*2))), 
                      this.y + (this.y2-this.y) / this.period * (abs(this.period - frame % (this.period*2))));
        }
        rotate(this.rot++/10);
        image(this.img, 0,0);
        resetMatrix();

    }
    reset() {
        this.img = loadImage('assets/sawblade.png');
        this.alt = loadImage('assets/sawblade_blood.png');
        this.rot = 0;
    }
    collide(playerX, playerY, playerW, playerH, frame) {
        if (this.type == 0) {       // sawblade
            // console.log("left", playerX + playerW/2 >= this.x - this.r/2);
            // console.log("right", playerX - playerW/2 <= this.x + this.r/2);
            // console.log("top", playerY + playerH/2 >= this.y - this.r/2);
            // console.log("bottom", playerY - playerH/2 <= this.y + this.r/2);
            if (playerX + playerW/2 >= this.x - this.r/2
                && playerX - playerW/2 <= this.x + this.r/2
                && playerY + playerH/2 >= this.y - this.r/2
                && playerY - playerH/2 <= this.y + this.r/2) {
                let tx,ty;
                if (playerX < this.x) {
                    tx = playerX + playerW/2 - this.x;
                } else {
                    tx = playerX - playerW/2 - this.x;
                }
                if (playerY < this.y) {
                    ty = playerY - playerH/2 - this.y;
                } else {
                    ty = playerY + playerH/2 - this.y;
                }
                //console.log(tx, ty, Math.sqrt(tx**2 + ty**2), this.r);
                if (Math.sqrt((tx**2) + (ty)**2) <= this.r) {
                    this.rot = 0;
                    this.img = this.alt;
                    return 1;
                }
            }
        } else if (this.type == 1) {       // sawblade
            // console.log("left", playerX + playerW/2 >= this.x - this.r/2);
            // console.log("right", playerX - playerW/2 <= this.x + this.r/2);
            // console.log("top", playerY + playerH/2 >= this.y - this.r/2);
            // console.log("bottom", playerY - playerH/2 <= this.y + this.r/2);
            console.log("xy", this.x,this.y,this.period,frame);
            this.cX = this.x + (this.x2-this.x) / this.period * (abs(this.period - frame % (this.period*2)));
            this.cY = this.y + (this.y2-this.y) / this.period * (abs(this.period - frame % (this.period*2)));
            console.log("XY", this.cX,this.cY);
            if (playerX + playerW/2 >= this.cX - this.r/2
                && playerX - playerW/2 <= this.cX + this.r/2
                && playerY + playerH/2 >= this.cY - this.r/2
                && playerY - playerH/2 <= this.cY + this.r/2) {
                let tx,ty;
                if (playerX < this.cX) {
                    tx = playerX + playerW/2 - this.cX;
                } else {
                    tx = playerX - playerW/2 - this.cX;
                }
                if (playerY < this.cY) {
                    ty = playerY - playerH/2 - this.cY;
                } else {
                    ty = playerY + playerH/2 - this.cY;
                }
                //console.log(tx, ty, Math.sqrt(tx**2 + ty**2), this.r);
                if (Math.sqrt((tx**2) + (ty)**2) <= this.r) {
                    this.rot = 0;
                    this.img = this.alt;
                    return 1;
                }
            }
        }
    }
}