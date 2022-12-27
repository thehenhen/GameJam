class Trap {
    constructor(x,y,r,type) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.type = type;
        this.reset();
    }
    draw() {
        if (this.type == 0) {
            fill(191);
            translate(this.x, this.y);
            rotate(this.rot++/10);
            imageMode(CENTER);
            image(this.img, 0,0);
        }
    }
    reset() {
        this.img = loadImage('assets/sawblade.png');
        this.alt = loadImage('assets/sawblade_blood.png');
        this.rot = 0;
    }
    collide(playerX, playerY, playerW, playerH) {
        if (this.type == 0) {
            if (playerX + playerW/2 >= this.x - this.r/2
                && playerX - playerW/2 <= this.x + this.r/2
                && playerY + playerH/2 >= this.y - this.r/2
                && playerY - playerH/2 <= this.x + this.r/2) {
                this.rot = 0;
                this.img = this.alt;
                return 1;
            }
        }
    }
}