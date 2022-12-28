class Trap {
    constructor(x,y,r,type) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.type = type;
        imageMode(CENTER);
        this.reset();
    }
    draw() {
        if (this.type == 0) {
            fill(191);
            applyMatrix();
            translate(this.x, this.y);
            rotate(this.rot++/10);
            image(this.img, 0,0);
            resetMatrix();
        }
    }
    reset() {
        this.img = loadImage('assets/sawblade.png');
        this.alt = loadImage('assets/sawblade_blood.png');
        this.rot = 0;
    }
    collide(playerX, playerY, playerW, playerH) {
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
                console.log(tx, ty, Math.sqrt(tx**2 + ty**2), this.r);
                if (Math.sqrt((tx**2) + (ty)**2) <= this.r) {
                    this.rot = 0;
                    this.img = this.alt;
                    return 1;
                }
            }
        }
    }
}