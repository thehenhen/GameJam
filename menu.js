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
        textFont(consolaFont);
        text("SANTA'S",900,150); 
        text("TERROR",900,230); 
        textSize(40);
        if(mouseX<895 && mouseX>813 && mouseY>=337 && mouseY<=372){
            fill(250,150,150);
        }
        this.play=text("Play",900,350);
        fill(136, 8, 8); 
        if(mouseX<895 && mouseX>=723 && mouseY>=387 && mouseY<=423){
            fill(250,150,150);
        }
        text("Settings",900,400);
        fill(136, 8, 8); 
        if(mouseX<895 && mouseX>=637 && mouseY>=437 && mouseY<=465){
            fill(250,150,150);
        }
        text("Instructions",900,450);
        tint(250,200,200); 
        image(player.dying[0],300,300,420,280);
        tint(255);
        //console.log(mouseX+","+mouseY);
        
    } 

    mouse(){
        if(mouseX<895){
            if(mouseX>813 && mouseY>=337 && mouseY<=372){
                this.menu=false;
                textSize(20);
            } else if(mouseX>=723 && mouseY>=387 && mouseY<=423){
                this.menu=false;
                settings.sett=true;
                textSize(20);
                console.log("settings");
            } else if(mouseX>=637 && mouseY>=437 && mouseY<=465){
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