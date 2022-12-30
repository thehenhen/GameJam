class Menu{
    constructor(){
        this.menu=false;
        this.santa="";
        this.playing=false;
    }

    show(){
        if(!this.playing){
            titleAmbience.setVolume(0.1);
            titleAmbience.play();
            this.playing=true;
            console.log("playing");
        }
        
        background(0);
        //noFill();
        fill(136, 8, 8); 
        noStroke();
        textSize(100);
        textAlign(RIGHT,CENTER);
        textFont(consolaFont);
        if(overScreen.counter<3){
            text("SANTA'S",900,150);
        }else {
            this.santa="";
            for(let i=0;i<5;i++){
                this.santa+=char(floor(random(33,39))); 
            }
            text(this.santa+"'S",900,150);
        }
         

        text("TERROR",900,230); 
        textSize(20);
        text("Warning: Jumpscares",900,300);
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
        if(overScreen.counter<3){
            image(player.dying[0],300,300,420,280);
        }else{
            glitch.resetBytes();
            glitch.randomBytes(0.1);
            glitch.buildImage();            
            image(glitch.image,300,300,420,280);
        }
        tint(255);
        //console.log(mouseX+","+mouseY);
        
    } 

    mouse(){
        if(mouseX<895){
            if(mouseX>813 && mouseY>=337 && mouseY<=372){
                this.menu=false;
                textSize(20);
                titleAmbience.stop();
                this.playing=false;
            } else if(mouseX>=723 && mouseY>=387 && mouseY<=423){
                this.menu=false;
                settings.sett=true;
                textSize(20);
                landSound.setVolume(0.01);
                landSound.play();
            } else if(mouseX>=637 && mouseY>=437 && mouseY<=465){
                this.menu=false;
                instructions.instructions=true;
                textSize(20);
                landSound.setVolume(0.01);
                landSound.play();
            }
        }
        

    }
}

function mousePressed(){
    if(!overScreen.over){
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
}