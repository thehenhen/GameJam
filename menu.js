class Menu{
    constructor(){
        this.menu=true;
    }

    show(){
        background(0);
        //noFill();
        fill(136, 8, 8); 
        //stroke(255);
        textSize(100);
        textAlign(RIGHT,CENTER);
        text("GAME",900,150); 
        text("TITLE",900,230); 
        textSize(40);
        if(mouseX<900 && mouseX>820 && mouseY>=330 && mouseY<=360){
            fill(250,150,150);
        }
        text("Play",900,350);
        fill(136, 8, 8); 
        if(mouseX<900 && mouseX>=760 && mouseY>=380 && mouseY<=410){
            fill(250,150,150);
        }
        text("Settings",900,400);
        fill(136, 8, 8); 
        if(mouseX<900 && mouseX>=697 && mouseY>=430 && mouseY<=460){
            fill(250,150,150);
        }
        text("Instructions",900,450);
        tint(250,200,200); 
        image(player.dying[0],300,300,420,280);
        tint(255);
        text(mouseX+","+mouseY,mouseX,mouseY);
        
    } 

    mouse(){
        if(mouseX<900){
            if(mouseX>820 && mouseY>=330 && mouseY<=360){
                this.menu=false;
                textSize(20);
            } else if(mouseX>=760 && mouseY>=380 && mouseY<=410){
                this.menu=false;
                settings.sett=true;
                textSize(20);
                console.log("settings");
            } else if(mouseX>=697 && mouseY>=430 && mouseY<=460){
                this.menu=false;
                instructions.instructions=true;
                textSize(20);
            }
        }
        

    }
}

function mousePressed(){
    if(menu.menu){
        menu.mouse();
    }
    if(settings.sett){
        settings.mouse();
    }
    if(instructions.instructions){
        instructions.mouse();
    }
}