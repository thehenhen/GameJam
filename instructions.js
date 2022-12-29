class Instructions{
    constructor(){
        this.instructions=false;
    }

    show(){
        background(0);
        //noFill();
        fill(136, 8, 8); 
        //stroke(255);
        textSize(80);
        textAlign(RIGHT,CENTER);
        text("Instructions",900,120); 
        textSize(40);
        textAlign(LEFT,CENTER);
        if(mouseX>100 && mouseX<240 && mouseY>100 && mouseY<130){
            fill(250,150,150);
        }
        text("< BACK",100,120);
        fill(136, 8, 8); 
        text("WASD/Arrow Keys to move",150,250);
        text("SPACE/R to restart",150,300);
        text("Help Santa deliver the gifts",150,380);
        text("while avoiding the traps. ",150,420);
        //text(mouseX+","+mouseY,mouseX,mouseY);
    } 

    mouse(){
        if(mouseX>100 && mouseX<240 && mouseY>100 && mouseY<130){
            this.instructions=false;
            menu.menu=true;
        }
    }
}