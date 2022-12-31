class Instructions{
    constructor(){
        this.instructions=false;
        this.santa="";
    }

    show(){
        background(0);
        //noFill();
        fill(136, 8, 8); 
        //stroke(255);
        textSize(80);
        textAlign(RIGHT,CENTER);
        text(this.txt("Instructions"),900,120); 
        textSize(40);
        textAlign(LEFT,CENTER);
        if(mouseX>100 && mouseX<240 && mouseY>100 && mouseY<130){
            fill(250,150,150);
        }
        text(this.txt("< BACK"),100,120);
        fill(136, 8, 8); 
        text(this.txt("WASD/Arrow Keys to move"),150,230);
        text(this.txt("SPACE/R to restart"),150,280);
        text(this.txt("Help Santa deliver the gifts"),150,360);
        text(this.txt("while avoiding the traps."),150,400);
        //text(mouseX+","+mouseY,mouseX,mouseY);
    } 

    txt(str, frame) {
        return (overScreen.counter < 1 ? str : gl.glitch(str, frame));
    }

    mouse(){
        if(mouseX>100 && mouseX<240 && mouseY>100 && mouseY<130){
            this.instructions=false;
            menu.menu=true;
            landSound.play();
        }
    }
}