class Opening {
    constructor(){
        this.open=false;
        this.store1="Patient 1225";
        this.store2="Patient 1225";
        this.store3="Patient 1225";
        this.store4="Patient 1225";
        this.show1="";
        this.show2="";
        this.show3="";
        this.show4="";
        this.store=[this.store1,this.store2,this.store3,this.store4];
        this.show=[this.show1,this.show2,this.show3,this.show4];
        this.counter=0;
        this.paragraph=0;
        this.time=millis();
    }

    display(){
        background(0);
        fill(255);
        textSize(20);
        noStroke();
        textAlign(LEFT,CENTER);
        textFont(consolaFont);
        text(this.show1,100,100); 
        //text(this.show2,100,200); 
        //text(this.show3,100,200); 
        //text(this.show4,100,200); 
        if(millis()-this.time>100){
            this.show1+=this.store1[this.counter];
            this.counter=min(11,this.counter+1);
            this.time=millis();
            console.log(this.show1);
        }
    }
}