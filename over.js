class GameOver{
    constructor(){
        this.over=false;
        this.counter=0;
        this.message=["it's not real",
        "why do you care about it",
        "it's just pixels",
        "it's doomed to die",
        "you can't save it",
        "it doesn't exist"]
        console.log(this.over);
        //this.start();
    }

    show(){
        background(0);
        textFont(consolaFont);
        textAlign(LEFT,CENTER);
        textSize(50);
        fill(136, 8, 8);
        noStroke();
        text("game over",120,400); 
        if(millis()-time>5000){
            
            background(0);
            //textAlign(CENTER,CENTER);
            //fill(255);
            //textSize(100);
            text(this.message[(this.counter)%this.message.length],120,400); 
        }
        if(millis()-time>5200){
            this.over=false;
            this.counter++;
        }
        //text("game over",120,400); 
    }

    start(){
        time=millis();
        this.over=true;
    }

    mouse(){

    }
}

