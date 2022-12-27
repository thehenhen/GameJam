class player{
    constructor(){
        this.x=0;
        this.y=100;
        this.vY=0;
        this.a=1;
        this.up=false;
        this.left=false;
        this.right=false;
    }

    update(){
        if(this.left){
            this.x-=5;
            console.log("A");
        } else if(this.right){
            this.x+=5;
            console.log("D");
        }
        if(this.up){
            this.y-=20;
            console.log("W");
        }
        if((this.y>280 || this.y+this.vY>280) && this.x>=70 && this.x<=110){
            this.y=280;
            this.up=false;
            this.vY=0;
        }
        if((this.y>260 || this.y+this.vY>260) && this.x>=90 && this.x<=310){
            this.y=260;
            this.up=false;
            this.vY=0;
        }
        if(this.y>300 || this.y+this.vY>300){
            this.y=300;
            this.up=false;
            this.vY=0;
        }else{
            this.vY+=this.a;
        }
        //if(frameCount%10==0){
            this.y+=this.vY;
        //ddd}
        //dddthis.keyPress();
    }

    keyPress(){
        if(keyIsPressed){
            if(key ==='a'){
                this.left=true;
            }
            if(key ==='d'){
                this.right=true;
            }
            if(key ==='w'){
                this.up=true;
            }
        }
    }

    keyRelease(){
        if(key ==='a'){
            this.left=false;
        }
        if(key ==='d'){
            this.right=false;
        }
        if(key ==='w'){
            //this.up=false;
        }
    }

    show(){
        fill(180,30,30);
        rect(this.x,this.y,20,50);
    }
}

function keyPressed(){
    p.keyPress();
}
function keyReleased(){
    p.keyRelease();
}

let p;

function setup(){
    createCanvas(1800,500);
    rectMode(CENTER)
    p = new player();
}

function draw(){
    background(0);
    fill(100);
    rect(width/2,412,1800,174);
    rect(90,315,20,20);
    rect(200,305,200,40);
    p.update();
    p.show();
    console.log(p.vY);
}