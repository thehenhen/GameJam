class Settings{
    constructor(){
        this.sett=false;
    }

    show(){
        background(0);
        //noFill();
        fill(136, 8, 8); 
        //stroke(255);
        textSize(80);
        textAlign(RIGHT,CENTER);
        text("SETTINGS",900,120); 
        textSize(40);
        textAlign(LEFT,CENTER);
        if(mouseX>100 && mouseX<240 && mouseY>100 && mouseY<130){
            fill(250,150,150);
        }
        text("< BACK",100,120);
        //text(mouseX+","+mouseY,mouseX,mouseY);
        
    } 

    mouse(){
        if(mouseX>100 && mouseX<240 && mouseY>100 && mouseY<130){
            this.sett=false;
            menu.menu=true;
        }
    }
}