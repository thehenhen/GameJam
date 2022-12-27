class Obstacle {
    constructor(x1, y1, x2, y2, type) {
        this.x1 = x1;
        this.x2 = x2;
        this.y1 = y1;
        this.y2 = y2;
        this.type = type;
    }
    value() {
        return [this.x1,this.y1,this.x2,this.y2];
    }
    draw() {
        line(this.x1, this.y1, this.x2, this.y2);
    }
    collide(playerX, playerY, playerW, playerH, playerV) {
        if (this.type == 0) {
            if (playerX + playerW/2 > this.x1
                && playerX - playerW/2 < this.x2
                && ((playerY + playerH/2 > this.y1
                && playerY - playerH/2 < this.y1)
                || (playerY < this.y1
                && playerY + playerV > this.y1))) return playerY < this.y1 ? 0 : 1;
        } else if (this.type == 1) {
            if (playerY + playerH/2 > this.y1
            && playerY - playerH/2 < this.y2
            && playerX + playerW/2 > this.x1
            && playerX - playerW/2 < this.x1) return playerX < this.x1 ? 2 : 3;
        }
        return -1;
    }
}