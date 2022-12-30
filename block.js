class Block {
    constructor(x,y,w,h,img=undefined,r,g,b) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.img = img;
        this.r=r;
        this.g=g;
        this.b=b;
    }
    draw() {
        if (this.img == undefined) {
            rectMode(CENTER);
            fill(this.r,this.g,this.b);
            noStroke();
            rect(this.x,this.y,this.w,this.h);
        } else {
            imageMode(CENTER);
            stroke(255);
            image(this.img,this.x,this.y,this.w,this.h);
        }
    }
}