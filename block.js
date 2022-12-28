class Block {
    constructor(x,y,w,h,img=undefined) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.img = img;
        if (img != undefined) {
            this.img = loadImage(img);
        }
    }
    draw() {
        if (this.img == undefined) {
            rectMode(CENTER);
            fill(219,189,114);
            noStroke();
            rect(this.x,this.y,this.w,this.h);
        }
    }
}