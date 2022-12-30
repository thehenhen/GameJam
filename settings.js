class Settings{
    constructor(){
        this.sett=false;
        this.jumpscares=false;
        this.volume=0.5;
        this.volumeLocked=false;
        this.jumpCoords=int(this.jumpscares);;
        titleAmbience.setVolume(0.1*this.volume);
        landSound.setVolume(0.01*this.volume);
        jumpSound.setVolume(0.01*this.volume);
        deathSound.setVolume(0.5*this.volume);
        deathSound2.setVolume(0.1*this.volume);
        typing.setVolume(0.01*this.volume);
    }

    show(){
        background(0);
        //noFill();
        fill(136, 8, 8); 
        //stroke(255);
        textSize(80);
        textAlign(RIGHT,CENTER);
        rectMode(CENTER);
        text("SETTINGS",900,120); 
        textSize(40);
        textAlign(LEFT,CENTER);
        if(mouseX>100 && mouseX<240 && mouseY>100 && mouseY<130){
            fill(250,150,150);
        }
        text("< BACK",100,120);
        fill(136, 8, 8); 
        text("Volume",150,250);
        fill(59, 13, 13);
        rect(650,250,400,20,20); 
        fill(136, 8, 8); 
        rectMode(CORNER);
        rect(450,240,map(this.volume,0,1,0,400),20,20);
        rectMode(CENTER);
        fill(255);
        if(this.volumeLocked){
            this.volume=map(mouseX,450,850,0,1);
            this.volume=constrain(this.volume,0,1);
            titleAmbience.setVolume(0.1*this.volume);
            landSound.setVolume(0.01*this.volume);
            jumpSound.setVolume(0.01*this.volume);
            deathSound.setVolume(0.5*this.volume);
            deathSound2.setVolume(0.1*this.volume);
            typing.setVolume(0.01*this.volume);
        }
        ellipse(map(this.volume,0,1,450,850),250,40,40);
        fill(136, 8, 8); 
        text("Jumpscares",150,350);
        if(!this.jumpscares){
            fill(59, 13, 13);
        }
        rect(650,350,100,50,50);
        fill(255);
        if(this.jumpCoords<int(this.jumpscares)){
            this.jumpCoords+=0.1;
        }else if(this.jumpCoords>int(this.jumpscares)){
            this.jumpCoords-=0.1;
        }
        this.jumpCoords=constrain(this.jumpCoords,0,1);
        ellipse(625+50*this.jumpCoords,350,40,40);  
        //text(mouseX+","+mouseY,mouseX,mouseY)      
    } 

    mouse(){
        if(mouseX>100 && mouseX<240 && mouseY>100 && mouseY<130){
            this.sett=false;
            menu.menu=true;
            landSound.play();
        }

        if(dist(mouseX,mouseY,map(this.volume,0,1,450,850),250)<=20 || (mouseX>=450 && mouseX<=850 && mouseY>=240 && mouseY<=260)){
            this.volumeLocked=true;
        }

        if(dist(mouseX,mouseY,625,350)<=20 || dist(mouseX,mouseY,675,350)<=20 || (mouseX>=625 && mouseX<=675 && mouseY>=325 && mouseY<=375)){
            this.jumpscares=!this.jumpscares;
        }
        
    }

    released(){
        if(this.volumeLocked){
            this.volumeLocked=false;
            console.log(this.volume);
            titleAmbience.setVolume(0.1*this.volume);
            landSound.setVolume(0.01*this.volume);
            jumpSound.setVolume(0.01*this.volume);
            deathSound.setVolume(0.8*this.volume);
            deathSound2.setVolume(0.8*this.volume);
            typing.setVolume(0.01*this.volume);
        }
    }
}

function mouseReleased(){
    settings.released();
}